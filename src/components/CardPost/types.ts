import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";

export interface Author {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

export interface Post {
  id: number;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  author: Author;
  markdownHtml: string;
}
