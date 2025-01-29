import { groq } from "next-sanity"

export const allProducts = groq`*[_type == "product"]`;