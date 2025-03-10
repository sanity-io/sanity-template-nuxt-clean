type SiteMetadata = {
  title?: string;
  description?: string;
};

export function useSiteMetadata({ title, description }: SiteMetadata) {
  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    twitterTitle: title,
    twitterDescription: description,
    twitterCard: "summary",
  });

  useHead({
    htmlAttrs: {
      lang: "en",
    },
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png",
      },
    ],
  });
}
