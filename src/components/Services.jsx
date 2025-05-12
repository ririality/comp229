// File: Services.jsx | Student: Marianna McCue | StudentID: 301481506 | Date: May 2025
export default function Services() {
  return (
    <div className="services-section">
      <h1>My Services (Because I'm still learning!)</h1>
      
      {/* Flex container for service boxes */}
      <div className="services-row">
      <div className="service">
        <img src="src/service1.png" alt="1" className="service-image" />
        <h3>Web Development </h3>
        
        <p>Helping you build websites, with a dash of troubleshooting and a lot of learning.</p>
      </div>

      <div className="service">
        <img src="src/service2.png" alt="2" className="service-image" />
        <h3>JavaScript </h3>
        
        <p>Basic scripting services — might work better with some extra debugging!</p>
      </div>

      <div className="service">
        <img src="src/service3.png" alt="3" className="service-image" />
        <h3>Design & Layout </h3>
        
        <p>Creating pretty pages, one accidental style change at a time.</p>
      </div>
    </div>
    </div>
  );
}