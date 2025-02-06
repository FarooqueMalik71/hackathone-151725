import { groq } from "next-sanity"

    export const allProducts = groq`*[_type == "product"] [10...36]`;

export const  fourProductQuery = groq`*[_type == "product"] [0...9]`;