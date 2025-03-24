import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';

const ArticlesPage = ({ articles }) => {
  if (!Array.isArray(articles)) {
    return <p>No articles available.</p>;
  }

  return (
    <>
      <h3>
        Recent Posts from{' '}
        <a
          href="https://dev.to/abhishek_kumargupta2"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          DEV.TO
        </a>

        
      </h3>
      
      <h3>
        CODING PROFILE{' '}
        <a
          href="https://leetcode.com/u/Abhishek78678/"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          LEETCODE.PRO
        </a>

        
      </h3>
      <div className={styles.container}>
        {articles.length > 0 ? (
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch(
      'https://dev.to/api/articles/me/published?per_page=6',
      {
        headers: {
          'api-key': process.env.DEV_TO_API_KEY,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch articles, status: ${res.status}`);
    }

    const data = await res.json();

    // Ensure data is an array
    const articles = Array.isArray(data) ? data : [];

    return {
      props: { title: 'Articles', articles },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return {
      props: { title: 'Articles', articles: [] },
    };
  }
}

export default ArticlesPage;
