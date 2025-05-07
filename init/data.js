const sampleListings = [
    {
      name: "Hardik",
      email: "hardik@example.com",
      position: "Project Manager",
      department: "PMS",
      salary: 50000
    },
    {
      name: "Vidhi",
      email: "vidhi@example.com",
      position: "Assistant Developer",
      department: "AMS",
      salary: 30000
    },
    {
      name: "Pratik",
      email: "pratik@example.com",
      position: "Developer",
      department: "GMS",
      salary: 80000
    },
    {
      name: "Komal",
      email: "komal@example.com",
      position: "Senior Developer",
      department: "AMS",
      salary: 20000
    },
    {
      name: "Raj",
      email: "raj@example.com",
      position: "Project Manager",
      department: "PMS",
      salary: 38000
    },
    {
      name: "Tisha",
      email: "tisha@example.com",
      position: "Project Manager",
      department: "PMS",
      salary: 50000
    },
    {
      name: "John Smith",
      email: "john.smith@example.com",
      position: "Software Developer",
      department: "IT",
      salary: 75000
    },
    {
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      position: "Business Analyst",
      department: "Marketing",
      salary: 60000
    },
    {
      name: "Michael Brown",
      email: "michael.brown@example.com",
      position: "Project Manager",
      department: "IT",
      salary: 90000
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      position: "UI/UX Designer",
      department: "Design",
      salary: 65000
    },
    {
      name: "David Lee",
      email: "david.lee@example.com",
      position: "Data Analyst",
      department: "IT",
      salary: 80000
    },
    {
      name: "Julia Martin",
      email: "julia.martin@example.com",
      position: "Marketing Manager",
      department: "Marketing",
      salary: 75000
    },
    {
      name: "Adam Clark",
      email: "adam.clark@example.com",
      position: "Sales Manager",
      department: "Sales",
      salary: 95000
    },
    {
      name: "Laura Wilson",
      email: "laura.wilson@example.com",
      position: "Graphic Designer",
      department: "Design",
      salary: 55000
    },
    {
      name: "Peter Harris",
      email: "peter.harris@example.com",
      position: "Software Developer",
      department: "IT",
      salary: 85000
    },
    {
      name: "Jessica Lee",
      email: "jessica.lee@example.com",
      position: "HR Manager",
      department: "HR",
      salary: 70000
    },
    {
      name: "Mark Brown",
      email: "mark.brown@example.com",
      position: "Technical Lead",
      department: "IT",
      salary: 95000
    },
    {
      name: "Emma White",
      email: "emma.white@example.com",
      position: "Content Writer",
      department: "Marketing",
      salary: 55000
    },
    {
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      position: "Database Administrator",
      department: "IT",
      salary: 80000
    },
    {
      name: "Olivia Davis",
      email: "olivia.davis@example.com",
      position: "Content Writer",
      department: "Marketing",
      salary: 50000
    },
    {
      name: "Harish Gowda",
      email: "harish.gowda@example.com",
      position: "Developer",
      department: "IT",
      salary: 55000
    },
    {
      name: "Mark Lewis",
      email: "mark.lewis@example.com",
      position: "Graphic Designer",
      department: "Design",
      salary: 56000
    },
    {
      name: "Jane Perry",
      email: "jane.perry@example.com",
      position: "Developer",
      department: "IT",
      salary: 45000
    },
    {
      name: "Menaka KY",
      email: "menaka.ky@example.com",
      position: "Database Administrator",
      department: "IT",
      salary: 45000
    },
    {
      name: "Shanvi Harish",
      email: "shanvi.harish@example.com",
      position: "UI/UX Designer",
      department: "Design",
      salary: 35000
    },
    {
      name: "Tim David",
      email: "tim.david@example.com",
      position: "Technical Lead",
      department: "IT",
      salary: 55000
    },
    {
      name: "Matthew Hernandez",
      email: "matthew.hernandez@example.com",
      position: "Product Marketing Manager",
      department: "Product Management",
      salary: 90000
    },
    {
      name: "Stephanie King",
      email: "stephanie.king@example.com",
      position: "Customer Success Manager",
      department: "Customer Service",
      salary: 70000
    },
    {
      name: "James Scott",
      email: "james.scott@example.com",
      position: "Senior Engineer",
      department: "Engineering",
      salary: 105000
    },
    {
      name: "Rebecca White",
      email: "rebecca.white@example.com",
      position: "Marketing Specialist",
      department: "Marketing",
      salary: 55000
    },
    {
      name: "Brian Rodriguez",
      email: "brian.rodriguez@example.com",
      position: "Senior Sales Representative",
      department: "Sales",
      salary: 95000
    },
    {
      name: "Nicole Carter",
      email: "nicole.carter@example.com",
      position: "HR Assistant",
      department: "Human Resources",
      salary: 45000
    },
    {
      name: "Kevin Adams",
      email: "kevin.adams@example.com",
      position: "Finance Director",
      department: "Finance",
      salary: 110000
    },
    {
      name: "Melissa Baker",
      email: "melissa.baker@example.com",
      position: "Operations Analyst",
      department: "Operations",
      salary: 70000
    },
    {
      name: "Timothy Wright",
      email: "timothy.wright@example.com",
      position: "Product Owner",
      department: "Product Management",
      salary: 100000
    },
    {
      name: "Rachel Thomas",
      email: "rachel.thomas@example.com",
      position: "Customer Support Manager",
      department: "Customer Service",
      salary: 75000
    },
    {
      name: "Christina Hughes",
      email: "christina.hughes@example.com",
      position: "HR Coordinator",
      department: "Human Resources",
      salary: 55000
    },
    {
      name: "Alexander Wood",
      email: "alexander.wood@example.com",
      position: "Finance Analyst",
      department: "Finance",
      salary: 90000
    },
    {
      name: "Victoria Price",
      email: "victoria.price@example.com",
      position: "Operations Manager",
      department: "Operations",
      salary: 80000
    },
    {
      name: "Ryan Cooper",
      email: "ryan.cooper@example.com",
      position: "Product Development Manager",
      department: "Product Management",
      salary: 110000
    },
    {
      name: "Lauren Simmons",
      email: "lauren.simmons@example.com",
      position: "Customer Service Specialist",
      department: "Customer Service",
      salary: 60000
    },
    {
      name: "Justin Murphy",
      email: "justin.murphy@example.com",
      position: "Senior Engineer",
      department: "Engineering",
      salary: 105000
    },
    {
      name: "Cassandra Martinez",
      email: "cassandra.martinez@example.com",
      position: "Marketing Director",
      department: "Marketing",
      salary: 110000
    },
    {
      name: "Adam Nelson",
      email: "adam.nelson@example.com",
      position: "Sales Analyst",
      department: "Sales",
      salary: 85000
    },
    {
      name: "Laura Foster",
      email: "laura.foster@example.com",
      position: "HR Director",
      department: "Human Resources",
      salary: 95000
    },
    {
      name: "Daniel Ross",
      email: "daniel.ross@example.com",
      position: "Financial Controller",
      department: "Finance",
      salary: 120000
    }
  ];
  module.exports={data:sampleListings};
  