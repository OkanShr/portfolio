import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

export const HERO_CONTENT = `I'm a Full Stack Developer with a solid background in Java Spring Boot, Python, and React.js. I thrive on building efficient, scalable solutions and enjoy working with both backend and frontend technologies. With a strong passion for continuous learning, I am highly adaptable and ready to tackle new challenges. My focus is on developing innovative, user-friendly applications and staying up-to-date with the latest industry trends and best practices.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = [
  {
    year: "Sep 2019 - Mar 2024",
    department: "Computer Engineering",
    school: "Trakya University",
    description: `In a Bachelor's of Computer Engineering, I gained a solid foundation in both hardware and software engineering. I learned about computer architecture, digital systems, microprocessors, and embedded systems, along with key software development principles like algorithms, data structures, and programming languages. I also gained hands-on experience with networking, operating systems, databases, and cybersecurity. This blend of hardware and software knowledge equipped me to design, develop, and optimize complex computing systems and technologies.`,
  },
  {
    year: "Mar 2024 - Oct 2024",
    department: "Software Engineering Bootcamp",
    school: "Masterschool",
    description: `In my software engineering bootcamp, I focused on advanced programming principles and gained hands-on experience with Python, Flask, and FastAPI. I deepened my understanding of backend development, building RESTful APIs, and integrating databases like SQL and NoSQL. I learned how to design scalable, efficient applications, handle data management, and implement best practices in software development, including version control, testing, and deployment. This bootcamp sharpened my problem-solving skills and prepared me to create dynamic web applications and robust backend systems.`,
  },
];

export const EXPERIENCES = [
  {
    year: "Oct 2023 - Jan 2024",
    role: "Web Designer and Developer",
    company: "MMCreations",
    description: `During my 3-month internship at MMCreations, I gained valuable experience in the full lifecycle of webpage development. I created several robust and responsive websites, focusing on user experience and functionality while ensuring client satisfaction. I worked closely with clients to understand their needs and translated those requirements into polished, professional websites. This role strengthened my skills in web development, responsive design, and effective communication with clients.`,
    technologies: ["Wordpress", "Javascript", "PHP"],
  },
];

export const PROJECTS = [
  {
    title: "Restaurant Management Website",
    image: project1,
    description:
      "A fully functional restaurant website with features like generating and reading qr-codes, sending and viewing orders, and role based user authentication.",
    technologies: [
      "React.js",
      "Express",
      "Spring Framework",
      "MySQL",
      "HTML",
      "CSS",
    ],
    link: "https://github.com/OkanShr/clientmanagement",
  },
  {
    title: "Client Management Website",
    image: project2,
    description:
      "An application for managing clients and their documents, with features such as viewing and comparing images, viewing pdf and docx files online, and generating docx files with forms.",
    technologies: [
      "React.js",
      "Spring Framework",
      "MySQL",
      "Docker",
      "HTML",
      "TailwindCSS",
    ],
    link: "https://github.com/OkanShr/ServeMyself_BE",
  },
  {
    title: "Image Sharing Platform",
    image: project4,
    description:
      "A platform for publishing images posts, with features like commenting, communities, and user profiles.",
    technologies: [
      "Next.js",
      "React.js",
      "Express",
      "Tailwind CSS",
      "HTML",
      "MongoDB",
    ],
    link: "https://github.com/OkanShr/mernsm",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React.js"],
    link: "",
  },
];

export const CONTACT = {
  gitHub: "https://github.com/OkanShr",
  linkedIn: "https://www.linkedin.com/in/okansechrin/",
  phoneNo: "+49 176 4267 6051 ",
  email: "okan.shr@hotmail.com",
};
