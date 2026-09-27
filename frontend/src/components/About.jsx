import './../css/About.css'
import Navbar from '../components/Navbar'
function About() {
  return (
    <>
    
      <div className='about-container'>
        
        <h1>About Employee Management</h1>
        <Navbar/>
      
<ul className="about-info">
  <li>
    <strong>Purpose:</strong> A full-stack web application designed to
    simplify employee record management.
  </li>

  <li>
    <strong>Frontend:</strong> Built using React.js with a simple and
    user-friendly interface.
  </li>

  <li>
    <strong>Backend:</strong> Uses Node.js and Express.js to create and
    handle REST APIs.
  </li>

  <li>
    <strong>Database:</strong> MySQL is used to store and manage employee
    information.
  </li>

  <li>
    <strong>Operations:</strong> Users can add, view, update, delete,
    search, and filter employee records.
  </li>

  <li>
    <strong>API Communication:</strong> The React frontend communicates
    with the backend through REST APIs to perform CRUD operations.
  </li>

  <li>
    <strong>Goal:</strong> To provide a simple and efficient way to manage
    employee information in one place.
  </li>
</ul>

        <ul>
          <h1>Operations</h1>
  <li><strong>Add:</strong> Add new employee details to the database.</li>
  <li><strong>Update:</strong> Modify existing employee information.</li>
  <li><strong>Delete:</strong> Remove an employee record from the database.</li>
  <li><strong>View:</strong> Display all employee details.</li>
  <li><strong>Search:</strong> Find specific employees using their details.</li>
  <li><strong>Filter:</strong> Filter employees based on selected criteria.</li>
</ul>
      </div>
    </>
  )
}

export default About;