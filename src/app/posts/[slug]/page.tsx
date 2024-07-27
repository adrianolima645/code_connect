import { CardPost } from "@/components/CardPost";
import { Post } from "@/components/CardPost/types";
import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html";
import styles from "./page.module.css";

async function getPostBySlug(_slug: string) {
  const response = await fetch(`http://localhost:3042/posts?slug=${_slug}`);
  if (!response.ok) {
    logger.error("Erro ao obter posts");
    return {} as Post;
  }
  logger.info("Posts obtidos com sucesso!");
  const data = await response.json();

  if (data.length == 0) {
    return {} as Post;
  }

  const post: Post = data[0];

  const processedContent = await remark()
    .use(html)
    .process(post.markdown);
  const contentHtml = processedContent.toString();

  post.markdown = contentHtml;

  return post;
}

type PageProps = {
  params: { slug: string };
};

export default async function PagePost (props: PageProps) {
  const slug = props.params?.slug || "";
  const post: Post = await getPostBySlug(slug);

  return (
    <div>
      <CardPost post={post} highlight />
      <h3 className={styles.subtitle}>Código:</h3>
      <div className={styles.code}>
        <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
      </div>
    </div>
  );
};
