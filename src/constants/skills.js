const baseValue = 33.33;
const max = 100;

export const PROFICIENCY = {
  BEGINNER: { name: "Beginner", value: baseValue },
  INTERMEDIATE: { name: "Beginner", value: baseValue * 2 },
  ADVANCED: { name: "Beginner", value: max },
};

export const skillItems = [
  { name: "React", proficiency: PROFICIENCY.ADVANCED },
  { name: "Javascript", proficiency: PROFICIENCY.ADVANCED },
  { name: "CSS", proficiency: PROFICIENCY.INTERMEDIATE },
  { name: ".NET", proficiency: PROFICIENCY.BEGINNER },
  { name: "Redux", proficiency: PROFICIENCY.INTERMEDIATE },
  { name: "NodeJS", proficiency: PROFICIENCY.INTERMEDIATE },
  { name: "Docker & Kubernetes", proficiency: PROFICIENCY.INTERMEDIATE },
  { name: "Database", proficiency: PROFICIENCY.INTERMEDIATE },
];
