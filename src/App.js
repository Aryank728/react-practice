import React from 'react';
import './App.css';

function App() {
  const employees = [
    {
      name: "Rick",
      email: "rick@email.com",
      role: "Software Engineer",
      gender: "Male",
      department: "Engineering",
      experience: "5 years",
    },
    {
      name: "Lori",
      email: "lori@email.com",
      role: "Software Engineer Test",
      gender: "Female",
      department: "Testing",
      experience: "3 years",
    },
    {
      name: "Carol",
      email: "carol@email.com",
      role: "Project Manager",
      gender: "Female",
      department: "Management",
      experience: "11 years",
    },
  ];

  return (
    <div className="App">
      <h1>Employee List</h1>
      {employees.map((employee, index) => (
        <StudentCard
          key={index}
          name={employee.name}
          email={employee.email}
          role={employee.role}
          gender={employee.gender}
          department={employee.department}
          experience={employee.experience}
        />
      ))}
    </div>
  );
}

const StudentCard = (props) => {
  return (
    <div className={`student-card ${props.gender.toLowerCase()}`}>
      <h2>{props.name}</h2>
      <p><strong>Email:</strong> {props.email}</p>
      <p><strong>Role:</strong> {props.role}</p>
      <p><strong>Department:</strong> {props.department}</p>
      <p><strong>Experience:</strong> {props.experience}</p>
      <button>Read More</button>
    </div>
  );
};

export default App;
