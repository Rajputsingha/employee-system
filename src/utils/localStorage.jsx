const employees = [
  {
    id: "E001",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        title: "Task 1",
        description: "Complete the monthly report.",
        date: "2025-01-20",
        category: "Reporting",
      },
      {
        active: true,
        new_task: false,
        completed: true,
        failed: false,
        title: "Task 2",
        description: "Update the project plan.",
        date: "2025-01-15",
        category: "Project Management",
      },
      {
        active: false,
        new_task: true,
        completed: false,
        failed: true,
        title: "Task 3",
        description: "Attend the team meeting.",
        date: "2025-01-18",
        category: "Meeting",
      },
    ],
  },
  {
    id: "E002",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        title: "Task 1",
        description: "Create marketing strategy.",
        date: "2025-01-17",
        category: "Marketing",
      },
      {
        active: true,
        new_task: false,
        completed: true,
        failed: false,
        title: "Task 2",
        description: "Design new product logo.",
        date: "2025-01-10",
        category: "Design",
      },
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        title: "Task 3",
        description: "Conduct customer survey.",
        date: "2025-01-20",
        category: "Survey",
      },
    ],
  },
  {
    id: "E003",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        title: "Task 1",
        description: "Prepare budget for Q1.",
        date: "2025-01-19",
        category: "Finance",
      },
      {
        active: true,
        new_task: false,
        completed: false,
        failed: true,
        title: "Task 2",
        description: "Organize team-building event.",
        date: "2025-01-12",
        category: "HR",
      },
      {
        active: false,
        new_task: true,
        completed: false,
        failed: false,
        title: "Task 3",
        description: "Audit expense reports.",
        date: "2025-01-14",
        category: "Finance",
      },
    ],
  },
  {
    id: "E004",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        title: "Task 1",
        description: "Develop new website features.",
        date: "2025-01-18",
        category: "Development",
      },
      {
        active: true,
        new_task: false,
        completed: false,
        failed: false,
        title: "Task 2",
        description: "Fix bugs in the current system.",
        date: "2025-01-10",
        category: "Bug Fix",
      },
      {
        active: false,
        new_task: true,
        completed: true,
        failed: false,
        title: "Task 3",
        description: "Test new code deployment.",
        date: "2025-01-20",
        category: "Testing",
      },
    ],
  },
  {
    id: "E005",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: false,
        completed: false,
        failed: true,
        title: "Task 1",
        description: "Write product documentation.",
        date: "2025-01-11",
        category: "Documentation",
      },
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        title: "Task 2",
        description: "Coordinate with suppliers for inventory.",
        date: "2025-01-17",
        category: "Inventory",
      },
      {
        active: true,
        new_task: true,
        completed: true,
        failed: false,
        title: "Task 3",
        description: "Prepare meeting agenda.",
        date: "2025-01-19",
        category: "Administration",
      },
    ],
  },
];

const admin = [
  {
    id: "A001",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees)); // string data convert in localstroge
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStrage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  console.log(employees, admin);
};
