import styles from "./page.module.css";
import { CardPost } from "@/components/CardPost";
import { Post } from "@/components/CardPost/types";
import { Search } from "@/components/Search";
import logger from '@/logger';
import Link from "next/link";

async function getAllPosts(page: string, title?: string) {
  let url = `http://localhost:3042/posts?_page=${page}&_per_page=4`;

  if (title) {
    url = `http://localhost:3042/posts?title=${title}&_page=${page}&_per_page=4`;
  }
  const response = await fetch(url);
  if (!response.ok) {
    logger.error("Erro ao obter posts");
    return [];
  }
  logger.info('Posts obtidos com sucesso!')
  return response.json();
}

type PageProps = {
  params: { slug: string };
  searchParams?: {
    page: string | undefined,
    query: string | undefined
  };
};

export default async function Home(props: PageProps) {
  const currentPage = props.searchParams?.page || '1';
  const title = props.searchParams?.query || "";
  const { data: posts, prev, next } = await getAllPosts(currentPage, title);

  return (
    <main className={styles.main}>
      <div>
        <Search />
      </div>
      <div className={styles.grid}>
        {posts?.map((post: Post) => (
          <CardPost post={post} key={post.id} />
        ))}
        <div className={styles.links}>
          {prev && <Link href={`/?page=${prev}`}>Página Anterior</Link>}
          {next && <Link href={`/?page=${next}`}>Próxima Página</Link>}
        </div>
      </div>
    </main>
  );
}
