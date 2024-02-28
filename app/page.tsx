import Image from "next/image"

import { siteConfig } from "@/config/site"
import { getHomepageItemsDatabase } from "@/lib/notion"
import { MainNav } from "@/components/main-nav"
import { SocialNav } from "@/components/social-nav"
import { ThemeToggle } from "@/components/theme-toggle"

const buildHomepageFigure = (items: any) => {
  const item = items[0]
  return (
    <div className="md:justify-right md: flex-row-reverse items-center md:flex">
      <div className="flex flex-col justify-center">
        <Image
          src={item.properties.Image.files[0].file.url}
          alt="Picture of the author"
          width={800}
          height={800}
        />
      </div>
      <div className="p-4 text-xs md:w-1/2 md:text-right">
        {item.properties.Name.title[0]?.plain_text}
      </div>
    </div>
  )
}

export default async function IndexPage() {
  const homepageItems = await getHomepageItemsDatabase()
  const homepageFigures = buildHomepageFigure(homepageItems)

  return (
    <section className="p-4 md:px-20 md:py-12">
      <div className="grid grid-cols-10 md:gap-6">
        <div className="xs:hidden sm:col-span-4"></div>
        <div className="col-span-10 h-full w-full md:col-span-6 ">
          <div className=" flex flex-col items-center md:flex-row md:justify-between">
            <div className="text-2xl font-bold md:py-5">TIANKAI XIE</div>
            <div className="">
              {" "}
              XAI &nbsp; | &nbsp; HCI &nbsp; | &nbsp; Visual Analytics{" "}
            </div>
          </div>

          <div className="py-5 text-center md:w-1/2 md:text-left">
            Tiankai Xie is a multidisciplinary researcher specializing in
            Human-centered Artificial Intelligence. He is dedicated to designing
            and developing the next-gen of interactive systems that empower
            leveraging the power of data and automation.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-10 gap-6">
        <div className="col-span-10 md:col-span-4">{homepageFigures}</div>
      </div>

      <div className="grid grid-cols-10 gap-6">
        <div className="col-span-10 flex justify-center pt-6 md:col-span-4 md:h-60 md:items-center md:justify-end md:pt-0">
          <div> CONTENTS </div>
        </div>
        <div className="col-span-10 flex flex-col items-center justify-center md:col-span-6 md:h-60 md:items-start ">
          <MainNav items={siteConfig.mainNav} />
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-end md:items-end">
        <SocialNav items={siteConfig.socialNav} />
        <ThemeToggle />
      </div>
    </section>
  )
}
