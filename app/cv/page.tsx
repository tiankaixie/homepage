import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function CV() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <div className="grid grid-cols-5">
          {/* Education Section */}
          <div></div>
          <div className="col-span-4">
            <h1 className="text-3xl font-medium">Education</h1>
          </div>

          {/* Ph.D. */}
          <div className="pr-4 text-right text-xs font-light text-gray-500">
            <p className="pt-4">Present</p>
            <p className="">|</p>
            <p className="">August 2018</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3  text-base font-bold">
              Ph.D. in Computer Science
            </h3>
            <h4 className="text-base">Arizona State University, Tempe, AZ </h4>
            <p className="text-sm text-gray-500">
              <span className="text-gray-400">Advisor:</span> Ross Maciejewski
            </p>
            <p className="text-sm text-gray-500">
              <span className="text-gray-400">Dissertation:</span> Explaining
              Vulnerabilities in Machine Learning through Visual Analytics
            </p>
            <p className="text-sm text-gray-500">
              <span className="text-gray-400">Committee:</span> Ross
              Maciejewski, Huan Liu, Chris Bryan, and Hanghang Tong
            </p>
          </div>

          {/* M.S. */}
          <div className="pr-4 text-right text-xs font-light text-gray-500">
            <p className="pt-4">May 2017</p>
            <p>|</p>
            <p>August 2015</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-base font-bold">
              M.S. in Computer Science
            </h3>
            <h4 className="text-base">
              Steven Institute of Technology, Hoboken, NJ{" "}
            </h4>
          </div>

          {/* B.S. */}
          <div className="pr-4 text-right text-xs font-light text-gray-500">
            <p className="pt-4">July 2015</p>
            <p className="">|</p>
            <p className="">September 2011</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-base font-bold">
              B.S. in Computer Science
            </h3>
            <h4 className="text-base">
              Beijing Forestry University, Beijing, China{" "}
            </h4>
          </div>

          {/* Experience Section */}
          <div></div>
          <div className="col-span-4">
            <h1 className="pt-8 text-3xl font-medium">Experience</h1>
          </div>

          {/* GSA */}
          <div className="pr-4 text-right text-xs font-light text-gray-500">
            <p className="pt-4">Present</p>
            <p className="">|</p>
            <p className="">August 2018</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-base font-bold">
              Graduate Research Associate
            </h3>
            <h4 className="text-base">
              VADER Lab, Arizona State University, Tempe, AZ{" "}
            </h4>
            <p className="text-sm text-gray-500">
              <span className="text-gray-400">Advisor:</span> Ross Maciejewski
            </p>
            <p className="text-justify text-sm text-gray-400">
              Work as a research assistant for the VADER Lab with the research
              topics in Explainable AI and Visual Analytics. Current
              dissertation topic is 'Explaining the vulnerabilities of machine
              learning models through visual analytics'. Passed dissertation
              prospectus in Fall 2021.
            </p>
            <div className="py-1">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-xs font-light text-sky-700"
                  href="https://vader.lab.asu.edu/"
                >
                  VADER Lab
                </a>
              </span>
            </div>
          </div>

          {/* Intern Epsilon */}
          <div className="pr-4 text-right text-xs font-light text-gray-500">
            <p className="pt-4">August 2021</p>
            <p className="">|</p>
            <p className="">May 2021</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-base font-bold">Data Science Intern</h3>
            <h4 className="text-base">
              Epsilon Data Management, LLC., Chicago, IL{" "}
            </h4>
            <p className="text-sm text-gray-500">
              <span className="text-gray-400">Mentor:</span> Chihua Ma
            </p>
            <p className="text-justify text-sm text-gray-400">
              Designed and implemented the algorithm to extract highlights from
              the aggregated audience data across 2500+ companies. Designed,
              implemented and integrated the Intelligent Audience Profile (IAP)
              visualization view driven by the designed highlighting algorithm
              into the DiME visual analytics platform.
            </p>
            <div className="py-1">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-xs font-light text-sky-700"
                  href="https://www.epsilon.com/us/products-and-services/epsilon-peoplecloud/digital-media-solutions"
                >
                  Epsilon & DiME
                </a>
              </span>
            </div>
          </div>

          {/* Intern Epsilon */}
          <div className="pr-4 text-right text-xs font-light text-gray-500">
            <p className="pt-4">May 2018</p>
            <p className="">|</p>
            <p className="">July 2017</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-base font-bold">Co-founder</h3>
            <h4 className="text-base">RobotGyms, Inc., San Mateo, CA </h4>
            <p className="text-justify text-sm text-gray-400">
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
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-xs font-light text-sky-700"
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
            <h1 className="pt-8 text-3xl font-medium">Publications</h1>
          </div>

          {/* Infofair */}
          <div className="pr-4  text-right">
            <p className="py-4 text-xs font-light">Big Data 2022</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-sm font-medium">
              Infofair: Information-theoretic intersectional fairness
            </h3>
            <p className="text-sm font-light text-gray-400">
              Jian Kang, Tiankai Xie, Xintao Wu, Ross Maciejewski, and Hanghang
              Tong
            </p>
            <h4 className="text-sm font-light italic">
              IEEE International Conference on Big Data
            </h4>
          </div>

          {/* FairrankVis */}
          <div className="pr-4  text-right">
            <p className="py-4 text-xs font-light">VIS 2021</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-sm font-medium">
              FairRankVis: A Visual Analytics Framework for Exploring
              Algorithmic Fairness in Graph Mining Models
            </h3>
            <p className="text-sm font-light text-gray-400">
              Tiankai Xie, Yuxin Ma, Jian Kang, Hanghang Tong, and Ross
              Maciejewski
            </p>
            <h4 className="text-sm font-light italic">
              IEEE Transactions on Visualization and Computer Graphics, 2021{" "}
            </h4>
          </div>

          {/* Auditing */}
          <div className="pr-4  text-right">
            <p className="py-4 text-xs font-light">VIS 2020</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-sm font-medium">
              Auditing the Sensitivity of Graph-based Ranking with Visual
              Analytics
            </h3>
            <p className="text-sm font-light text-gray-400">
              Tiankai Xie, Yuxin Ma, Jian Kang, Hanghang Tong, and Ross
              Maciejewski
            </p>
            <h4 className="text-sm font-light italic">
              IEEE Transactions on Visualization and Computer Graphics, 2020{" "}
            </h4>
          </div>

          {/* AML */}
          <div className="pr-4  text-right">
            <p className="py-4 text-xs font-light">VIS 2019</p>
          </div>
          <div className="col-span-4">
            <h3 className="pt-3 text-sm font-medium">
              Explaining Vulnerabilities to Adversarial Machine Learning through
              Visual Analytics
            </h3>
            <p className="text-sm font-light text-gray-400">
              Yuxin Ma, Tiankai Xie, Jundong Li, and Ross Maciejewski
            </p>
            <h4 className="text-sm font-light italic">
              IEEE Transactions on Visualization and Computer Graphics, 2019{" "}
            </h4>
          </div>

          {/* Reference Section */}
          <div></div>
          <div className="col-span-4">
            <h1 className="pt-8 text-3xl font-medium">Reference</h1>
          </div>

          <div></div>
          <div className="col-span-4">
            <p className="text-sm pt-3">
              Dr. Ross Maciejewski,{" "}
              <span className="font-light">Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              The School of Computing and Augmented Intelligence (SCAI)
            </p>
            <p className="font-light text-sm italic text-gray-500">
              Arizona State University
            </p>
            <div className="py-1">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-xs font-light text-sky-700"
                  href="http://rmaciejewski.faculty.asu.edu/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4">
            <p className="text-sm">
              Dr. Huan Liu, <span className="font-light">Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              The School of Computing and Augmented Intelligence (SCAI)
            </p>
            <p className="font-light text-sm italic text-gray-500">
              Arizona State University
            </p>
            <div className="py-1">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-xs font-light text-sky-700"
                  href="http://www.public.asu.edu/~huanliu/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4 text-sm">
            <p>
              Dr. Hanghang Tong,{" "}
              <span className="font-light">Associate Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              Department of Computer Science
            </p>
            <p className="font-light italic text-gray-500">
              University of Illinois at Urbana-Champaign
            </p>
            <div className="py-1">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-xs font-light text-sky-700"
                  href="http://tonghanghang.org/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4 text-sm">
            <p>
              Dr. Chris Bryan,{" "}
              <span className="font-light">Assistant Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              The School of Computing and Augmented Intelligence (SCAI)
            </p>
            <p className="font-light italic text-gray-500">
              Arizona State University
            </p>
            <div className="py-1">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-xs font-light text-sky-700"
                  href="https://chrisbryan.github.io/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4 text-sm">
            <p>
              Dr. Yuxin Ma,{" "}
              <span className="font-light">Assistant Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              Department of Computer Science and Engineering
            </p>
            <p className="font-light italic text-gray-500">
              Southern University of Science and Technology
            </p>
            <div className="py-1">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-xs font-light text-sky-700"
                  href="https://mayuxin.me/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4 text-sm">
            <p>
              Dr. Jundong Li,{" "}
              <span className="font-light">Assistant Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              Department of Computer Science, and School of Data Science
            </p>
            <p className="font-light italic text-gray-500">
              University of Virginia
            </p>
            <div className="py-1">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-xs font-light text-sky-700"
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
