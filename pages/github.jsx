import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  if (!user || !Array.isArray(repos)) {
    return <a href="https://github.com/abhishekgupta2026" target="_blank" rel="noopener noreferrer">
    ABHISHEK KUMAR GUPTA
  </a>
  
  }

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.length > 0 ? (
          repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)
        ) : (
          <p>No repositories found.</p>
        )}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
    if (!username) {
      throw new Error("GitHub username is not set in environment variables.");
    }

    const headers = process.env.GITHUB_API_KEY
      ? { Authorization: `token ${process.env.GITHUB_API_KEY}` }
      : {};

    // Fetch user data
    const userRes = await fetch(`https://api.github.com/users/${username}`, { headers });
    if (!userRes.ok) throw new Error(`GitHub API error: ${userRes.status}`);
    const user = await userRes.json();

    // Fetch repositories
    const repoRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      headers,
    });
    if (!repoRes.ok) throw new Error(`GitHub API error: ${repoRes.status}`);
    let repos = await repoRes.json();
    repos = Array.isArray(repos) ? repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6) : [];

    return {
      props: { title: 'GitHub', repos, user },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching GitHub data:', error.message);
    return {
      props: { title: 'GitHub', repos: [], user: null },
    };
  }
}

export default GithubPage;
