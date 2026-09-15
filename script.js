const student = {
  fullName: "Flynn Huffman",
  semesters: 2,
  openToWork: true,
};

// Arithmetic operator.
let years = student.semesters / 2;
console.log(`Years: ${years}`);

// Conditional operators.
let jobReady = student.openToWork && student.semesters >= 2;
console.log(jobReady);

// Ternary operator.
let jobStatus = jobReady ? "Ready" : "Not ready";
console.log(jobStatus);

// Implicit conversion.
let semesterMessage = " semesters";
console.log(student.semesters + semesterMessage);

// Explicit conversion.
let semesterString = String(student.semesters);
console.log(semesterString);

// Explicit conversion.
let projectCount = "5";
let projectNumber = Number(projectCount);
console.log(projectNumber);

let projects = [
  {
    id: 1,
    title: "NTC Zoo",
    description: "Built a zoo application using C#",
    technologiesUsed: "C#, Visual studio",
  },
  {
    id: 2,
    title: "Tri and Succeed Sports Website",
    description:
      "Built a website for Tri and Succeed sports using HTML and CSS pages and code.",
    technologiesUsed: "HTML, CSS",
  },
  {
    id: 3,
    title: "Tree and Book Website",
    description:
      ": Built a website for Tree and Book, a family owned genealogy website using both HTML and CSS pages and code. Used interactive links, accesibility measures and overall formatting for a user friendly website.",
    technologiesUsed: "HTML, CSS",
  },
];
console.table(projects);
