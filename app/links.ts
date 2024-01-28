import { siteConfig } from "@/config/site"

export default function getInfo() {
  return siteConfig.info
}

export interface Intro {
  name: string
  description: string
}

export type CategoryWithLinks = {
  icon: string
  title: string
  links: LinkItems[]
}

export interface LinkItems {
  icon: string
  url: string
  title: string
  description: string
}
