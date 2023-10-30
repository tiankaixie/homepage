import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function CV() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <div className="grid grid-cols-5">
          {/* Education Section */}
          <div></div>
          <div className="col-span-4">
            <h1 className="text-3xl font-medium text-primary-foreground ">
              Education
            </h1>
          </div>

          {/* Ph.D. */}
          <div className="pr-4 text-right text-xs">
            <p className="pt-4">Aug. 2023</p>
            <p className="">- Aug. 2018</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3  text-base text-primary-foreground">
              Ph.D. in Computer Science
            </h3>
            <h4 className="text-sm">Arizona State University, Tempe, AZ </h4>
            <p className="text-xs">
              <span className="">Advisor:</span> Ross Maciejewski
            </p>
            <p className="text-xs">
              <span className="">Dissertation:</span> Explaining Vulnerabilities
              in Machine Learning through Visual Analytics
            </p>
            <p className="text-xs">
              <span className="">Committee:</span> Ross Maciejewski, Huan Liu,
              Chris Bryan, and Hanghang Tong
            </p>
          </div>

          {/* M.S. */}
          <div className="pr-4 text-right text-xs">
            <p className="pt-4">May 2017</p>
            <p>- Aug. 2015</p>
          </div>
          <div className="col-span-4 ">
            <h3 className="pt-3 text-base text-primary-foreground">
              M.S. in Computer Science
            </h3>
            <h4 className="text-sm">
              Steven Institute of Technology, Hoboken, NJ{" "}
            </h4>
          </div>

          {/* B.S. */}
          <div className="pr-4 text-right text-xs">
            <p className="pt-4">July 2015</p>
            <p className="">- Sep. 2011</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-base text-primary-foreground">
              B.S. in Computer Science
            </h3>
            <h4 className="text-sm">
              Beijing Forestry University, Beijing, China{" "}
            </h4>
          </div>

          {/* Experience Section */}
          <div></div>
          <div className="col-span-4">
            <h1 className="pt-8 text-3xl font-medium text-primary-foreground">
              Research Experience
            </h1>
          </div>

          <div className="pr-4 text-right text-xs">
            <p className="pt-4">Present</p>
            <p className="">- Aug. 2023</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-base text-primary-foreground">
              Postdoctoral Research Scholar
            </h3>
            <h4 className="text-sm">
              VADER Lab, Arizona State University, Tempe, AZ{" "}
            </h4>
            <p className="text-xs">
              Work as a postdoctoral research scholar at the VADER Lab.
              Collaborate with multidisciplinary teams, mentor graduate and
              undergraduate students, and participate in grant writing
              activities to secure funding for ongoing and future research
              projects in machine learning and visual analytics fields.
            </p>
            <div className="py-1">
              <Icons.link className="inline w-4" />
              <span className="pl-1">
                <a
                  className="text-xs text-sky-700"
                  href="https://vader.lab.asu.edu/"
                >
                  VADER Lab
                </a>
              </span>
            </div>
          </div>

          {/* GSA */}
          <div className="pr-4 text-right text-xs">
            <p className="pt-4">Aug. 2023</p>
            <p className="">- Aug. 2018</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-base text-primary-foreground">
              Graduate Research Associate
            </h3>
            <h4 className="text-sm">
              VADER Lab, Arizona State University, Tempe, AZ{" "}
            </h4>
            <p className="text-xs">
              <span className="">Advisor:</span> Ross Maciejewski
            </p>
            <p className="text-xs">
              Work as a graduate research associate at the VADER Lab with the
              research topics in Explainable AI and Visual Analytics. The
              dissertation topic is{" "}
              <span className="italic">
                Explaining the vulnerabilities of machine learning models
                through visual analytics.
              </span>
            </p>
            <div className="py-1">
              <Icons.link className="inline w-4" />
              <span className="pl-1">
                <a
                  className="text-xs text-sky-700"
                  href="https://vader.lab.asu.edu/"
                >
                  VADER Lab
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4">
            <h1 className="pt-8 text-3xl font-medium text-primary-foreground">
              Industry Experience
            </h1>
          </div>

          {/* Intern Epsilon */}
          <div className="pr-4 text-right text-xs">
            <p className="pt-4">Aug. 2021</p>
            <p className="">- May 2021</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-base text-primary-foreground">
              Data Scientist Intern
            </h3>
            <h4 className="text-sm">
              Epsilon Data Management, LLC., Chicago, IL{" "}
            </h4>
            <p className="text-xs">
              <span className="">Mentor:</span> Chihua Ma
            </p>
            <p className="text-xs">
              Designed and implemented the algorithm to extract highlights from
              the aggregated audience data across 2500+ companies. Designed,
              implemented and integrated the Intelligent Audience Profile (IAP)
              visualization view driven by the designed highlighting algorithm
              into the DiME visual analytics platform.
            </p>
            <div className="py-1">
              <Icons.link className="inline w-4" />
              <span className="pl-1">
                <a
                  className="text-xs text-sky-700"
                  href="https://www.epsilon.com/us/products-and-services/epsilon-peoplecloud/digital-media-solutions"
                >
                  Epsilon & DiME
                </a>
              </span>
            </div>
          </div>

          {/* Intern Epsilon */}
          <div className="pr-4 text-right text-xs">
            <p className="pt-4">May 2018</p>
            <p className="">- July 2017</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-base text-primary-foreground">
              Co-founder
            </h3>
            <h4 className="text-sm">RobotGyms, Inc., San Mateo, CA </h4>
            <p className=" text-xs ">
              Designed, implemented Robotgyms&apos;s infrastructure and
              curriculum. and maintained the company&apos;s teaching devices,
              including local network and devices&apos; software and hardware
              installation and upgrade. Developed policies and training plans
              for online resource administration and usage. Give lectures for
              40+ students and took charge of customer consultation, and
              conducted SEO and SMO for branding programs as well as the
              company.
            </p>
            <div className="py-1">
              <Icons.link className="inline w-4" />
              <span className="pl-1">
                <a
                  className="text-xs text-sky-700"
                  href="https://robotgyms.com"
                >
                  RobotGyms
                </a>
              </span>
            </div>
          </div>

          {/* Publication Section */}
          <div></div>
          <div className="col-span-4">
            <h1 className="pt-8 text-3xl font-medium text-primary-foreground">
              Publications
            </h1>
          </div>

          {/* Infofair */}
          <div className="pr-4  text-right">
            <p className="py-4 text-xs ">Big Data 2022</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-sm text-primary-foreground">
              Infofair: Information-theoretic intersectional fairness
            </h3>
            <p className="text-xs">
              Jian Kang, Tiankai Xie, Xintao Wu, Ross Maciejewski, and Hanghang
              Tong
            </p>
            <h4 className="text-xs italic">
              IEEE International Conference on Big Data
            </h4>
          </div>

          {/* FairrankVis */}
          <div className="pr-4  text-right">
            <p className="py-4 text-xs">VIS 2021</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-sm text-primary-foreground">
              FairRankVis: A Visual Analytics Framework for Exploring
              Algorithmic Fairness in Graph Mining Models
            </h3>
            <p className="text-xs">
              Tiankai Xie, Yuxin Ma, Jian Kang, Hanghang Tong, and Ross
              Maciejewski
            </p>
            <h4 className="text-xs  italic">
              IEEE Transactions on Visualization and Computer Graphics, 2021{" "}
            </h4>
          </div>

          {/* Auditing */}
          <div className="pr-4  text-right">
            <p className="py-4 text-xs">VIS 2020</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-sm text-primary-foreground">
              Auditing the Sensitivity of Graph-based Ranking with Visual
              Analytics
            </h3>
            <p className="text-xs">
              Tiankai Xie, Yuxin Ma, Jian Kang, Hanghang Tong, and Ross
              Maciejewski
            </p>
            <h4 className="text-xs italic">
              IEEE Transactions on Visualization and Computer Graphics, 2020{" "}
            </h4>
          </div>

          {/* AML */}
          <div className="pr-4  text-right">
            <p className="py-4 text-xs">VIS 2019</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-sm text-primary-foreground">
              Explaining Vulnerabilities to Adversarial Machine Learning through
              Visual Analytics
            </h3>
            <p className="text-xs">
              Yuxin Ma, Tiankai Xie, Jundong Li, and Ross Maciejewski
            </p>
            <h4 className="text-xs italic">
              IEEE Transactions on Visualization and Computer Graphics, 2019{" "}
            </h4>
          </div>

          {/* Invited Talks Section */}
          <div></div>
          <div className="col-span-4">
            <h1 className="pt-8 text-3xl font-medium text-primary-foreground">
              Invited Talks
            </h1>
          </div>

          {/* FairrankVis */}
          <div className="pr-4  text-right">
            <p className="py-4 text-xs ">Oct. 2021</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-sm text-primary-foreground">
              FairRankVis: A Visual Analytics Framework for Exploring
              Algorithmic Fairness in Graph Mining Models
            </h3>
            <h4 className="text-xs">
              IEEE Transactions on Visualization and Computer Graphics, 2021{" "}
            </h4>
          </div>

          {/* Auditing */}
          <div className="pr-4  text-right">
            <p className="py-4 text-xs">Oct. 2020</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-sm font-medium text-primary-foreground">
              Auditing the Sensitivity of Graph-based Ranking with Visual
              Analytics
            </h3>
            <h4 className="text-xs">
              IEEE Transactions on Visualization and Computer Graphics, 2020{" "}
            </h4>
          </div>

          {/* AML */}
          <div className="pr-4  text-right">
            <p className="py-4 text-xs">Oct. 2019</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-sm font-medium text-primary-foreground">
              Explaining Vulnerabilities to Adversarial Machine Learning through
              Visual Analytics
            </h3>
            <h4 className="text-xs">
              IEEE Transactions on Visualization and Computer Graphics, 2019{" "}
            </h4>
          </div>

          {/* Invited Talks Section */}
          <div></div>
          <div className="col-span-4">
            <h1 className="pt-8 text-3xl font-medium text-primary-foreground">
              Professional Services
            </h1>
          </div>

          {/* FairrankVis */}
          <div className="pr-4 text-right text-xs">
            <p className="pt-4">2020 - 2023</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-sm text-primary-foreground">
              Reviewer of IEEE Transactions on Visualization and Computer
              Graphics
            </h3>
          </div>

          {/* Auditing */}
          <div className="pr-4  text-right">
            <p className="py-4 text-xs">2022</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-sm text-primary-foreground">
              Reviewer of IEEE Computer Graphics & Applications
            </h3>
          </div>

          {/* Reference Section */}
          <div></div>
          <div className="col-span-4">
            <h1 className="pt-8 text-3xl font-medium text-primary-foreground">
              Reference
            </h1>
          </div>

          <div></div>
          <div className="col-span-4">
            <p className="pt-3 text-sm text-primary-foreground">
              Dr. Ross Maciejewski, <span className="">Professor</span>
            </p>
            <p className="text-xs">
              The School of Computing and Augmented Intelligence (SCAI)
            </p>
            <p className=" text-xs italic">Arizona State University</p>
            <div className="py-1">
              <Icons.link className="inline w-4" />
              <span className="pl-1">
                <a
                  className="text-xs text-sky-700"
                  href="http://rmaciejewski.faculty.asu.edu/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4">
            <p className="text-sm text-primary-foreground">
              Dr. Huan Liu, <span className="">Professor</span>
            </p>
            <p className="text-xs">
              The School of Computing and Augmented Intelligence (SCAI)
            </p>
            <p className="text-xs italic">Arizona State University</p>
            <div className="py-1">
              <Icons.link className="inline w-4" />
              <span className="pl-1">
                <a
                  className="text-xs text-sky-700"
                  href="http://www.public.asu.edu/~huanliu/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4 text-sm">
            <p className="text-primary-foreground">
              Dr. Hanghang Tong, <span className="">Associate Professor</span>
            </p>
            <p className="text-xs ">Department of Computer Science</p>
            <p className="text-xs italic ">
              University of Illinois at Urbana-Champaign
            </p>
            <div className="py-1">
              <Icons.link className="inline w-4" />
              <span className="pl-1">
                <a
                  className="text-xs text-sky-700"
                  href="http://tonghanghang.org/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4 text-sm">
            <p className="text-primary-foreground">
              Dr. Chris Bryan,{" "}
              <span className="font-light">Assistant Professor</span>
            </p>
            <p className="text-xs">
              The School of Computing and Augmented Intelligence (SCAI)
            </p>
            <p className="text-xs italic">Arizona State University</p>
            <div className="py-1">
              <Icons.link className="inline w-4" />
              <span className="pl-1">
                <a
                  className="text-xs text-sky-700"
                  href="https://chrisbryan.github.io/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4 text-sm ">
            <p className="text-primary-foreground">
              Dr. Yuxin Ma, <span className="">Assistant Professor</span>
            </p>
            <p className="text-xs">
              Department of Computer Science and Engineering
            </p>
            <p className="text-xs italic">
              Southern University of Science and Technology
            </p>
            <div className="py-1">
              <Icons.link className="inline w-4" />
              <span className="pl-1">
                <a className="text-xs text-sky-700" href="https://mayuxin.me/">
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4 text-sm ">
            <p className="text-primary-foreground">
              Dr. Jundong Li, <span className="">Assistant Professor</span>
            </p>
            <p className="text-xs">
              Department of Computer Science, and School of Data Science
            </p>
            <p className="text-xs italic">University of Virginia</p>
            <div className="py-1">
              <Icons.link className="inline w-4" />
              <span className="pl-1">
                <a
                  className="text-xs text-sky-700"
                  href="http://www.ece.virginia.edu/~jl6qk/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>
          {/* End */}
        </div>
      </div>
    </section>
  )
}
