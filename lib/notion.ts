import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export async function getCVDatabase() {
  const databaseId = process.env.NOTION_CV_DATABASE_ID
  if (!databaseId) {
    throw new Error("CV Database ID is not defined")
  }
  const response = await notion.databases.query({
    database_id: databaseId,
  })
  return response.results
}

export async function getHomepageItemsDatabase() {
  const databaseId = process.env.NOTION_HOMEPAGEITEMS_DATABASE_ID
  if (!databaseId) {
    throw new Error("Homepage Items Database ID is not defined")
  }
  const response = await notion.databases.query({
    database_id: databaseId,
  })
  return response.results
}
