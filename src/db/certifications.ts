import { DataModel } from "../models/data.model";

export const certifications: DataModel[] = [
  {
    id: 0,
    category: "certifications",
    nameKey: "certification_agile_name",
    place: "Udemy",
    descriptionKey: "certification_agile_description",
    link: "https://www.udemy.com/course/agile-project-management-certification/",
    techs: ["Agile Methodologies", "Lean Principles", "Kanban", "Jira"],
    dateStart: new Date("2024-01"),
    status: "completed",
    img: "certifications/udemy.jpeg"
  },
  {
    id: 1,
    category: "certifications",
    nameKey: "certification_react_native_name",
    place: "Udemy",
    descriptionKey: "certification_react_native_description",
    link: "https://www.udemy.com/course/build-mobile-apps-with-react-native-from-to-zero-to-expert/",
    techs: ["React Native", "JavaScript", "REST API", "Postman"],
    dateStart: new Date("2024-01"),
    status: "completed",
    img: "certifications/udemy.jpeg"
  },
  {
    id: 2,
    category: "certifications",
    nameKey: "certification_outsystems_name",
    place: "Udemy",
    descriptionKey: "certification_outsystems_description",
    link: "https://www.udemy.com/course/complete-course-on-outsystems-development/",
    techs: ["OutSystems"],
    dateStart: new Date("2024-02"),
    status: "completed",
    img: "certifications/udemy.jpeg"
  }
];
