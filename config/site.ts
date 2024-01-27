import navLinks from "./site.json"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "HK's Home",
  description: "HK's Home",
  mainNav: [
    {
      title: "HK's Home",
      href: "/",
    },
  ],
  links: {
    blog: "https://okhk.net",
    github: "https://github.com/hkint",
  },
  navLinks,
}
