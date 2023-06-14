import FollowUs from '@/components/readySections/FollowUs/FollowUs';
import TopPosts from '@/components/readySections/TopPosts/TopPosts';
import {getListOfArticles} from '@/services/articles';
import Layout from 'components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export const getStaticProps = () => {
  const articles = getListOfArticles();

  return {
    props: {articles},
  };
};

export default function Home({articles}) {
  return (
    <Layout>
      <Head>
        <title>Blog - recent posts</title>
      </Head>

      <div className="flex flex-row ">
        <section className="basis-5/7 mb-10 border-r border-solid border-black">
          <div className="py-14 text-3xl font-bold uppercase border-b border-solid border-black">
            Discover our latest posts
          </div>

          {articles.map((article, idx) => (
            <div
              key={idx}
              className="py-10 flex-col border-b border-solid border-black">
              <div className="flex ">
                <Image
                  src={article.cover}
                  width="200"
                  height="200"
                  alt="Blog Cover"
                  className={'object-cover rounded-lg'}
                  loading="lazy"
                />

                <div className="flex flex-col gap-5 px-4 py-1 w-full ">
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

                  <div className="flex items-center gap-1 overflow-hidden">
                    <span className="text-xs font-medium text-blue-600 uppercase">
                      {article.tags[0]}
                    </span>

                    <span className="text-xs font-medium text-gray-500">|</span>

                    <div className="text-xs font-medium text-gray-500 flex flex-row items-center">
                      {new Date(article.createdAt).toLocaleDateString('pl-PL')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="basis-2/7 flex flex-col gap-16 ml-10 mt-10">
          <TopPosts articles={articles} />

          <span className="text-2xl font-bold uppercase">
            <FollowUs />
          </span>
        </section>
      </div>
    </Layout>
  );
}
