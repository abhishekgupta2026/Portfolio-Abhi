import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'Abhishek.me',
    href: 'https://portfolio-abhishekgupta-blond.vercel.app/',
  },
  {
    social: 'email',
    link: 'abhishekkumargupta2026@gmail.com',
    href: 'mailto:abhishekkumargupta2026@gmail.com',
  },
  {
    social: 'github',
    link: 'abhishekgupta2026',
    href: 'https://github.com/abhishekgupta2026',
  },
  {
    social: 'linkedin',
    link: 'ABHISHEK GUPTA',
    href: 'https://www.linkedin.com/in/abhishek-gupta-328768250/',
  },
  {
    social: 'twitter',
    link: 'ABHISHEK GUPTA',
    href: 'https://x.com/abhishek_k77367',
  },
  {
    social: 'instagram',
    link: 'Abhishek Gupta',
    href: 'https://www.instagram.com/guptaabhiishk?igsh=MW8zNTh5eXZobW1qMw==',
  },
  {
    social: 'telegram',
    link: 'Abhishekgupta',
    href: 'https://t.me/light_yagami_11',
  },
  {
    social: 'DEV COMMUNITY',
    link: 'ABHISHEK GUPTA',
    href: 'https://dev.to/abhishek_kumargupta2',
  },
  
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
