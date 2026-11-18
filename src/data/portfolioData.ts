/**
 * portfolioData.ts
 * ----------------
 * SINGLE SOURCE OF TRUTH for all website content.
 *
 * Everything the visitor reads — your name, bio, skills, job/class
 * experience, education, social links, projects, and blog posts — lives
 * here. UI components only handle *layout*; they import their text from
 * this file. That means you can update your portfolio by editing this one
 * file, without touching any component or CSS.
 *
 * HOW TO EDIT (see README "Content Editing Guide" for more):
 *  - Change text: edit the strings below.
 *  - Add a project/post: copy an existing object in the array and change
 *    its fields. Keep `slug` unique (it becomes the page URL).
 *  - Images: put the file in /public and reference it as "/your-image.png".
 */

// ---------------------------------------------------------------------------
// Types — these describe the shape of the content so your editor can warn you
// if you forget a field. You rarely need to touch these.
// ---------------------------------------------------------------------------

export interface SocialLink {
  label: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string; // becomes the URL: /portfolio/<slug>
  shortDescription: string;
  image: string; // path inside /public, e.g. "/project1.png"
  tech: string[];
  github?: string;
  /** Full write-up. Use separate strings in the array for separate paragraphs. */
  description: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string; // becomes the URL: /blog/<slug>
  date: string; // ISO format: "YYYY-MM-DD"
  excerpt: string;
  coverImage: string; // path inside /public
  /** Article body. Each string in the array renders as its own paragraph. */
  content: string[];
}

export interface ExperienceItem {
  role: string;
  summary: string;
}

export interface EducationItem {
  school: string;
  credential: string;
  timeframe: string;
  location: string;
}

// ---------------------------------------------------------------------------
// Site-wide / profile info
// ---------------------------------------------------------------------------

export const profile = {
  name: "Donovan McGilbray",
  title: "Software Developer",
  /** Short tagline shown in the browser tab and hero area. */
  tagline: "Computer Science student focused on frontend engineering and web applications.",
  profileImage: "/profile.jpg",
  resumeUrl: "/resume.pdf",
  /** Contact email is read server-side from the CONTACT_EMAIL env var, but we
   *  keep a display copy here in case you want to show it on the page. */
  email: "djaymcgilbray@gmail.com",
};

// ---------------------------------------------------------------------------
// Social links (used by the Footer and the Contact page)
// ---------------------------------------------------------------------------

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/DonovanMcGilbray" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/donovan-mcgilbray-67a2913b7" },
];

// ---------------------------------------------------------------------------
// Navigation (used by the Navbar)
// ---------------------------------------------------------------------------

export const navItems: { title: string; url: string }[] = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Resume", url: "/resume" },
  { title: "Portfolio", url: "/portfolio" },
  { title: "Blog", url: "/blog" },
  { title: "Contact", url: "/contact" },
];

// ---------------------------------------------------------------------------
// Home page — each string is its own paragraph.
// ---------------------------------------------------------------------------

export const home = {
  heading: "Donovan McGilbray",
  subheading: "Software Developer",
  intro: [
    "I am a Computer Science student at California State University, Bakersfield - Antelope Valley, with an expected graduation date of May 2027. I am interested in frontend software engineering and building web applications.",
    "I work with React, JavaScript, HTML, and CSS to create responsive user interfaces and I have experience building mobile applications using React Native with Expo.",
    "My projects focus on clean component design, structured data, and deploying applications using GitHub and Vercel.",
  ],
};

// ---------------------------------------------------------------------------
// About page
// ---------------------------------------------------------------------------

export const about = {
  heading: "About Me",
  paragraphs: [
    "I am currently pursuing a Bachelor of Science in Computer Science at California State University, Bakersfield - Antelope Valley, with an anticipated graduation date of May 2027. I earned an Associate of Science in Computer Science from Antelope Valley College in May 2025.",
    "Through my courses and personal projects, I have gained experience with programming languages including C, C++, Java, Python, HTML, CSS, and SQL. I enjoy learning how software systems are designed and how different technologies can work together to solve real-world problems.",
  ],
  specializations: [
    "Software Development",
    "Mobile Application Development",
    "Database Design and SQL",
    "Web Application Development",
  ],
  skills: [
    "Programming: C, C++, Java, JavaScript, Python",
    "Web Development: HTML, CSS, React",
    "Database Development: SQL, relational database design",
    "Developer Tools: Git, GitHub, Visual Studio Code, Vercel",
  ],
};

