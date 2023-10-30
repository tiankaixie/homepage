import ParticleVis from "@/components/particle-vis"

export default function IndexPage() {
  return (
    <div>
      <div className="pt-32 pb-10">
        <ParticleVis />
      </div>
      <section className="container mx-auto grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-start gap-2">
          <p className="text-sm font-normal text-center">
            My homepage is coming soon... credits to{" "}
            <a href="https://github.com/AmirTru/curl-noise">@AmirTru</a> for the
            particle visulization. In the meantime, you can check out my CV and
            bio.
          </p>
        </div>
      </section>
    </div>
  )
}
