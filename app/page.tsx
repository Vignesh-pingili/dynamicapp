import data from "./lib/data.json"
import type { Metadata } from 'next'

export async function generateMetadata(
): Promise<Metadata> {
  const title = await data.website.routes.find(ele => ele.path == "/").meta.title || "";
    const description = await data.website.routes.find(ele => ele.path == "/").meta.description || "";
  return {
    title: `${title}`,
    description: `${description}`
  }
}

export default async function page() {
    const Data = data.website.routes.find(ele => ele.path == "/")
  return  <div><h1>{Data.content.h1}</h1>
       <p>{Data.content.description}</p></div>
}