// ---------------------------------------------------------------------------
// Resume page
// ---------------------------------------------------------------------------

export const resume = {
  summary:
    "Computer Science student at California State University, Bakersfield - Antelope Valley with experience in software development, mobile applications, and database systems. Skilled in multiple programming languages including C, C++, Java, JavaScript, Python, and SQL. Experienced in building full-stack applications, mobile apps using React Native, and web applications using React. Interested in software engineering, mobile development, and building efficient systems that solve real-world problems.",
  technicalSkills: [
    { label: "Programming Languages", value: "C, C++, Java, JavaScript, Python, HTML, CSS, SQL" },
    { label: "Developer Tools", value: "React, React Native, Expo Go" },
    { label: "Business Software", value: "Microsoft Word, Google Docs, Google Slides, Google Sheets" },
    { label: "Languages", value: "English and Spanish" },
  ],
  education: [
    {
      school: "California State University, Bakersfield - Antelope Valley",
      credential: "Bachelor of Science in Computer Science",
      timeframe: "Expected Graduation: May 2027",
      location: "Lancaster, CA",
    },
    {
      school: "Antelope Valley College",
      credential: "Associate of Science in Computer Science",
      timeframe: "August 2023 - May 2025",
      location: "Lancaster, CA",
    },
  ] as EducationItem[],
  coursework:
    "Programming Fundamentals, Discrete Structures, Computer Architecture I (Assembly Language Programming), Computer Architecture II (Computer Organization), Programming Languages, Software Engineering, Database Systems",
  experience: [
    {
      role: "Software Engineering - Class Experience",
      summary:
        "Worked in a 4-person development team using Agile practices and Git version control to develop a game launcher using the Godot game engine. Managed project timelines, coordinated tasks, and presented the final project to the instructor and peers.",
    },
    {
      role: "Database Systems - Class Experience",
      summary:
        "Designed and implemented a tutoring center database using SQL, PHP, and CSS. Created ER diagrams, relational schemas, stored procedures, triggers, and queries to manage tutor and student sessions and maintain accurate data.",
    },
    {
      role: "Application Development - Class Experience",
      summary:
        "Built mobile applications using React Native and Expo Go. Developed an introduction application and a Pokemon search app using the Pokemon API to retrieve and display dynamic data.",
    },
  ] as ExperienceItem[],
};

// ---------------------------------------------------------------------------
// Contact page
// ---------------------------------------------------------------------------

export const contact = {
  heading: "Contact",
  intro: "Have a question or want to work together? Send me a message below, or connect with me on GitHub and LinkedIn.",
};

// ---------------------------------------------------------------------------
// Projects (Portfolio page + detail pages)
//   - `slug` must be unique; it becomes the URL /portfolio/<slug>.
//   - `description` is an array; each entry becomes its own paragraph.
// ---------------------------------------------------------------------------

