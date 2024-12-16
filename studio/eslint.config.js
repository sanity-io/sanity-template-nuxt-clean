import studio from '@sanity/eslint-config-studio'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['dist/', '.sanity/'],
  },
  ...studio,
]
