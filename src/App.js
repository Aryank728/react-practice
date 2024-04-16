import { useState } from "react";
import "./App.css";
import { Employee } from "./Components/Employee";

function App() {
  const employeesData = [
    {
      name: "RICK",
      email: "rick@email.com",
      role: "Software Engineer",
      gender: "Male",
      department: "Engineering",
      experience: "5 years",
    },
    {
      name: "LORI",
      email: "lori@email.com",
      role: "Software Engineer Test",
      gender: "Female",
      department: "Testing",
      experience: "3 years",
    },
    {
      name: "CAROL",
      email: "carol@email.com",
      role: "Project Manager",
      gender: "Female",
      department: "Management",
      experience: "11 years",
    },
  ];

  const [employees, setEmployees] = useState(employeesData);
  const [nameCase, setNameCase] = useState("lower");

  const toggleNameCase = () => {
    setNameCase(nameCase === "lower" ? "upper" : "lower");
    const updatedEmployees = employees.map(employee => {
      return {
        ...employee,
        name: nameCase === "lower" ? employee.name.toLowerCase() : employee.name.toUpperCase()
      };
    });
    setEmployees(updatedEmployees);
  };

  return (
    <div className="App">
      <h1>Employee List</h1>
      {employees.map((employee, index) => (
        <Employee
          key={index}
          name={employee.name}
          email={employee.email}
          role={employee.role}
          gender={employee.gender}
          department={employee.department}
          experience={employee.experience}
        />
      ))}
      <button onClick={toggleNameCase}>Change Name Case Type</button>
    </div>
  );
}

export default App;
