import data from "../lib/data.json"
import type { Metadata, ResolvingMetadata } from 'next'
type Props = {
  params: Promise<any>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const path = await params
  const title = await data.website.routes.find(ele => ele.path == "/" + path?.slug)?.meta.title || "";
    const description = await data.website.routes.find(ele => ele.path == "/" + path?.slug)?.meta.description || "";
  return {
    title: `${title}`,
    description: `${description}`
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const Data = data.website.routes.find(ele => ele.path == "/" + slug) || ""
  // console.log(Data?.content.description,"data");
  
  return <>{Data ? <><h1>{Data.content.h1}</h1>
       <p>{Data.content.description}</p></>:
       <div><p>Page Not Found</p></div>}
       
    </>

}


