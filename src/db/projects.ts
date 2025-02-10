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
    techs: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
    dateStart: new Date("2023-09"),
    status: "completed",
    img: "../../../project-0.png"
  },
  {
    id: 1,
    category: "projects",
    name: "House of Legends",
    subject: "League of Legends Website",
    description:
      "Web application that gives information about the video game League of Legends, allowing users to create and customize builds.",
    link: "https://house-of-legends.netlify.app/",
    techs: ["HTML", "CSS", "JavaScript", "React", "Node.js", "REST API"],
    dateStart: new Date("2023-10"),
    status: "outdated",
    img: "../../../project-1.png"
  },
  {
    id: 2,
    category: "projects",
    name: "FIN/ACE",
    subject: "Personal Finances Website",
    link: "https://finace.netlify.app/",
    techs: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
    dateStart: new Date("2023-11"),
    dateEnd: new Date("2023-12"),
    status: "outdated"
  },
  {
    id: 3,
    category: "projects",
    name: "Personal website",
    subject: "Personal website",
    link: "https://thetiagogil.netlify.app/",
    techs: ["HTML", "JavaScript", "React", "Joy UI"],
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
    techs: ["HTML", "TypeScript", "React", "Node.js", "Express.js", "Supabase", "Joy UI"],
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
    techs: ["HTML", "TypeScript", "React", "Node.js", "Express.js", "Supabase", "Joy UI"],
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
    techs: ["TypeScript", "React", "Joy UI"],
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
    techs: ["TypeScript", "Next.js", "Joy UI"],
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
    techs: ["TypeScript", "Next.js", "Joy UI"],
    dateStart: new Date("2024-04"),
    dateEnd: new Date("2024-08"),
    status: "inactive"
  },
  {
    id: 9,
    category: "projects",
    name: "EASYQA",
    subject: "Question and Answers Website",
    description:
      "Q&A app inspired by Builderfi by Talent Protocol. It offers a user-friendly platform for asking and answering questions, with a voting system, allowing users to engage with a community of learners and experts. The design is heavily inspired by Builderfi, ensuring a modern and intuitive interface that enhances user experience.",
    link: "https://personal-h9qyawdw.outsystemscloud.com/easyqa/",
    techs: ["OutSystems"],
    dateStart: new Date("2024-10"),
    status: "inactive",
    img: "../../../project-9.png"
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
  }
];
