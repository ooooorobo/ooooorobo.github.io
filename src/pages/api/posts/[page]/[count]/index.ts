import { NextApiRequest, NextApiResponse } from "next";
import PostUtil from "@src/utils/postUtil";
import { PostListElement } from "@src/model/post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostListElement[]>
) {
  const { page = 0, count = 10 } = req.query;
  const posts = await PostUtil.instance.getPosts(
    Number(page) || 0,
    Number(count) || 10
  );
  res.status(200).json(posts);
}
