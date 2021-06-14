import ArticleItem from './ArticleItem'

const ArticleList = ({ articles }) => {
  return (
    <div className="bg-blue-100">
      {articles.map((article) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  )
}

export default ArticleList
