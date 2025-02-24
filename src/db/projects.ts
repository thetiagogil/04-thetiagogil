import { DataModel } from "../models/data.model";

export const projects: DataModel[] = [
  {
    id: 0,
    category: "projects",
    name: "Giraffes vs Sea",
    subject: "2D Tower Defense Game",
    description:
      "Towerdefense videogame where the players use math to win. Independently conceived and executed the game.",
    link: "https://giraffes-vs-sea.netlify.app/",
    techs: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
    dateStart: new Date("2023-09"),
    status: "completed",
    img: "projects/giraffes-vs-sea.png"
  },
  {
    id: 1,
    category: "projects",
    name: "House of Legends",
    subject: "League of Legends Website",
    description:
      "Web application that gives information about the video game League of Legends, allowing users to create and customize builds.",
    link: "https://house-of-legends.netlify.app/",
    techs: ["React", "JavaScript", "CSS", "Node.js", "REST API"],
    dateStart: new Date("2023-10"),
    status: "outdated"
  },
  {
    id: 2,
    category: "projects",
    name: "FIN/ACE",
    subject: "Personal Finances Website",
    link: "https://finace.netlify.app/",
    techs: ["React", "JavaScript", "CSS", "Node.js", "Express.js", "MongoDB"],
    dateStart: new Date("2023-11"),
    dateEnd: new Date("2023-12"),
    status: "inactive"
  },
  {
    id: 3,
    category: "projects",
    name: "Personal website",
    subject: "Personal website",
    link: "https://thetiagogil.netlify.app/",
    techs: ["React", "TypeScript", "MUI"],
    dateStart: new Date("2024-01"),
    status: "completed"
  },
  {
    id: 4,
    category: "projects",
    name: "FIN/ACE v2",
    subject: "Personal Finances Website",
    description:
      "Web application designed for financial tracking and analysis. It provides users with tools to manage and visualize their income and expenses over different years and months, as well as offering various features to help users understand their financial data through detailed summaries and visual representations.",
    link: "https://finace-v2.netlify.app/",
    techs: ["React", "TypeScript", "MUI", "Node.js", "Express.js", "Supabase"],
    dateStart: new Date("2024-07"),
    dateEnd: new Date("2024-08"),
    img: "../../../project-4.png",
    status: "outdated"
  },
  /* {
    id: 5,
    category: "projects",
    name: "FIN/ACE v3",
    subject: "Personal Finances Website",
    description:
      "Web application designed for financial tracking and analysis. It provides users with tools to manage and visualize their income and expenses over different years and months, as well as offering various features to help users understand their financial data through detailed summaries and visual representations.",
    link: "",
    techs: ["React", "TypeScript", "MUI", "Node.js", "Express.js", "Supabase"],
    dateStart: new Date("2024-09"),
    status: "open"
  }, */
  {
    id: 6,
    category: "projects",
    name: "Passport by Talent Protocol",
    place: "Talent Protocol",
    subject: "",
    link: "https://passport.talentprotocol.com/",
    techs: ["React", "TypeScript", "MUI"],
    dateStart: new Date("2024-04"),
    dateEnd: new Date("2024-08"),
    status: "completed"
  },
  {
    id: 7,
    category: "projects",
    name: "Build by Talent Protocol",
    place: "Talent Protocol",
    subject: "",
    link: "https://build.top/",
    techs: ["Next.js", "TypeScript", "MUI"],
    dateStart: new Date("2024-04"),
    dateEnd: new Date("2024-06"),
    status: "completed"
  },
  {
    id: 8,
    category: "projects",
    name: "Builderfi by Talent Protocol",
    place: "Talent Protocol",
    subject: "",
    link: "https://mirror.xyz/talentprotocol.eth/dSkw_mNNOgs6GZEjZ3GTJMt0uJ5DjpWGkX3rncF1OD8/",
    techs: ["Next.js", "TypeScript", "MUI"],
    dateStart: new Date("2024-04"),
    dateEnd: new Date("2024-08"),
    status: "inactive"
  },
  {
    id: 9,
    category: "projects",
    name: "EASYQA OS",
    subject: "Question and Answers Website",
    description:
      "Q&A app inspired by Builderfi by Talent Protocol. It offers a user-friendly platform for asking and answering questions, with a voting system, allowing users to engage with a community of learners and experts. The design is heavily inspired by Builderfi, ensuring a modern and intuitive interface that enhances user experience.",
    link: "https://personal-h9qyawdw.outsystemscloud.com/easyqa/",
    techs: ["OutSystems"],
    dateStart: new Date("2024-10"),
    status: "inactive"
  },
  {
    id: 10,
    category: "projects",
    name: "FIN/ACE OS",
    subject: "Personal Finances Website",
    description:
      "FIN/ACE OS is a financial management app built in OutSystems, modeled closely after the previous version of FIN/ACE I developed.",
    link: "https://personal-h9qyawdw.outsystemscloud.com/finace/",
    techs: ["OutSystems"],
    dateStart: new Date("2024-10"),
    status: "inactive"
  },
  {
    id: 11,
    category: "projects",
    name: "Wordlechain",
    place: "Subvisual",
    subject: "Wordle Game (Blockchain Edition)",
    description:
      "Wordlechain is a blockchain-based version of the classic Wordle game, built for Web3. Players use a custom ERC20 token to make guesses, combining blockchain technology with an interactive web interface.",
    link: "https://wordlechain.netlify.app/",
    techs: ["React", "TypeScript", "MUI", "Solidity"],
    dateStart: new Date("2024-12"),
    status: "completed",
    img: "projects/wordlechain.png"
  },
  {
    id: 11,
    category: "projects",
    name: "Talentsy",
    place: "Subvisual",
    subject: "Team Talents Visualization App",
    description:
      "Talentsy is a team talents visualization tool that helps users discover, track, and compare their top talents. It provides personalized insights into talents, enabling teams to understand how individual skills contribute to collaboration and success. Users can explore their top 10 talents, set goals for growth, and compare team-wide talents to foster a more balanced and effective work environment.",
    link: "https://talentsy.netlify.app/",
    techs: ["React", "TypeScript", "MUI"],
    dateStart: new Date("2025-01"),
    status: "completed",
    img: "projects/talentsy.png"
  }
];
