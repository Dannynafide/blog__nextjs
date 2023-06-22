import Image from 'next/image';
import Link from 'next/link';

type Article = {
  title: string;
  description: string;
  cover: string;
  date: string;
  tags: string[];
  slug: string;
};

export default function Article({article}: {article: Article}) {
  return (
    <div className="py-10 flex-col border-b border-solid border-black">
      <div className="flex flex-col items-center text-center sm:text-left sm:flex-row sm:items-stretch">
        <Image
          src={article.cover}
          alt="Blog Cover"
          width={300}
          height={200}
          className={'object-cover rounded-lg mb-4 sm:mb-0'}
          style={{width: '200px', height: 'auto'}}
          priority={true}
          quality={75}
        />

        <div className="flex flex-col gap-5 px-4 py-1 w-full">
          <div>
            <Link
              href={`/articles/${article.slug}`}
              className="hover:underline">
              <h2 className="font-bold tracking-normal">{article.title}</h2>
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
                <div className="ml-3.5 font-medium text-gray-900">{tag}</div>
              </span>
            ))}
          </div>

          <div className="text-xs font-medium text-gray-500 flex flex-row-reverse">
            {new Date(article.date.replace(/-/g, '/')).toLocaleDateString(
              'pl-PL'
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
