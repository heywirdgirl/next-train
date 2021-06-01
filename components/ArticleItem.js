import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`}>
      <a className={articleStyles.card}>
      	<p>{article.id}</p>
        <h3>{article.title} &rarr;</h3>
        
      </a>
    </Link>
  )
}

export default ArticleItem