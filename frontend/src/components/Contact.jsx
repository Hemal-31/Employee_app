
import './../css/Contact.css'
import NavBar from './Navbar'

function Contact() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <NavBar/>

      <p className="contact-intro">
        Have a question, suggestion, or need help with the Employee
        Management System? Feel free to get in touch with us using the
        contact details below.
      </p>

      <div className="contact-details">
        <div className="contact-item">
          <strong>Email:</strong>
          <span>support@employeemanagement.com</span>
        </div>

        <div className="contact-item">
          <strong>Phone:</strong>
          <span>+91 12345 67890</span>
        </div>

        <div className="contact-item">
          <strong>Address:</strong>
          <span>Chennai, Tamil Nadu, India</span>
        </div>
      </div>

      <div className="contact-section">
        <h2>Get in Touch</h2>

        <p>
          We welcome your feedback and suggestions to improve the application.
          You can reach out to us regarding employee management, application
          issues, or any other queries related to the system.
        </p>
      </div>
    </div>
  )
}

export default Contact
