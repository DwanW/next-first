import { useRouter } from "next/router";
import Link from "next/link";

const post = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <br />
      <Link href="/example">Go Back</Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const post = await res.json();
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  const ids = posts.map((post) => post.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default post;
