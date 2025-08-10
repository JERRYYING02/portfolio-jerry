import {
  makethedot,
  goldsmiths,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  malaysiandeli,
  threejs,
  gptclonewebsite,
  visualizer,
  myblog,
  github,
  plantdcs,
  socialhut,
  portfoliowebsite,
  cryptobot,
  upcoming,
  whizzit,
  makethedotshow1,
  blippi,
  pedia,
  diy,
} from "../assets";

export const navLinks = [
  {
    id: "home", // Unique ID for the Home link
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-stack Software Engineer",
    company_name: "Make the dot",
    icon: makethedot,
    iconBg: "#383E56",
    points: [
      "Production level full-stack experience building collaborative mood boarding canvas in (Angular, TypeScript, JavaScript, Sass, CSS, HTML, GraphQL) featuring keyboard shortcuts for improved UI, artboard customization picker",
      "Implemented on-page and technical SEO strategies, including optimizing product descriptions, meta tags, and URL structures",
      "Experienced in fast-paced startup environment running agile sprints using JIRA (with over 50+ ticket resolved) with QA team to ensure software quality and functionality",
      "Successfully delivered backend for full-text ,fuzzy search engine with OramaSearch, improved overall loading time by 10x quicker.",
      "Released multi-logic filter (composition, supplier, price) and sorting rank for fabric materials enhancing user search accuracy",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Make the dot",
    icon: makethedot,
    iconBg: "#383E56",
    points: [
      "Understanding of modules, components, directives, data binding services and dependency Injection, RxJS Observables Lifecycle Hooks, CI/CD",
      "Integrated multi-user commenting system with backend services using Liveblocks API",
      "Collaborated with the design team on Figma to develop user-friendly interfaces and ensure responsive across device",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Crescendo International College",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2023 - August 2023",
    points: [
      "Collaborating with third-party website service provider (First online) to wireframe student management system.",
      "Designed engaging content, including infographics(banner/poster) Adobe Illustrator, and videos, to drive student engagement.",
      "Assisted digital marketing efforts, including SEO, SEM(Google Ads), and social media marketing that increased student intake",
    ],
  },
  {
    title: "Goldsmiths University of London ",
    company_name: "Obtained",
    icon: goldsmiths,
    iconBg: "#383E56",
    points: [
      "BSc (Hons) Computer Science obtained (1st Class Honours) with a Year in Industry",
      "Relevant Coursework: Algorithm & Data Structure | Web development | Software Design | OOP | Graphics Programming | Databases & Network | Data Mining | Artificial Intelligence | Machine Learning",
    ],
  },
  {
    title: "Certifications",
    company_name: "Obtained",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Accenture - Data Analytics and Visualization Virtual Experience Certificate    ",
      "Alibaba Group – Apsara Cloud Generative AI Certificate",
      "IBM – Intro DevOps",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Jerry was one of those guys who always went above and beyond. He didn’t just show up to work; he really cared about what he was doing. Even when things got tough, he’d still be there, putting in the effort without complaining. ",
    name: "Aaron",
    designation: "Head Manager",
    company: "Vivo Sdn Bhd",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "He has an artistic sense to create beautiful user interface designs for clients",
    name: "Alicia",
    designation: "Marketing Executive",
    company: "Crescendo International College",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "He has always been eager to learn more and to explore new technologies and methodologies,taking initiative to read and research on his own, which is a clear indication of his passion for the field. ",
    name: "Simon Loh",
    designation: "Dean School Of Computing Crescendo International College",
    company: "",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "www.diy.org",
    description:
      "Built and maintained kid's educational platform with 5,000+ courses and DIY learning activities and integrated social learning components in Next,js,React, Typescript, TailwindCSS, GraphQL (resulting current 35k+ organic traffic SEO and initiated free trial and annual revenue) Optimized SQL query development, database modeling, and setup cron jobs, indexing. Written automated end-to-end test cases using Cypress, Github Actions to validate user journeys and critical workflows",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "NextJS",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "yellow-text-gradient",
      },
      {
        name: "GraphQL",
        color: "yellow-text-gradient",
      },
    ],
    image: diy,
    eye_link: "https://www.diy.org",
  },
  {
    name: "Blippi Curiosity Image Recognition Mobile App",
    description:
      "Took ownership of completing frontend of image recognition object-hunting game for Netflix series Blippi Entertainment. Shipped mobile app with progressive web app Capacitor for Android and IOS.",
    tags: [
      {
        name: "NextJS",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "yellow-text-gradient",
      },
      {
        name: "Capacitor",
        color: "yellow-text-gradient",
      },
      {
        name: "Python FastAPI",
        color: "yellow-text-gradient",
      },
      {
        name: "HuggingFace",
        color: "yellow-text-gradient",
      },
    ],
    image: blippi,
    eye_link: "https://astrosafe.co",
  },
  {
    name: "AstroSafe @ Safe Search & Astropedia",
    description:
      "Developed AstroSafe's Safe Search integration with Astropedia, a safe Wikipedia-like encyclopedia for kids",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "NextJS",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "yellow-text-gradient",
      },
    ],
    image: pedia,
    source_code_link: "https://astrosafe.co",
    eye_link: "",
  },
  {
    name: "Make the dot (500 Global Venture Capitalist)@ Fabric library",
    description:
      "Successfully delivered backend for full-text ,fuzzy search engine with OramaSearch, improved overall loading time by 10x quicker.Released multi-logic filter (composition, supplier, price) and sorting rank for fabric materials enhancing user search accuracy. Integrated multi-user commenting system with backend services using Liveblocks API",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Sass",
        color: "yellow-text-gradient",
      },
    ],
    image: makethedotshow1,
    source_code_link: "https://github.com/JERRYYING02",
    eye_link: "https://www.instagram.com/p/C8KQlgpPjTA/",
  },
  {
    name: "Whizzit",
    description:
      "Final-year dissertation, an e-learning LMS powered with AI-prompted quiz generation",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "NextJS",
        color: "green-text-gradient",
      },
      {
        name: "ShadCN",
        color: "pink-text-gradient",
      },
      {
        name: "OpenAI",
        color: "yellow-text-gradient",
      },
    ],
    image: whizzit,
    source_code_link: "https://github.com/JERRYYING02/lms-fyp",
    eye_link: "https://www.youtube.com/watch?v=hkyILcY4ILQ",
  },
  {
    name: "Malaysian Deli",
    description:
      "Self-funded e-commerce buisiness that markets Malaysian food & drinks ingredients, integrated Stripe Payment,sellers seamlessly update their products on sanityCMS",
    tags: [
      {
        name: "Stripe",
        color: "blue-text-gradient",
      },
      {
        name: "sanity.io",
        color: "green-text-gradient",
      },
      {
        name: "NextJS",
        color: "pink-text-gradient",
      },
    ],
    image: malaysiandeli,
    source_code_link: "https://github.com/JERRYYING02/malaysian-deli-ecommerce",
    eye_link: "https://malaysian-deli-ecommerce.vercel.app/",
  },
  {
    name: "Wripts",
    description:
      "CRUD blogging app extended with summernote WYSIWYG editor with custom search functionalities,Weather & News API",
    tags: [
      {
        name: "nodejs,express",
        color: "blue-text-gradient",
      },
      {
        name: "EJS",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "yellow-text-gradient",
      },
    ],
    image: myblog,
    source_code_link: "https://github.com/JERRYYING02/dnw-gs-mini-project",
    eye_link: "https://mini-project-jerry.onrender.com/",
  },
  {
    name: "Social Hut",
    description:
      "Social media app inspired by TikTok.Involve user suggestions and their authentication by Google OAuth",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs,express",
        color: "green-text-gradient",
      },
      {
        name: "sanity.io",
        color: "pink-text-gradient",
      },
    ],
    image: socialhut,
    source_code_link: "https://github.com/JERRYYING02/socialhut",
    eye_link: "https://socialhut123.vercel.app/",
  },
  {
    name: "QualityFare",
    description:
      "Recipe sharing platform integrated with MealsDB API that allows users to look for recommendations for popular foods. Lead collaboration project with friends from Japan,Italy,Canada,Australia",
    tags: [
      {
        name: "MERN React",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs,express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/JERRYYING02/ASP_team72",
    eye_link: "https://exp2.deylkqii2lnv.amplifyapp.com/",
  },
  {
    name: "3D Portfolio Website",
    description:
      "Dynamic 3D portfolio website using Three.js, showcases understanding and creation in frontend-engaging skills",
    tags: [
      {
        name: "hreeJS",
        color: "blue-text-gradient",
      },
      {
        name: "framerMotion",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: portfoliowebsite,
    source_code_link: "https://github.com/JERRYYING02/socialhut",
    eye_link: "https://socialhut123.vercel.app/",
  },
  {
    name: "Travel Advisor App",
    description:
      "Offering travel advice and destination information. Developed with Expo for easy cross-platform deployment. Queried on RapidAPI and Google Map API",
    tags: [
      {
        name: "React native",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "yellow-text-gradient",
      },
    ],
    image: upcoming,
    source_code_link: "https://github.com/JERRYYING02/ASP_team72",
    eye_link: "https://exp2.deylkqii2lnv.amplifyapp.com/",
  },
  {
    name: "Movie Data Analysis",
    description:
      "Exploring sentiment of movie plot by webscrapping Wikipedia data, compare demographics (budget,genre,box office revenues)",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "regex",
        color: "green-text-gradient",
      },
      {
        name: "beautifulSoup",
        color: "pink-text-gradient",
      },
      {
        name: "beautifulSoup",
        color: "yellow-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/JERRYYING02/Movie-Data-Analysis",
    eye_link:
      "https://colab.research.google.com/drive/1mJKSTyUOs9hJFh0CkYSoXe1-aGw9_Yyh",
  },
  {
    name: "CryptoCurrency Bot ",
    description:
      "C++ bot that uses simple moving average to predict the price of cryptocurrency from csv data",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "simpleMovingAverage",
        color: "green-text-gradient",
      },
    ],
    image: cryptobot,
    source_code_link: "https://github.com/JERRYYING02/CryptoBot",
    eye_link: "https://github.com/JERRYYING02/CryptoBot",
  },
  {
    name: "Pixel mini-game ",
    description:
      "Mario like mini-game built with p5.js,involve using constructors and classes in javascript",
    tags: [
      {
        name: "p5.js",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "myfirstproject",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/JERRYYING02/Pixelminigame",
    eye_link: "https://jerryying02.github.io/PixelMiniGame/",
  },

  {
    name: "GPT Clone Website",
    description: "A GPT clone website with openAI API codex integration,forked",
    tags: [
      {
        name: "OpenAI",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs,express",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: gptclonewebsite,
    source_code_link: "https://github.com/JERRYYING02/project_openai_codex",
    eye_link: "https://project-openai-codex-pied.vercel.app/",
  },
  {
    name: "Music Visualizer",
    description:
      "A range of 2d & 3d wave music visualizer using fast-fourier transform",
    tags: [
      {
        name: "p5.js",
        color: "blue-text-gradient",
      },
      {
        name: "audio-generative-art",
        color: "green-text-gradient",
      },
      {
        name: "Fast-fourier transform",
        color: "pink-text-gradient",
      },
    ],
    image: visualizer,
    source_code_link: "https://github.com/JERRYYING02/MusicVisualizer",
    eye_link: "https://jerryying02.github.io/MusicVisualizer/",
  },
  {
    name: "Arduino & Esp32 Plant Watering System",
    description:
      "Collect & read soil moisture and react to water pump, data is monitored on cloud database",
    tags: [
      {
        name: "arduino",
        color: "blue-text-gradient",
      },
      {
        name: "esp32",
        color: "green-text-gradient",
      },
      {
        name: "IOT",
        color: "pink-text-gradient",
      },
      {
        name: "PHP,SQL",
        color: "yellow-text-gradient",
      },
    ],
    image: plantdcs,
    source_code_link: "https://github.com/JERRYYING02/MusicVisualizer",
    eye_link: "https://jerryying02.github.io/MusicVisualizer/",
  },
];

export { services, technologies, experiences, testimonials, projects };
