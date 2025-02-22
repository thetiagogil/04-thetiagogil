import { DataModel } from "../models/data.model";

export const education: DataModel[] = [
  {
    id: 0,
    category: "education",
    name: "High School",
    place: "Colégio Guadalupe",
    description:
      "Graduated from the Science and Technology course at Colégio Guadalupe, where I participated in several Erasmus projects, including Poland (2010-2011), Italy (2011-2012), and Bulgaria (2013-2014). These experiences allowed me to engage in collaborative learning, cultural exchange, and international networking.",
    link: "https://c-guadalupe.com/en/",
    techs: ["Microsoft Office"],
    dateStart: new Date("2011-09"),
    dateEnd: new Date("2014-07"),
    status: "completed"
  },
  {
    id: 1,
    category: "education",
    name: "Master Degree in Architecture",
    place: "Faculty of Architecture, University of Lisbon",
    description:
      "Graduated with a Master's in Architecture, specializing in architecture and urban design. My dissertation, titled 'Human-centered architecture: Video games as inspiration for the development of architecture,' explored how video game design principles can inspire user-centric architectural design.",
    link: "https://www.fa.ulisboa.pt/index.php/en/",
    techs: ["AutoCAD", "SketchUp", "Adobe Photoshop", "Microsoft Office"],
    dateStart: new Date("2014-09"),
    dateEnd: new Date("2022-07"),
    status: "completed"
  },
  {
    id: 2,
    category: "education",
    name: "Web Development Course",
    place: "Ironhack School",
    description:
      "Graduated from a 9-week intensive Web Development Bootcamp at Ironhack, where I learned the fundamentals of Full-stack Development and gained the skills necessary to build web applications.",
    link: "https://www.ironhack.com",
    techs: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "REST API", "DOM Manipulation"],
    dateStart: new Date("2023-08"),
    dateEnd: new Date("2023-11"),
    status: "completed"
  }
];
