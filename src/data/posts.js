const posts = [
    {
        id: 1,
        title: "...",
        slug: "...",
        date: "...",
        excerpt: "...",
        coverImage: "",
        content: `
            Creating a personal portfolio website game me a change to practice building a full web application with React. The main goal was to show my programming work while learning how to organize a front-end project.
            The site has the pages Home, About, Portfolio, Blog, and Contact. Each page is a separate React component, making it easier to maintain and expand. I also used React Router so users can navigate between pages without refreshing.
            An important part was deploying the site online. I used Vercel to host it, which automatically builds and updates the site whenever I push changes to GitHub. This let me quickly see updates live.
            Working on this portfolio helped me understand how React apps are structured and how components work together to make a complete website.
        `
    },
    {
        id: 2,
        title: "React Native with Expo Go vs React for Web",
        slug: "react-native-vs-react-web",
        date: "2026-03-15",
        excerpt: "Understanding the differences between React Native mobile apps and React web applications.",
        coverImage: "",
        content: `
            While working on the Porfolio website, I have learned about React development as well as React Native using Expo Go. Although both technologies are based on React, they are designed for different platforms and use different types of components.
            React for the web focuses on building websites that run in a browser. It uses HTML elements such as div, img, and button along with CSS for styling. These applications are deployed to web hosting platforms such as Vercel so users can access them throught a URL.
            React Native, however, is designed for building mobile applications. Instead of HTML elements, React Native uses components like View, Text, and Image that map to native mobile UI elements. Expo Go allows developers to run and test these apps directly on their phones during development.
            Although the syntax and component structure are very similar, the environments and user interfaces are different. Learning both has helped me understand how React can be used across multiple platforms.
        `
    },
    {
        id: 3,
        title: "Why Project Structure is Important",
        slug: "project-structure-importance",
        date: "2026-03-15",
        excerpt: "How organizing folders like components, pages, and data makes projects easier to manage.",
        coverImage: "",
        content: `
            As projects become larger, organizing code becomes very important. One thing I have learned while working on projects was how a clear project structure can make development easier and more efficient.
            In my project, files are separated into different folders such as components, pages, and data. Components store reusable peices of the interface like the navigation bar or footer. Pages represent the different sections of the website, such as the Home or Contact page. Data folders can hold structured content like blog posts or project information.
            This organization makes the project easier to understand because each folder ahs a clear purpose. It also allows developers to quickly find files when making updates or fixing bugs.
            Good project structure is important especially when working on larger applications or collaborating with others. Keeping code organized helps maintain readability and makes future imporvements easier.
        `
    }
];

export default posts;