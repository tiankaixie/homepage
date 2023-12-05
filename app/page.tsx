import ParticleVis from "@/components/particle-vis"

export default function IndexPage() {
  return (
    <section className=" mx-auto grid grid-cols-12 items-center gap-6 p-6">
      <div className="col-span-12 flex h-96 items-end md:col-span-8 lg:col-span-6">
        <p className="font-landing text-2xl font-medium text-foreground">
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
        <div className="grid grid-cols-3 gap-2">
          {/* <div className="col-span-4  bg-primary p-4 md:col-span-2 lg:col-span-1"> */}
          {/*   <div className="aspect-square p-4"></div> */}
          {/*   <div>Articles </div> */}
          {/* </div> */}
          <div className="col-span-4 bg-primary p-4 md:col-span-2 lg:col-span-1">
            <div className="aspect-square p-24">
              <ParticleVis />
            </div>
            <div>Articles (Coming soon)</div>
          </div>
        </div>
      </div>
      {/* <div className="col-span-12 "> */}
      {/*   <hr className="border-t-1" /> */}
      {/* </div> */}
      <div className="col-span-12 ">
        <p className="pt-4 text-center">
          Copyright © 2023 Tiankai Xie. All rights reserved.
        </p>
      </div>
    </section>
  )
}
