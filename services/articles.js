import {getFileBySlug, getList} from 'lib/markdownParser';

// Sort by post date
export const getListOfArticles = () => {
  const articles = getList('_articles');

  return articles.sort((a, b) => a.date - b.date).reverse();
};

// Sort by date added
export const getListOfArticlesByDateAdded = () => {
  const articles = getList('_articles');

  return articles.sort((a, b) => a.createdAt - b.createdAt).reverse();
};

export const getArticle = async (slug) => {
  const article = await getFileBySlug('_articles', slug);

  return article;
};
