import Head from 'next/head';

import Article from '@/components/Article/Article';
import Layout from '@/components/Layout';
import FollowUs from '@/components/readySections/FollowUs/FollowUs';
import TopPosts from '@/components/readySections/TopPosts/TopPosts';
import {getListOfArticles} from '@/services/articles';

export const getStaticProps = () => {
  const articles = getListOfArticles();

  return {
    props: {articles},
  };
};

type Article = {
  title: string;
  description: string;
  cover: string;
  date: string;
  tags: string[];
  slug: string;
};

export default function Home({articles}: {articles: Article[]}) {
  return (
    <Layout>
      <Head>
        <title>Blog - recent posts</title>
      </Head>
      <div className="flex flex-row px-10">
        <section className="md:basis-5/7 mb-10 md:border-r border-solid border-black">
          <h1 className="py-14 text-3xl font-bold uppercase border-b border-solid border-black">
            Discover our latest posts
          </h1>

          {articles.map((article, idx) => (
            <Article article={article} key={idx} />
          ))}
        </section>

        <div className="basis-2/7 hidden md:flex flex-col gap-16 ml-10 mt-10 ">
          <TopPosts articles={articles} />

          <span className="text-2xl font-bold uppercase">
            <FollowUs />
          </span>
        </div>
      </div>
    </Layout>
  );
}
