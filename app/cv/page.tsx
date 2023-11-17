import { getCVDatabase } from "@/lib/notion"
import { Icons } from "@/components/icons"

interface DateObject {
  properties: {
    Date: {
      date: {
        start: string
      }
    }
  }
}
function compareDates(dateObject1: DateObject, dateObject2: DateObject) {
  const dateString1 = dateObject1.properties.Date.date.start
  const dateString2 = dateObject2.properties.Date.date.start
  const date1 = new Date(dateString1)
  const date2 = new Date(dateString2)

  // Compare dates
  if (date1 > date2) {
    return -1
  } else if (date1 < date2) {
    return 1
  } else {
    return 0
  }
}

interface SectionItem {
  properties: {
    Type: {
      select: {
        name: string
      }
    } | null
    Date: {
      rich_text: {
        plain_text: string
      }[]
      date: {
        start: string
      }
    } | null
    Time: {
      rich_text: {
        plain_text: string
      }[]
    } | null
    Name: {
      title: {
        plain_text: string
      }[]
    }
    Location: {
      rich_text: {
        plain_text: string
      }[]
    } | null
    Bullet1: {
      rich_text: {
        plain_text: string
      }[]
    } | null
    Bullet2: {
      rich_text: {
        plain_text: string
      }[]
    } | null
    Bullet3: {
      rich_text: {
        plain_text: string
      }[]
    } | null
    Link: {
      rich_text: {
        plain_text: string
      }[]
    } | null
    Link_Name: {
      rich_text: {
        plain_text: string
      }[]
    } | null
  }
}

const buildSectionComponents = (sectionItems: SectionItem[]) => {
  return sectionItems.sort(compareDates).map((sectionItem) => {
    // console.log(sectionItem.properties.Link.rich_text)
    return (
      <>
        <div className="pr-4 text-right text-xs">
          <p className="pt-4">
            {sectionItem.properties.Time.rich_text[0].plain_text}
          </p>
        </div>
        <div className="col-span-4">
          <h3 className="pt-3  text-base text-primary-foreground">
            {sectionItem.properties.Name.title[0].plain_text}
          </h3>
          <h4 className="text-sm">
            {sectionItem.properties.Location.rich_text[0].plain_text}
          </h4>
          {sectionItem.properties.Bullet1.rich_text[0] && (
            <p className="text-xs">
              {sectionItem.properties.Bullet1.rich_text[0].plain_text}
            </p>
          )}
          {sectionItem.properties.Bullet2.rich_text[0] && (
            <p className="text-xs">
              {sectionItem.properties.Bullet2.rich_text[0].plain_text}
            </p>
          )}
          {sectionItem.properties.Bullet3.rich_text[0] && (
            <p className="text-xs">
              {sectionItem.properties.Bullet3.rich_text[0].plain_text}
            </p>
          )}
          {sectionItem.properties.Link.rich_text[0] && (
            <div className="py-1">
              <Icons.link className="inline w-4" />
              <span className="pl-1">
                <a
                  className="text-xs text-sky-700"
                  href="https://vader.lab.asu.edu/"
                >
                  {sectionItem.properties.Link_Name.rich_text[0].plain_text}
                </a>
              </span>
            </div>
          )}
        </div>
      </>
    )
  })
}

const buildSectionComponentsSM = (sectionItems: SectionItem[]) => {
  return sectionItems.sort(compareDates).map((sectionItem) => {
    // console.log(sectionItem.properties.Link.rich_text)
    return (
      <>
        <div className="pr-4  text-right">
          {sectionItem.properties.Date.rich_text && (
            <p className="py-4 text-xs ">
              {sectionItem.properties.Time.rich_text[0].plain_text}
            </p>
          )}
        </div>
        <div className="col-span-4">
          <h3 className="pt-3 text-sm text-primary-foreground">
            {sectionItem.properties.Name.title[0].plain_text}
          </h3>
          {sectionItem.properties.Bullet1.rich_text[0] && (
            <p className="text-xs">
              {sectionItem.properties.Bullet1.rich_text[0].plain_text}
            </p>
          )}
          {sectionItem.properties.Bullet2.rich_text[0] && (
            <p className="text-xs italic">
              {sectionItem.properties.Bullet2.rich_text[0].plain_text}
            </p>
          )}
          {sectionItem.properties.Link.rich_text[0] && (
            <div className="py-1">
              <Icons.link className="inline w-4" />
              <span className="pl-1">
                <a
                  className="text-xs text-sky-700"
                  href="https://vader.lab.asu.edu/"
                >
                  {sectionItem.properties.Link_Name.rich_text[0].plain_text}
                </a>
              </span>
            </div>
          )}
        </div>
      </>
    )
  })
}

export default async function CV() {
  const cv = await getCVDatabase()

  const education = cv.filter(
    (item: SectionItem) => item.properties.Type.select.name === "education"
  )
  const educationComponents = buildSectionComponents(education)

  const researchExperience = cv.filter(
    (item: SectionItem) =>
      item.properties.Type.select.name === "research_experience"
  )
  const researchExperienceComponents =
    buildSectionComponents(researchExperience)

  const industryExperience = cv.filter(
    (item: SectionItem) =>
      item.properties.Type.select.name === "industry_experience"
  )
  const industryExperienceComponents =
    buildSectionComponents(industryExperience)

  const publications = cv.filter(
    (item: SectionItem) => item.properties.Type.select.name === "publications"
  )

  const publicationsComponents = buildSectionComponentsSM(publications)

  const invitedTalks = cv.filter(
    (item: SectionItem) => item.properties.Type.select.name === "invited_talks"
  )

  const invitedTalksComponents = buildSectionComponentsSM(invitedTalks)

  const professionalServices = cv.filter(
    (item: SectionItem) =>
      item.properties.Type.select.name === "professional_services"
  )

  const professionalServicesComponents =
    buildSectionComponentsSM(professionalServices)

  const references = cv.filter(
    (item: SectionItem) => item.properties.Type.select.name === "reference"
  )

  const referencesComponents = buildSectionComponentsSM(references)
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

          {educationComponents}

          {/* Experience Section */}
          <div></div>
          <div className="col-span-4">
            <h1 className="pt-8 text-3xl font-medium text-primary-foreground">
              Research Experience
            </h1>
          </div>

          {researchExperienceComponents}

          {/* Industry Experience Section */}

          <div></div>
          <div className="col-span-4">
            <h1 className="pt-8 text-3xl font-medium text-primary-foreground">
              Industry Experience
            </h1>
          </div>

          {industryExperienceComponents}

          {/* Publication Section */}
          <div></div>
          <div className="col-span-4">
            <h1 className="pt-8 text-3xl font-medium text-primary-foreground">
              Publications
            </h1>
          </div>

          {publicationsComponents}

          {/* Invited Talks Section */}
          <div></div>
          <div className="col-span-4">
            <h1 className="pt-8 text-3xl font-medium text-primary-foreground">
              Invited Talks
            </h1>
          </div>

          {invitedTalksComponents}

          {/* Professional Services Section */}

          <div></div>
          <div className="col-span-4">
            <h1 className="pt-8 text-3xl font-medium text-primary-foreground">
              Professional Services
            </h1>
          </div>

          {professionalServicesComponents}

          {/* Reference Section */}
          <div></div>
          <div className="col-span-4">
            <h1 className="pt-8 text-3xl font-medium text-primary-foreground">
              Reference
            </h1>
          </div>

          {referencesComponents}

          {/* End */}
        </div>
      </div>
    </section>
  )
}
