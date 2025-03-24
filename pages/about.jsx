const AboutPage = () => {
  return (
    <>
      <h3>Enthusiastic and dedicated B.Tech student in Computer Science with a specialization in Gaming Technology, possessing a strong foundation in software development, data structures and algorithms. Passionate about problem-solving and optimizing code efficiency, I have hands-on experience in full-stack web development using JavaScript, React, Node.js, and databases. I enjoy building seamless, user-friendly applications, and my background in gaming technology enables me to explore interactive experiences, game mechanics, and immersive UI/UX design.







</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
