/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello",
  title2: "Montotox",
  logo_name: "Montoto.(x)",
  nickname: "montotox",
  full_name: "Ricardo Coronel",
  subTitle:
    "UX/UI Designer, Frontend Developer & self-taught 🤓. Always learning 📚.",
  resumeLink:
    "https://drive.google.com/file/d/1p0SJdcvUX35iQo-93-hNh-8MfK6DQT9P/view?usp=sharing",
  resumeLink2:
    "https://drive.google.com/file/d/1L24Ch1_cXx8jtbw6DT62LXJS-gTK1hzg/view?usp=sharing",
  mail: "mailto:montotox@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/montotox",
  linkedin: "https://www.linkedin.com/in/ricardo-jose-coronel/",
  gmail: "montotox@gmail.com",
  facebook: "https://www.facebook.com/ricardo.jose.coronel/",
  instagram: "https://www.instagram.com/scarto_scarletto/",
};

const skills = {
  data: [
    {
      title: "UX/UI Design & Researcher",
      fileName: "DesignImg",
      skills: [
        "⚡ Create user stories, personas, storyboards, prototypes and wireframes",
        "⚡ Problem-solving, design thinking",
        "⚡ Creative and analytical approach",
        "⚡ Business know-how: Understanding of business metrics and the ability to translate company goals and objectives into digital experiences",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#C4C4C4",
          },
        },
        {
          skillName: "Gimp",
          fontAwesomeClassname: "simple-icons:gimp",
          style: {
            color: "#5C5543",
          },
        },
        {
          skillName: "Miro",
          fontAwesomeClassname: "simple-icons:miro",
          style: {
            color: "#050038",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#31A8FF",
          },
        },
        {
          skillName: "Google Analytics",
          fontAwesomeClassname: "simple-icons:googleanalytics",
          style: {
            color: "#E37400",
          },
        },
        {
          skillName: "Hotjar",
          fontAwesomeClassname: "simple-icons:hotjar",
          style: {
            color: "#FD3A5C",
          },
        },
      ],
    },
    {
      title: "Frontend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website using ReactJS",
        "⚡ Using Material-UI & SASS",
        "⚡ Lover of GraphQL",
        "⚡ Integration services such as Firebase/ AWS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "SASS",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Material-UI",
          fontAwesomeClassname: "simple-icons:material-ui",
          style: {
            color: "#0081CB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
        {
          skillName: "Apple",
          fontAwesomeClassname: "simple-icons:apple",
          style: {
            color: "#C4C4C4",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Experience hosting and managing websites",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Netlify",
    //       fontAwesomeClassname: "simple-icons:netlify",
    //       style: {
    //         color: "#38AFBB",
    //       },
    //     },
    //     {
    //       skillName: "Heroku",
    //       fontAwesomeClassname: "simple-icons:heroku",
    //       style: {
    //         color: "#6863A6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "UX Designer",
      subtitle: "UX/UI Designer & UX Researcher",
      logo_path: "google.png",
      alt_name: "Google Academy - Coursera",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ Developing personas, user stories, and user journey maps.",
        "⚡ Conducting usability studies.",
        "⚡ Creating wireframes and prototypes. Testing and iterating on designs.",
      ],
      website_link: "https://grow.google/uxdesign/",
    },
    {
      title: "Fullstack Developer",
      subtitle: "Java",
      logo_path: "dh.png",
      alt_name: "Digital House",
      duration: "2019 - 2020",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Maven, Security, Spring Boot, etc.",
        "⚡ I have implemented several projects based on Spring Boot.",
      ],
      website_link: "https://www.digitalhouse.com",
    },
    {
      title: "Electronics Engineer",
      subtitle: "Electronic & Telecommunications",
      logo_path: "um.png",
      alt_name: "Universidad de Mendoza",
      duration: "2005 - 2012",
      descriptions: [
        "⚡ I have studied maths, electronics & business management.",
      ],
      website_link: "https://um.edu.ar",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Fullstack Dev",
      subtitle: "NodeJS + ReactJS + GraphQL",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1veHhpCVlqozOW-R6LfIUKmcBmGkQJzfW/view?usp=sharing",
      alt_name: "Udemy",
      color_code: "#BD3F2B",
    },
    {
      title: "Fullstack Dev",
      subtitle: "Java + Thymeleaf",
      logo_path: "dh.png",
      certificate_link:
        "https://drive.google.com/file/d/1VlBSSEoGJhHXJLKN_U6NU7wI7PWh-rbv/view?usp=sharing",
      alt_name: "Digital House",
      color_code: "#89BD06",
    },
    {
      title: "Advanced Google Analytics",
      subtitle: "Google Academy",
      logo_path: "google.png",
      certificate_link:
        "https://analytics.google.com/analytics/academy/certificate/SAbFk1jVSg6b0abyTRaiXA",
      alt_name: "Google academy",
      color_code: "#BD2B78",
    },

    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "I've mostly done projects on my own and I am actively looking for new challenges. I love organizing workshops or courses to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "UX/UI Designer",
          company: "iBanking",
          company_url: "https://ibanking.netlify.app",
          logo_path: "ibk.png",
          duration: "Jan 2020 - Aug 2021",
          location: "Work from Home",
          description:
            "Considering the human-computer interaction (HCI) element of a design. UX/UI Designer for fintech PWA. Frontend ReactJS developer. Running user testing. Defining interaction models, user task flows, and UI specifications. Communicating scenarios, end-to-end experiences, interaction models, and screen designs to other people working on a product. Developing and maintaining design wireframes and specifications",
          color: "#000",
        },
        {
          title: "Full Stack Developer",
          company: "Freelancer",
          company_url: "https://montotox.com/",
          logo_path: "montotox.png",
          duration: "Oct 2020 - Present",
          location: "Barcelona, Spain",
          description:
            "Work as freelancer in fullstack projects. The primary stack: NodeJS, Express, ReactJS, GraphQL, MongoDB.",
          color: "#000",
        },
        {
          title: "CEO",
          company: "Neurabox",
          company_url: "https://neurabox.io/",
          logo_path: "neurabox.jpg",
          duration: "Feb 2018 - Aug 2021",
          location: "Mendoza, Argentina",
          description:
            "CEO from a technology startup. Team leader and business strategy.",
          color: "#000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Teacher web-designer",
          company: "FJU Universitarios",
          company_url: "https://fjuargentina.com/",
          logo_path: "fju.png",
          duration: "May 2021 - Aug 2021",
          location: "Work from Home",
          description:
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#000",
        },
        {
          title: "Mentor",
          company: "Socialab",
          company_url: "https://socialabglobal.socialab.com/",
          logo_path: "cdcuenta.jpg",
          duration: "Apr 2020",
          location: "Work from Home",
          description:
            "Mentorship in lean startup, business model, golden circle, lean canvas, UX/UI, empathy map, design thinking, customer journey maps.",
          color: "#000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Below are some of my UX/UI designs and my frontend projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "montotox.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "About me",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Design UI App",
      url:
        "https://www.figma.com/file/1agYGvBJl4zxGjOywzfstP/Design-UI-iParking?node-id=0%3A1",
      description: "Design UI App mobility/fintech.",
      languages: [
        {
          name: "Figma",
          iconifyClass: "logos-figma",
        },
        {
          name: "Material UI",
          iconifyClass: "logos:material-ui",
        },
        {
          name: "Inkscape",
          iconifyClass: "cib:inkscape",
        },
      ],
    },
    {
      id: "1",
      name: "Design UI Checkout",
      url:
        "https://www.figma.com/file/9Z2JmrkuyfqH1mEAiiD3rV/Design-UI-iBanking?node-id=0%3A1",
      description: "Design UI checkout fintech.",
      languages: [
        {
          name: "Figma",
          iconifyClass: "logos-figma",
        },
        {
          name: "Material UI",
          iconifyClass: "logos:material-ui",
        },
        {
          name: "Inkscape",
          iconifyClass: "cib:inkscape",
        },
      ],
    },
    {
      id: "2",
      name: "Design UI mailing",
      url:
        "https://www.figma.com/file/J8U1vXTjm9deRYINCX5UHz/iParking-email-template?node-id=0%3A1",
      description: "Design UI mailing to mobility app.",
      languages: [
        {
          name: "Figma",
          iconifyClass: "logos-figma",
        },
        {
          name: "Material UI",
          iconifyClass: "logos:material-ui",
        },
        {
          name: "Inkscape",
          iconifyClass: "cib:inkscape",
        },
      ],
    },
    {
      id: "3",
      name: "Instotox",
      url: "https://github.com/montotox/instotox/",
      description: "Social network like instagram. Used semantic-ui for React.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
        {
          name: "GraphQL",
          iconifyClass: "logos-graphql",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
      ],
    },
    {
      id: "4",
      name: "Landing page iBanking",
      url: "https://ibanking.netlify.app/",
      description: "A React business page.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
        {
          name: "Material UI",
          iconifyClass: "logos:material-ui",
        },
      ],
    },
    {
      id: "5",
      name: "Landing page iParking",
      url: "https://iparking.com.ar/",
      description: "A simple business page.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "6",
      name: "SDKs for fintech",
      url: "https://github.com/montotox/ibk-node",
      description:
        "SDKs for integrate a checkout in other webapp with NodeJS, PHP or Python.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
      ],
    },
    {
      id: "7",
      name: "E-commerce",
      url: "https://github.com/montotox/Proyecto-Final/",
      description:
        "A fullstack project for e-commerce code in Java and Thymeleaf.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Maven",
          iconifyClass: "vscode-icons:file-type-maven",
        },
        {
          name: "Spring Boot",
          iconifyClass: "bx:bxl-spring-boot",
        },
        {
          name: "MySQL",
          iconifyClass: "cib:mysql",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Thymeleaf",
          iconifyClass: "simple-icons:thymeleaf",
        },
      ],
    },
    {
      id: "8",
      name: "Personal Portfolio",
      url: "https://github.com/montotox/portfolio",
      description: "Personal portfolio with ReactJS.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
        {
          name: "GraphQL",
          iconifyClass: "logos-graphql",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
