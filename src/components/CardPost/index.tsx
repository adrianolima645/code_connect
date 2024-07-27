import { Avatar } from "../Avatar";
import Image from "next/image";
import { Post } from "./types";
import Link from "next/link";
import styles from "./cardpost.module.css";

interface CardPostProps {
  post: Post;
  highlight?: boolean;
}

export const CardPost: React.FC<CardPostProps> = ({ post, highlight }) => {
  return (
    <Link href={`/posts/${post.slug}`} className={styles.link}>
      <article className={styles.card} style={{ width: highlight ? 993 : 486 }}>
        <header className={styles.header}>
          <figure
            style={{
              height: highlight ? 300 : 133,
            }}
          >
            <Image
              src={post.cover}
              alt={`Capa do post de título ${post.title}`}
              fill
            />
          </figure>
        </header>
        <section className={styles.body}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </section>
        <footer className={styles.footer}>
          <Avatar name={post.author.name} imageSrc={post.author.avatar} />
        </footer>
      </article>
    </Link>
  );
}