export const projects: Project[] = [
  {
    id: 1,
    title: "Tutoring Center Website",
    slug: "tutoring-center-website",
    shortDescription:
      "A tutoring center website that allows users to sign in as students or tutors to access different features.",
    image: "/project1.png",
    tech: ["MariaDB", "PHP", "HTML", "CSS"],
    github: "https://github.com/npaul-2/TutoringCenter",
    description: [
      "The Tutoring Center Database was developed as a team project for a Database Systems course. The goal of the project was to design and implement a relational database system that could manage tutor accounts, student accounts, and tutoring sessions.",
      "The system was designed using SQL with a relational schema based on entity-relationship diagrams. Tables were created to store information about tutors, students, and scheduled sessions, and relationships were defined to maintain data integrity.",
      "Advanced SQL features such as stored procedures and triggers were implemented to automate tasks like scheduling and session management. These helped ensure that session data remained accurate and that scheduling conflicts could be handled efficiently.",
      "To make the system usable, a web interface was built using PHP and CSS. This interface allows users to sign in, create accounts, schedule tutoring sessions, and manage existing sessions.",
    ],
  },
  {
    id: 2,
    title: "Casino Table Games",
    slug: "casino-table-games",
    shortDescription: "A React-based casino game simulator featuring Blackjack and Roulette games.",
    image: "/project2.png",
    tech: ["React Native", "Expo", "TypeScript", "Node.js", "Visual Studio Code"],
    github: "https://github.com/DonovanMcGilbray/CasinoTableGames",
    description: [
      "This mobile application was developed using React Native and Expo Go to simulate casino-style games including roulette and blackjack. The app allows users to place bets, track their balance, and view game results in real time.",
      "The interface was designed using modular React Native components to support multiple game types within the same application. State management was implemented to track user balance, bets, and game results dynamically.",
      "The project helped demonstrate how mobile interfaces, state management, and reusable components can be combined to create a responsive mobile application.",
    ],
  },
  {
    id: 3,
    title: "Stock Tracker App",
    slug: "stock-tracker-app",
    shortDescription: "A React application that retrieves and visualizes stock market data.",
    image: "/project3.png",
    tech: ["React Native", "Expo", "Visual Studio Code"],
    github: "https://github.com/DonovanMcGilbray/Stock-Tracker-App",
    description: [
      "The Stock Tracker app is an application designed to allow users to search for stock market information and visualize stock prices over time.",
      "The application was built using React for the front-end interface and integrates the Alpha Vantage API to retrieve real-time stock market data. Users can search for a stock symbol and the application fetches the latest stock information through asynchronous API requests.",
      "To improve data visualization, Chart.js was used to generate interactive charts displaying historical stock price data. These charts allow users to easily view price trends and understand market behavior over time.",
      "The application focuses on dynamic data handling and responsive user interfaces. React components were used to manage the layout and user interactions, while API requests update the displayed information automatically based on user input.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Blog posts (Blog page + detail pages)
//   - `slug` must be unique; it becomes the URL /blog/<slug>.
//   - `content` is an array; each entry becomes its own paragraph.
// ---------------------------------------------------------------------------

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "Creating My React Portfolio Website",
    slug: "creating-react-portfolio",
    date: "2026-03-15",
    excerpt:
      "How I built my personal portfolio website using React and what I learned during the process.",
    coverImage: "/post1.png",
    content: [
      "Creating a personal portfolio website gave me a chance to practice building a full web application with React. The main goal was to show my programming work while learning how to organize a front-end project.",
      "The site has the pages Home, About, Portfolio, Blog, and Contact. Each page is a separate React component, making it easier to maintain and expand. I also used React Router so users can navigate between pages without refreshing.",
      "An important part was deploying the site online. I used Vercel to host it, which automatically builds and updates the site whenever I push changes to GitHub. This let me quickly see updates live.",
      "Working on this portfolio helped me understand how React apps are structured and how components work together to make a complete website.",
    ],
  },
  {
    id: 2,
    title: "React Native with Expo Go vs React for Web",
    slug: "react-native-vs-react-web",
    date: "2026-03-15",
    excerpt:
      "Understanding the differences between React Native mobile apps and React web applications.",
    coverImage: "/post2.png",
    content: [
      "While working on the portfolio website, I have learned about React development as well as React Native using Expo Go. Although both technologies are based on React, they are designed for different platforms and use different types of components.",
      "React for the web focuses on building websites that run in a browser. It uses HTML elements such as div, img, and button along with CSS for styling. These applications are deployed to web hosting platforms such as Vercel so users can access them through a URL.",
      "React Native, however, is designed for building mobile applications. Instead of HTML elements, React Native uses components like View, Text, and Image that map to native mobile UI elements. Expo Go allows developers to run and test these apps directly on their phones during development.",
      "Although the syntax and component structure are very similar, the environments and user interfaces are different. Learning both has helped me understand how React can be used across multiple platforms.",
    ],
  },
  {
    id: 3,
    title: "Why Project Structure is Important",
    slug: "project-structure-importance",
    date: "2026-03-15",
    excerpt: "How organizing folders like components, pages, and data makes projects easier to manage.",
    coverImage: "/post3.png",
    content: [
      "As projects become larger, organizing code becomes very important. One thing I have learned while working on projects was how a clear project structure can make development easier and more efficient.",
      "In my project, files are separated into different folders such as components, pages, and data. Components store reusable pieces of the interface like the navigation bar or footer. Pages represent the different sections of the website, such as the Home or Contact page. Data folders hold structured content like blog posts or project information.",
      "This organization makes the project easier to understand because each folder has a clear purpose. It also allows developers to quickly find files when making updates or fixing bugs.",
      "Good project structure is important especially when working on larger applications or collaborating with others. Keeping code organized helps maintain readability and makes future improvements easier.",
    ],
  },
];
