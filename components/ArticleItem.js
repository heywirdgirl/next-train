import Link from 'next/link'

const ArticleItem = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`}>
      <a className="bg-red-100">
      	<p>{article.id}</p>
        <h3>{article.title} &rarr;</h3>
        
      </a>
    </Link>
  )
}

export default ArticleItem
