import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export async function getCVDatabase() {
  const databaseId = process.env.NOTION_DATABASE_ID
  const response = await notion.databases.query({
    database_id: databaseId,
  })
  console.log(response.results.length)
  return response.results
}
