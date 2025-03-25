const AboutPage = () => {
  return (
    <>
<h3> I am a B.Tech student at VIT University, specializing in Computer Science, with a strong passion for MERN Stack Development and a solid foundation in Data Structures and Algorithms and Object-Oriented Programming. Proficient in multiple programming languages such as C++, Java, Python, and JavaScript, I have hands-on experience with front-end technologies like React.js, Next.js, Redux Toolkit, Tailwind CSS, Bootstrap, and UI/UX design principles. On the back-end, I specialize in Node.js, Express.js, and MongoDB, along with Firebase for authentication and real-time databases. My expertise extends to working with libraries like numpy and pandas for data processing. I actively use GitHub for version control and collaborate on projects efficiently. With a keen interest in building scalable and interactive web applications, I continuously explore new tools and frameworks to enhance my development skills.















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
