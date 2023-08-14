import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="leading-tight tracking-tighter md:text-2xl">
          Tiankai Xie
        </h1>
        <p className="max-w-[700px] text-sm text-muted-foreground">
          Postdoctoral Research Scholar (Interpretable AI / HCI / Visual
          Analytics)
        </p>
        <p>
          I am currently a dedicated Postdoctoral Research Scholar of Arizona
          State University. My intellectual pursuits revolve around the
          captivating convergence of Interpretable Machine Learning,
          Human-Computer Interaction, and Visual Analytics. My mission is to
          unravel the intricate layers of technology, ensuring its accessibility
          through transparent AI algorithms. Simultaneously, I&apos;m committed
          to crafting seamless interfaces that enrich Human-Computer
          Interaction, creating intuitive connections between users and digital
          systems. Moreover, my expertise extends to the realm of Visual
          Analytics, where I meticulously decipher intricate data patterns to
          facilitate insightful decision-making. With an unwavering commitment
          to pioneering research and engineering innovation, I ardently envision
          a future where technology fosters unity rather than division, shaping
          a landscape where innovation harmonizes with human understanding.
        </p>
        <p>
          At Arizona State University, I work with Dr.{" "}
          <Link href={siteConfig.links.ross}>Ross Maciejewski</Link> as a member
          of the <Link href={siteConfig.links.vader}>VADER lab</Link>. My
          research is supported by the U.S. Department of Homeland Security and
          the{" "}
          <Link href={siteConfig.links.nsf}>
            National Science Foundation Program on Fairness in AI in
            collaboration with Amazon.
          </Link>
        </p>
      </div>
      {/* <div className="flex gap-4"> */}
      {/*   <Link */}
      {/*     href={siteConfig.links.docs} */}
      {/*     target="_blank" */}
      {/*     rel="noreferrer" */}
      {/*     className={buttonVariants()} */}
      {/*   > */}
      {/*     Documentation */}
      {/*   </Link> */}
      {/*   <Link */}
      {/*     target="_blank" */}
      {/*     rel="noreferrer" */}
      {/*     href={siteConfig.links.github} */}
      {/*     className={buttonVariants({ variant: "outline" })} */}
      {/*   > */}
      {/*     GitHub */}
      {/*   </Link> */}
      {/* </div> */}
    </section>
  )
}
