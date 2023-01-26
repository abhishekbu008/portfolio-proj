import Prj1 from "../assets/img/prj-1.png";
import Prj2 from "../assets/img/prj-2.png";
import Prj3 from "../assets/img/prj-3.png";

export const projectSections = {
  React: "React",
  NET: ".NET",
  NextJS: "NextJS",
  NodeJS: "NodeJS",
};

export const projects = [
  {
    id: 1,
    title: "Recipe Blog",
    img: Prj1,
    tags: ["HTML", "CSS", "responsive"],
    section: projectSections.React,
    desc: "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "My Gallery",
    img: Prj2,
    tags: ["HTML", "CSS", "responsive"],
    section: projectSections.React,
    desc: "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with instagram profile page. The design is from devchallenge.io",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "Checkout",
    img: Prj3,
    tags: ["HTML", "CSS", "responsive"],
    section: projectSections.React,
    desc: "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    demoUrl: "#",
    codeUrl: "#",
  },
];
