import React, { useState, useEffect } from 'react';
import './App.css';
import projectImage from './assets/image.jpeg';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <a href="#home">SANDROCK INFRA<span>.</span></a>
        </div>
        <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#capabilities" onClick={() => setMobileMenuOpen(false)}>Capabilities</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </nav>
        <div className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

const Hero: React.FC = () => (
  <section id="home" className="hero">
    <div className="container">
      <div className="hero-content">
        <h1 className="hero-title">Engineering Excellence in Infrastructure<span>.</span></h1>
        <p className="hero-subtitle">Building robust foundations for the government and private sector with precision, safety, and integrity.</p>
        <div className="hero-btns">
          <a href="#services" className="btn btn-primary">Our Services</a>
          <a href="#contact" className="btn btn-outline">Consult Now</a>
        </div>
      </div>
    </div>
  </section>
);

const About: React.FC = () => (
  <section id="about" className="about">
    <div className="container">
      <div className="about-grid">
        <div className="about-text">
          <span className="section-tag">WHO WE ARE</span>
          <h2>A Legacy of Structural Reliability</h2>
          <p>Sandrock Infra Projects is a specialized engineering and construction firm focused on large-scale infrastructure development. We bridge the gap between complex engineering challenges and sustainable solutions.</p>
          <div className="vision-mission">
            <div className="vm-card">
              <h3>Our Vision</h3>
              <p>To be the most trusted infrastructure partner, recognized for setting benchmarks in quality and engineering innovation.</p>
            </div>
            <div className="vm-card">
              <h3>Our Mission</h3>
              <p>To deliver superior engineering projects that empower progress and create lasting value for our clients and communities.</p>
            </div>
          </div>
        </div>
        <div className="about-stats">
          <div className="stat-item">
            <span className="stat-num">10+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">50+</span>
            <span className="stat-label">Completed Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">100%</span>
            <span className="stat-label">Safety Compliance</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services: React.FC = () => {
  const serviceList = [
    { title: "Construction Projects", desc: "Full-scale execution of industrial and commercial infrastructures from groundbreaking to completion.", icon: "🏗️" },
    { title: "Fabrication Works", desc: "High-precision structural steel fabrication and assembly for complex engineering requirements.", icon: "⚙️" },
    { title: "Building Projects", desc: "Development of modern, high-standard residential complexes and efficient commercial spaces.", icon: "🏢" },
    { title: "Canal Projects", desc: "Specialized hydraulic engineering, irrigation systems, and large-scale canal lining works.", icon: "💧" },
    { title: "Civil Engineering", desc: "Expert structural design, foundational work, and large-scale architectural earthworks.", icon: "📐" },
    { title: "Electrical Projects", desc: "Comprehensive industrial electrical contracting and power management solutions.", icon: "⚡" },
    { title: "Site Development", desc: "Complete land preparation, including grading, drainage, and utility infrastructure.", icon: "🚜" },
    { title: "Engineering Projects", desc: "Integrated engineering consultancy and turnkey solutions for infrastructure needs.", icon: "🔬" },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">SERVICES</span>
          <h2>Our Expertise</h2>
          <p>We provide comprehensive solutions to Government contractors and Private real estate developers.</p>
        </div>
        <div className="services-grid">
          {serviceList.map((service, index) => (
            <div className="service-card" key={index}>
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Capabilities: React.FC = () => (
  <section id="capabilities" className="capabilities">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">CAPABILITIES</span>
        <h2>Precision Driven Development</h2>
      </div>
      <div className="about-grid" style={{ alignItems: 'center' }}>
        <div className="about-text">
          <p>Our capabilities extend beyond traditional construction. We leverage modern technology and a highly skilled workforce to ensure that every project we undertake is completed within the stipulated timeline, exceeding quality expectations.</p>
          <div className="cap-list">
            <div className="cap-item">
              <h4>Safety First</h4>
              <p>Upholding the highest standards of safety with 0% LTI records across multiple sites.</p>
            </div>
            <div className="cap-item">
              <h4>Quality Assurance</h4>
              <p>Rigorous material testing and quality controls are integrated into every workflow phase.</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src={projectImage}
            alt="Capability"
            style={{ width: '100%', borderRadius: '4px', border: '1px solid var(--border-color)' }}
          />
        </div>
      </div>
    </div>
  </section>
);

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your inquiry has been sent to Sandrock Infra Projects.");
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-tag">GET IN TOUCH</span>
            <h2>Ready to Build Tomorrow?</h2>
            <p>Discuss your upcoming project with our expert team today. We provide solutions that last a century.</p>
            <ul className="contact-details">
              <li>
                <span>Email Us</span>
                <strong>contact@sandrockinfra.com</strong>
              </li>
              <li>
                <span>Call Us</span>
                <strong>+91 8897661997</strong>
              </li>
              <li>
                <span>Headquarters</span>
                <strong>Door No: No,/Flat No.: 1/192, Flat No: 402 Kaizen DSL and DJR Enclave, Atmakur Village, Mangalagiri Mandal, Guntur – 522503</strong>
              </li>
              <li>
                <span>Website</span>
                <strong>www.sandrockinfra.com</strong>
              </li>
            </ul>
          </div>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="" disabled selected>Service Category</option>
                  <option value="civil">Civil Engineering</option>
                  <option value="building">Commercial Building</option>
                  <option value="canal">Canal Projects</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <textarea rows={4} placeholder="Tell us about your project" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary full-width">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <p>&copy; 2024 Sandrock Infra Projects. Built for reliability.</p>
        <div className="footer-socials">
          <a href="#">LinkedIn</a>
          <a href="#">X (Twitter)</a>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Capabilities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
