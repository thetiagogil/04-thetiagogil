import { DataModel } from "../models/data.model";

export const certifications: DataModel[] = [
  {
    id: 0,
    category: "certifications",
    name: "Agile Course",
    place: "Udemy",
    description:
      "This course provided a comprehensive understanding of popular Agile methodologies like Scrum, Kanban, DSDM, XP, and Lean Software Development.",
    link: "https://www.udemy.com/course/agile-project-management-certification/",
    techs: ["Agile Methodologies", "Lean Principles", "Kanban", "Jira"],
    dateStart: new Date("2024-01"),
    status: "completed"
  },
  {
    id: 1,
    category: "certifications",
    name: "React Native Course",
    place: "Udemy",
    description:
      "This course covered essential concepts of React Native, from beginner to advanced, with hands-on experience building a mobile app.",
    link: "https://www.udemy.com/course/build-mobile-apps-with-react-native-from-to-zero-to-expert/",
    techs: ["React Native", "JavaScript", "REST API", "Postman"],
    dateStart: new Date("2024-01"),
    status: "completed"
  },
  {
    id: 2,
    category: "certifications",
    name: "OutSystems Course",
    place: "Udemy",
    description:
      "This course taught me everything I need to know to create successful web apps using OutSystems, from basic to advanced tools and concepts.",
    link: "https://www.udemy.com/course/complete-course-on-outsystems-development/",
    techs: ["OutSystems"],
    dateStart: new Date("2024-02"),
    status: "completed"
  }
];
