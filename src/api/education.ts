import { Data } from "../types/data";

export const education: Data[] = [
  {
    id: 0,
    category: "education",
    nameKey: "education_guadalupe_name",
    place: "Colégio Guadalupe",
    descriptionKey: "education_guadalupe_description",
    link: "https://c-guadalupe.com/en/",
    techs: ["Microsoft Office"],
    dateStart: new Date("2011-09"),
    dateEnd: new Date("2014-07"),
    status: "completed",
    img: "education/cg.jpeg"
  },
  {
    id: 1,
    category: "education",
    nameKey: "education_faul_name",
    placeKey: "education_faul_place",
    descriptionKey: "education_faul_description",
    link: "https://www.fa.ulisboa.pt/index.php/en/",
    techs: ["AutoCAD", "SketchUp", "Adobe Photoshop", "Microsoft Office"],
    dateStart: new Date("2014-09"),
    dateEnd: new Date("2022-07"),
    status: "completed",
    img: "education/faul.jpeg"
  },
  {
    id: 2,
    category: "education",
    nameKey: "education_ironhack_name",
    place: "Ironhack",
    descriptionKey: "education_ironhack_description",
    link: "https://www.ironhack.com",
    techs: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "REST API", "DOM Manipulation"],
    dateStart: new Date("2023-08"),
    dateEnd: new Date("2023-11"),
    status: "completed",
    img: "education/ironhack.jpeg"
  }
];
