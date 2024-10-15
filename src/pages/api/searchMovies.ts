// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MovieApiResponse } from "@/types/movies";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieApiResponse>
) {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API KEY not defined");
    }

    const query = req.query.query;

    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/movie",
      params: {
        query,
        include_adult: "false",
        language: "en-US",
        page: "1",
        api_key: apiKey,
      },
    };
    const response = await axios(options);

    res.status(200).json(response.data);
  } catch (e) {
    console.log("API ERROR", e);
  }
}
