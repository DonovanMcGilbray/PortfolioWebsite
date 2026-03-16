const projects = [
    {
        id: 1,
        title: "Tutoring Center Website",
        slug: "tutoring-center-website",
        shortDescription: "A tutoring center website that allows users to sign in as students or tutors to access different features.",
        image: "/project1.png",
        tech: ["MariaDB", "PHP", "HTML", "CSS"],
        github: "https://github.com/npaul-2/TutoringCenter",
        description: `
            The Tutoring Center Database was developed as a team project for a Database Systems course. 
            The goal of the project was to design and implement a relational database system that could 
            manage tutor accounts, student accounts, and tutoring sessions.
            The system was designed using SQL with a relational schema based on entity-reationship diagrams. 
            Tables were created to store information about tutors, students, and scheduled sessions, and 
            relationships were defined to maintain data integrity.
            Advanced SQL features such as stored procedures and triggers were implemented to automate tasks 
            like scheduling and session management. These helped ensure that session data remained accurate 
            and that scheduling conflicts could be handled efficiently.
            To make the system usable, a web interface was built using PHP and CSS. This interface allows 
            users to sign in, create accounts, schedule tutoring sessions, and manage existing sessions. 
        `
    },
    {
        id: 2,
        title: "Casino Table Games",
        slug: "casino-table-games",
        shortDescription: "A React-based casino game simulator featuring Blackjack and Roulette games.",
        image: "/project2.png",
        tech: ["React Native", "Expo", "TypeScript", "Node.js", "Visual Studio Code"],
        github: "https://github.com/DonovanMcGilbray/CasinoTableGames",
        description: `
            This mobile application was developed using React Native and Expo Go to simulate casino-style games 
            including roulette and blackjack. The app allows users to place bets, track their balance, and view 
            game results in real time.
            The interface was designed using modular React Native components to support multiple game types 
            within the same application. State management was implemented to track user balance, bets, and game 
            results dynamically.
            The project helped demonstrate how mobile interfaces state management, and reusable components 
            can be combined to create a responsive mobile application.
        `
    },
    {
        id: 3,
        title: "Stock Tracker App",
        slug: "stock-tracker-app",
        shortDescription: "",
        image: "/project3.png",
        tech: ["React Native", "Expo", "Visual Studio Code"],
        github: "https://github.com/DonovanMcGilbray/Stock-Tracker-App",
        description: `
            The Stock Tracker app is an application designed to allow users to search for stock market information 
            and visualize stock prices over time.
            The application was built using React for the front-end interface and integrates Alpha Vantage API to 
            retrieve real-time stock market data. Users can search for a stock symbol and the application fetches 
            the latest stock information through asunchronous API requests. 
            To improve data visualization, Chart.js was used to generate interactive charts displaying historical 
            stock price data. These charts allow users to easily veiw price trends and understand market behavior 
            over time.
            The application focuses on dynamic data handling and responsive user interfaces. React components were 
            used to manage the layout and user interactions, while API requests update the displayed information 
            automatically based on user input.
        `
    }
]

export default projects;