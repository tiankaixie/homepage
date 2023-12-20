import Image from "next/image"

import { siteConfig } from "@/config/site"
import { getHomepageItemsDatabase } from "@/lib/notion"
import ParticleVis from "@/components/particle-vis"
import { SocialNav } from "@/components/social-nav"

const buildHomepageItemComponents = (items: any) => {
  return items.map((item: any) => {
    return (
      <div className="col-span-4 bg-primary p-4 md:col-span-2 lg:col-span-1">
        <div className="flex aspect-square flex-col justify-center p-14 lg:p-20">
          <Image
            className="rounded-md shadow-md"
            src={item.properties.Image.files[0].file.url}
            alt="Picture of the author"
            width={1792}
            height={1024}
          />
        </div>
        <div>{item.properties.Name.title[0]?.plain_text} (Coming Soon)</div>
      </div>
    )
  })
}

export default async function IndexPage() {
  const homepageItems = await getHomepageItemsDatabase()
  console.log("homepageItems")
  const homepageItemsComponents = buildHomepageItemComponents(homepageItems)

  return (
    <section className=" mx-auto grid grid-cols-12 items-center gap-6 p-6">
      <div className="container col-span-12 flex h-80 items-center justify-center text-center ">
        <p className="text-md font-light text-foreground lg:text-2xl">
          Tiankai Xie is a multidisciplinary researcher specializing in
          Human-centered Artificial Intelligence. He is dedicated to designing
          and developing the next-gen of interactive systems that empower
          leveraging the power of data and automation.
        </p>
      </div>
      <div className="col-span-12 ">
        <hr className="border-t-1" />
      </div>
      <div className="col-span-12">
        <div className="grid grid-cols-3 gap-2">{homepageItemsComponents}</div>
      </div>
      <div className="col-span-12 pt-4 ">
        <div className="hidden lg:block">
          <SocialNav items={siteConfig.socialNav} />
        </div>
        <p className=" text-center">
          Copyright © 2023 Tiankai Xie. All rights reserved.
        </p>
      </div>
    </section>
  )
}
