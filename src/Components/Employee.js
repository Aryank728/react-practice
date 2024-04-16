export const Employee = (props) => {
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