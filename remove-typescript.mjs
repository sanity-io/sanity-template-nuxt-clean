import { exec } from "node:child_process";
import fs from "fs/promises";
import path from "node:path";
import { cwd } from "node:process";
import util from "node:util";

const appPath = path.join(cwd(), "/app");
const studioPath = path.join(cwd(), "/studio");

// remove typescript
const filesToRemove = ["tsconfig.*", "*.ts", "env.d.ts"];

const execPromise = util.promisify(exec);

async function removeTypeScript(folderPath) {
  console.log("Initiated TS removal for ", folderPath);

  try {
    // installs
    if (folderPath === studioPath) {
      await execPromise(
        "npm install && npx tsc && npx prettier --write . && npx eslint --fix",
        {
          cwd: folderPath,
        }
      );
    } else {
      await execPromise(
        "npm install && npx prettier --write . && npx eslint --fix",
        {
          cwd: folderPath,
        }
      );
    }

    // remove files
    await execPromise(
      `npx rimraf -g ${filesToRemove.join(
        " "
      )} && npx rimraf -g "!(node_modules)**/**/*.ts" && npm uninstall rimraf typescript @sanity/types @portabletext/types`,
      {
        cwd: folderPath,
      }
    );

    // recursively loop through src folder to find all Nuxt file paths
    const nuxtFilePaths = [];

    async function scanFolderForNuxtFiles(folder) {
      const files = await fs
        .readdir(path.resolve(folder), {
          withFileTypes: true,
        })
        .catch((err) => {});

      if (files) {
        for (const file of files) {
          if (file.isFile() && file.name.endsWith(".vue")) {
            nuxtFilePaths.push(path.resolve(folder, file.name));
            continue;
          }

          if (file.isDirectory()) {
            await scanFolderForNuxtFiles(path.resolve(folder, file.name));
          }
        }
      }
    }

    await scanFolderForNuxtFiles(path.resolve(folderPath, "."));

    for (const nuxtFilePath of nuxtFilePaths) {
      const file = await fs.readFile(nuxtFilePath, {
        encoding: "utf8",
      });

      // remove typescript
      const newNuxtFile = file
        .replace(/^\s*interface\s+\w+\s*\{\s*[\s\S]*?\s*\}\s*$/gm, "")
        .replace(/<Post(\[\])?>/gm, "")
        .replace(/lang\s*=\s*["']\s*ts\s*["']/gm, "")
        .replace(
          /^import\s+\{\s*type\s+Post\s*\}\s+from\s+["']~\/types\/Post["'];?\s*/gm,
          ""
        )
        .replace(
          /^.*import\s+type\s*\{\s*Post\s*\}\s*from\s*"@sanity\/types".*\n?/gm,
          ""
        );

      fs.writeFile(nuxtFilePath, newNuxtFile);
    }

    // delete types folder
    if (folderPath === appPath) {
      fs.rmdir(path.join(folderPath, "/types"));
    }
    console.log("Finished");
  } catch (error) {
    console.log(error);
  }
}

await removeTypeScript(studioPath);
await removeTypeScript(appPath);
