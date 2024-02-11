import Image from "next/image"

import { siteConfig } from "@/config/site"
import { getHomepageItemsDatabase } from "@/lib/notion"
import { SocialNav } from "@/components/social-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/components/main-nav"

const buildHomepageFigure = (items: any) => {
  const item = items[0]
  return (
        <div className="flex justify-right items-center">
          <div className="text-right w-1/2 p-4">{item.properties.Name.title[0]?.plain_text}</div>
          <div className="flex flex-col justify-center">
            <Image
              src={item.properties.Image.files[0].file.url}
              alt="Picture of the author"
              width={800}
              height={800}
            />
          </div>
        </div>
  )
}

export default async function IndexPage() {
  const homepageItems = await getHomepageItemsDatabase()
  const homepageFigures = buildHomepageFigure(homepageItems)

  return (
      <section className="py-12 px-20">
        <div className="grid grid-cols-10 gap-6">
          <div className="col-span-4">
          </div>
        <div className="col-span-6 w-full h-full">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold py-5">TIANKAI XIE</div>
            <div className=""> XAI &nbsp;  | &nbsp; HCI &nbsp; | &nbsp; Visual Analytics </div>
          </div>

        <div className="w-1/2 py-5">
          Tiankai Xie is a multidisciplinary researcher specializing in Human-centered Artificial Intelligence. He is dedicated to designing and developing the next-gen of interactive systems that empower leveraging the power of data and automation.
        </div>

        </div>
        </div>

        <div className="grid grid-cols-10 gap-6">
          <div className="col-span-4">
            {homepageFigures}
          </div>

        </div>


        <div className="grid grid-cols-10 gap-6">
          <div className="col-span-4 flex h-60 justify-end items-center">
            <div> CONTENTS </div>
          </div>
          <div className="col-span-6 h-60 flex flex-col justify-center ">
            <MainNav items={siteConfig.mainNav}/>
          </div>

        </div>

        <div className="flex w-full flex-col justify-end items-end">
            <SocialNav items={siteConfig.socialNav}/>
            <ThemeToggle/>
        </div>
      </section>

  )
}
