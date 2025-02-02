import { groq } from "next-sanity"

export const allProducts = groq`*[_type == "product"]`;

export const  fourProductQuery = groq`*[_type == "product"] [0...4]`;