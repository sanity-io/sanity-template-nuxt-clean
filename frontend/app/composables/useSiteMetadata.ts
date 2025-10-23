type SiteMetadata = {
  title?: string;
  description?: string;
  ogImage?: string;
};

export function useSiteMetadata({ title, description, ogImage }: SiteMetadata) {
  useServerSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    twitterTitle: title,
    twitterDescription: description,
    twitterCard: "summary",
    ogImage,
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
