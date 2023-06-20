import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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
            <div
              key={idx}
              className="py-10 flex-col border-b border-solid border-black">
              <div className="flex">
                <Image
                  src={article.cover}
                  alt="Blog Cover"
                  width={300}
                  height={200}
                  className={'object-cover rounded-lg'}
                  style={{width: '200px', height: 'auto'}}
                  priority={true}
                  quality={75}
                />

                <div className="flex flex-col gap-5 px-4 py-1 w-full">
                  <div>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="hover:underline">
                      <h2 className="font-bold tracking-normal">
                        {article.title}
                      </h2>
                    </Link>
                  </div>

                  <p className="flex flex-row flex-wrap w-full overflow-hidden text-sm text-justify text-gray-700">
                    {article.description}
                  </p>

                  <div>
                    {article.tags.map((tag, tagId) => (
                      <span
                        key={tagId}
                        className="mr-2 my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                        <div className="absolute flex-shrink-0 flex items-center justify-center">
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-green-500"
                            aria-hidden="true"></span>
                        </div>
                        <div className="ml-3.5 font-medium text-gray-900">
                          {tag}
                        </div>
                      </span>
                    ))}
                  </div>

                  <div className="text-xs font-medium text-gray-500 flex flex-row-reverse">
                    {new Date(article.date).toLocaleDateString('pl-PL')}
                  </div>
                </div>
              </div>
            </div>
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
