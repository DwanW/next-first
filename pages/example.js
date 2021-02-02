import React from "react";
import Link from "next/link";

const Example = ({ posts }) => {
  return (
    <div>
      <h1>Examples</h1>
      {posts.map((post) => (
        <Link href="/post/[id]" as={`/post/${post.id}`} key={post.id}>
          <a>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </a>
        </Link>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Example;
