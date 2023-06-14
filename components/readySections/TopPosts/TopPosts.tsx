import Image from 'next/image';
import Link from 'next/link';

export default function TopPosts({articles}) {
  return (
    <div>
      <p className="text-2xl font-bold uppercase">Top posts</p>
      {articles.map((article, idx) => (
        <div
          key={idx}
          className="py-5 flex-col border-b border-solid border-black">
          <div className="flex ">
            <Image
              src={article.cover}
              width="100"
              height="100"
              alt="Blog Cover"
              className={'object-cover rounded-lg'}
              loading="lazy"
            />

            <div className="flex flex-col px-4 py-1 w-full ">
              <div>
                <Link
                  href={`/articles/${article.slug}`}
                  className="hover:underline">
                  <p className="font-bold tracking-normal text-sm">
                    {article.title}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
