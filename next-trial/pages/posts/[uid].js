//nextjs established the naming of files this way => lets you know that it is a dynamic route
// you can retrieve pages like http://localhost:3000/posts/:uid
import { client } from "../../prismic-configuration";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";

export default function Post({ data }) {
  console.log(data.body);
  return (
    <React.Fragment>
      <article>
        <header>{RichText.asText(data.title)}</header>
        <main>{RichText.asText(data.post_body)}</main>
      </article>
    </React.Fragment>
  );
}

export async function getStaticProps({ params }) {
  const { uid } = params;
  const { data } = await client.getByUID("post", uid);
  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at("document.type", "post")
  );

  const paths = results.map((post) => ({
    params: {
      uid: post.uid,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
