import images from "./images";

const projects = [
  {
    title: "Physiotherapy website",
    image: `${images.fizjoterapia}`,
    description:
      "This is a repository for a website project for a physiotherapy business, which also includes a blog with a Hygraph CMS integration. The website was initially written in Create React App, but it has been migrated to Next.js due to lot of optimization. ",
    gitHubLink: "https://github.com/ewojti/fizjoterapia-joanna-ejsmont-nextjs",
    liveLink: "https://www.fizjoterapia-ejsmont.pl",
    technologies: ["NEXT", "HTML", "SCSS"],
  },
  {
    title: "Lombi.com",
    image: `${images.Lombi}`,
    description:
      "During my work on a commercial project at LOMBI.com, I was responsible for the frontend development and had the opportunity to learn and develop my skills under the guidance of experienced programmers. I used Git version control system and Jira application for effective task management and team coordination.",
    gitHubLink: "https://github.com/miszol1/lombi-token-front",
    liveLink: "",
    technologies: ["React", "HTML", "SCSS"],
  },
  {
    title: "Quizzical",
    image: `${images.quizzical}`,
    description:
      "A simple quiz game built in React that uses the free JSON API from openTriviaDataBase, where the user can select the game mode and questions are randomly generated. Depending on the game mode, the player has a limited number of attempts to answer the questions correctly.",
    gitHubLink: "https://github.com/ewojti/quiz-game",
    liveLink: "",
    technologies: ["React", "HTML", "CSS"],
  },
  {
    title: "Restaurant website",
    image: `${images.restaurant}`,
    description:
      "Actually working on the project for a local restaurant website built in React will involve creating a elegance and interactive interface, with added functionality to enable customers to place online orders. Temporary deploy on netlify but it's not final version yet",
    gitHubLink: "https://github.com/ewojti/local-restaurant",
    liveLink: "https://mellow-marshmallow-88de56.netlify.app/",
    technologies: ["React", "HTML", "CSS"],
  },
  {
    title: "Paper Scissors Rock",
    image: `${images.paper}`,
    description:
      "Simple game written in Java Script allows users to compete against the computer in a simple and classic game. The game result is displayed on the screen, and points are counted for both the player and the computer.",
    gitHubLink: "https://github.com/ewojti/Paper-Scissors-Rock",
    liveLink: "",
    technologies: ["JS", "HTML", "CSS"],
  },
];

export default projects;
