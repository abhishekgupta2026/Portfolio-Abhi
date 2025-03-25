import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';

const skills = {
  "Languages & Libraries": [
    "C++", "Java", "HTML5", "Python", "numpy", "pandas", "CSS3", "JavaScript",
    "Express.js", "jQuery", "TypeScript", "Data Structures & Algorithms", "OOP"
  ],
  "Tools & Software": [
    "Jupyter Notebook", "MySQL", "React.js", "Next.js", "Redux Toolkit", "Tailwind CSS",
    "Bootstrap", "MongoDB", "GitHub", "Node.js", "Express.js", "Firebase", "UI/UX", "DBMS"
  ]
};

const ArticlesPage = ({ articles }) => {
  return (
    <>
      <div className={styles.pageContainer}>
        {/* Articles Column */}
        <div className={styles.articlesColumn}>
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
            {articles.length > 0 &&
              articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
          </div>
        </div>

        {/* Skills Column */}
        <div className={styles.skillsColumn}>
          <h3>Skills</h3>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={styles.skillCategory}>
              <h4 className={styles.skillHeading}>{category}</h4>
              <hr className={styles.skillDivider} />
              <div className={styles.skillSpacing}></div>
              <ul>
                {items.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <br />
            </div>
          ))}
        </div>
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

