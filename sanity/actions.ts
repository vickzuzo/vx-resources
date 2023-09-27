import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetResourcesParams {
  query: string;
  category: string;
  page: string;
}

export const getResources = async (params: GetResourcesParams) => {
  const { category, page, query } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: "resource",
        query,
        category,
        page: parseInt(page),
      })}{
        title,
        _id,
        downloadLink,
        views,
        category,
        "slug": slug.current,
        "image": poster.asset->url,
          }`
    );
    return resources;
  } catch (error) {
    console.log(error);
  }
};

export const getResourcesPlaylist = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "resourcePlaylist"]{
        title,
        _id,
        resources[0...6]->{
         title,
         _id,
         downloadLink,
         views,
         category,
         "slug": slug.current,
         "image": poster.asset->url,
        },
          }`
    );
    return resources;
  } catch (error) {
    console.log(error);
  }
};
