import {GetStaticProps} from 'next';
import Head from 'next/head';
import {ParsedUrlQuery} from 'querystring';

import ButtonBack from '@/components/ButtonBack/ButtonBack';
import Layout from 'components/Layout';
import {getArticle, getListOfArticles} from 'services/articles';

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths = async () => {
  const articles = getListOfArticles();

  return {
    paths: articles.map((art) => ({params: {slug: art.slug}})),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (req) => {
  const {slug} = req.params as Params;
  const article = await getArticle(slug);

  return {
    props: {article},
  };
};

type Article = {
  title: string;
  description: string;
  cover: string;
  date: string;
  tags: string[];
  content: string;
};

export default function Article({article}: {article: Article}) {
  return (
    <Layout>
      <Head>
        <title>{article.title}</title>
      </Head>
      <div className="px-10">
        <ButtonBack />
        <h1 className="pt-6 pb-14 text-3xl font-bold text-center">
          {article.title}
        </h1>
        <div
          className="max-w-3xl mx-auto articleBody"
          dangerouslySetInnerHTML={{__html: article.content}}
        />
      </div>
    </Layout>
  );
}
