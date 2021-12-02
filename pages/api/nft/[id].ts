// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { promises } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = Number(req.query.id);
  const file = await promises.readFile(`./public/json/${id}.json`);
  const json = JSON.parse(file.toString());
  res.status(200).json(json);
}
