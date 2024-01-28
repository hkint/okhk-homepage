import { Content } from "@/components/content"
import { Profile } from "@/components/profile"
import { SiteFooter } from "@/components/site-footer"

import getInfo from "./links"

export const revalidate = 86400

export default async function IndexPage() {
  const info = getInfo()
  return (
    <div className="container relative mx-auto min-h-screen w-full px-0">
      <div className="flex-col">
        <div className="lg:mx-auto lg:flex lg:max-w-[1600px] lg:justify-between lg:px-16">
          <Profile intro={info.intro} socials={info.socials} />
          <Content links={info.links} posts={info.posts} />
        </div>
        <SiteFooter />
      </div>
    </div>
  )
}
