import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export async function getCVDatabase() {
  const databaseId = process.env.NOTION_DATABASE_ID
  if (!databaseId) {
    throw new Error("Database ID is not defined")
  }
  const response = await notion.databases.query({
    database_id: databaseId,
  })
  return response.results
}
