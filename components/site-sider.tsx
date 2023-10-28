import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteSider() {
  return (
    <div className="h-[calc(100vh-1rem)] fixed w-56 bg-primary flex flex-col top-0 m-2 p-2  ">
      <div className="">
        <Link href="/" className="flex items-center space-x-2">
          {/* <Icons.logo className="h-6 w-6" /> */}
          <span className="inline-block font-serif italic text-2xl text-primary-foreground mb-5 ml-3">
            {siteConfig.name}
          </span>
        </Link>
        <MainNav items={siteConfig.mainNav} />
        <div className="text-xs font-semibold mt-4 mb-2 ml-2">Contact</div>
        <MainNav items={siteConfig.socialNav} />
        {/* <div className="flex flex-1 items-center justify-end space-x-4"> */}
        {/*   <nav className="flex items-center space-x-1"> */}
        {/*     <Link */}
        {/*       href={siteConfig.links.scholar} */}
        {/*       target="_blank" */}
        {/*       rel="noreferrer" */}
        {/*     > */}
        {/*       <div */}
        {/*         className={buttonVariants({ */}
        {/*           size: "sm", */}
        {/*           variant: "ghost", */}
        {/*         })} */}
        {/*       > */}
        {/*         <Icons.scholar className="h-5 w-5" /> */}
        {/*         <span className="sr-only">Google Scholar</span> */}
        {/*       </div> */}
        {/*     </Link> */}
        {/*     <Link */}
        {/*       href={siteConfig.links.github} */}
        {/*       target="_blank" */}
        {/*       rel="noreferrer" */}
        {/*     > */}
        {/*       <div */}
        {/*         className={buttonVariants({ */}
        {/*           size: "sm", */}
        {/*           variant: "ghost", */}
        {/*         })} */}
        {/*       > */}
        {/*         <Icons.gitHub className="h-5 w-5" /> */}
        {/*         <span className="sr-only">GitHub</span> */}
        {/*       </div> */}
        {/*     </Link> */}
        {/*     <Link */}
        {/*       href={siteConfig.links.instagram} */}
        {/*       target="_blank" */}
        {/*       rel="noreferrer" */}
        {/*     > */}
        {/*       <div */}
        {/*         className={buttonVariants({ */}
        {/*           size: "sm", */}
        {/*           variant: "ghost", */}
        {/*         })} */}
        {/*       > */}
        {/*         <Icons.instagram className="h-5 w-5 " /> */}
        {/*         <span className="sr-only">Instagram</span> */}
        {/*       </div> */}
        {/*     </Link> */}
        {/*     <Link */}
        {/*       href={siteConfig.links.twitter} */}
        {/*       target="_blank" */}
        {/*       rel="noreferrer" */}
        {/*     > */}
        {/*       <div */}
        {/*         className={buttonVariants({ */}
        {/*           size: "sm", */}
        {/*           variant: "ghost", */}
        {/*         })} */}
        {/*       > */}
        {/*         <Icons.twitter className="h-5 w-5 fill-current" /> */}
        {/*         <span className="sr-only">Twitter</span> */}
        {/*       </div> */}
        {/*     </Link> */}
        {/*     <ThemeToggle /> */}
        {/*   </nav> */}
        {/* </div> */}
      </div>
    </div>
  )
}
