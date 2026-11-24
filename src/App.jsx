import { useState, useEffect } from "react";

/* ================= YOUR DATA (edit here) ================= */
const GITHUB = "https://github.com/shreyashkdm777";
const LINKEDIN = "https://www.linkedin.com/in/shreyashkadam777";
const EMAIL = "shreyashkdm777@gmail.com";
const PHONE = "+91 8698296373";

const MENU = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certs", label: "Certifications" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

const ROLES = ["Full Stack Developer", "React.js Developer", "Open to Work"];

const HIGHLIGHTS = [
  { icon: "💻", title: "Responsive Frontend", text: "Building responsive UIs with React.js, HTML5, CSS3, JavaScript, Bootstrap and Tailwind CSS." },
  { icon: "🗄️", title: "Full Stack Integration", text: "Authentication, CRUD operations, database integration and REST API integration." },
  { icon: "💼", title: "Open to Entry-Level Roles", text: "Seeking a Full Stack or React Developer position." },
];

const SKILLS = [
  {
    title: "Frontend Development",
    items: [
      { name: "HTML5", percent: 90 },
      { name: "CSS3", percent: 85 },
      { name: "JavaScript", percent: 80 },
      { name: "React.js", percent: 75 },
      { name: "Bootstrap", percent: 85 },
      { name: "Tailwind CSS", percent: 75 },
    ],
  },
  {
    title: "Backend & Database",
    items: [
      { name: "Node.js", percent: 70 },
      { name: "Java", percent: 70 },
      { name: "SQL", percent: 75 },
      { name: "MongoDB", percent: 70 },
      { name: "REST APIs", percent: 75 },
    ],
  },
  {
    title: "Tools & Soft Skills",
    items: [
      { name: "Git & GitHub", percent: 80 },
      { name: "Problem Solving", percent: 85 },
      { name: "Communication", percent: 85 },
      { name: "Teamwork", percent: 85 },
    ],
  },
];

const SERVICES = [
  { icon: "🌐", title: "Business Websites", text: "Polished, responsive websites tailored to your branding.", list: ["Company websites", "Portfolio websites", "Landing pages"] },
  { icon: "⚡", title: "React Web Apps", text: "Interactive apps built with React.js.", list: ["Reusable components", "API integration", "Responsive UI"] },
  { icon: "🛒", title: "Booking & Ordering Sites", text: "Clean, mobile-friendly interfaces for food and travel businesses.", list: ["Menus & categories", "Cards & hover effects", "Mobile-friendly layouts"] },
  { icon: "🧱", title: "Full Stack Features", text: "Authentication, CRUD operations and database integration.", list: ["MongoDB / SQL", "REST APIs", "Auth flows"] },
];

const WHY_HIRE = ["Full Stack Developer", "React Developer", "Clean & Readable Code", "Responsive Design", "Fast Delivery", "Scalable Solutions", "Client-Focused", "Long-Term Support"];

const PROJECTS = [
  {
    title: "RentWear – Online Fashion Rental Platform",
    text: "A modern fashion rental website featuring attractive product cards, interactive image hover effects, responsive navigation menus, and categorized collections for clothing, bags and accessories.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    live: "https://rental-clothes-store.vercel.app/",
    image: "/rentware.png",
  },
  {
    title: "Bite Box – Food Ordering Website",
    text: "Responsive food-ordering website with navigation, food cards, hero section, categories, cart and footer, built with Flexbox, Grid and media queries.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://biteboxfood.netlify.app/",
    image: "/bitebox.jpg",
  },
  {
    title: "E-BookStore – Online Book Reading Website",
    text: "Responsive Online Book Reading Website featuring a modern navigation bar, an attractive hero section, interactive book cards, book categories, a shopping cart, and a well-designed footer.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://onlinee-bookstore.netlify.app",
    image: "/ebookweb.png",
  },
];

const EDUCATION = [
  { date: "2022 – 2026", title: "B.Tech in Computer Science", place: "Chhatrapati Shivaji Maharaj University, Panvel", text: "Bachelor of Technology in Computer Science.", score: "CGPA: 7.50" },
  { date: "2021 – 2022", title: "Higher Secondary Certificate (HSC)", place: "S.M. Vadake Vidyalaya & Junior College, Chondhi-Kihim", text: "Class 12, Mumbai University.", score: "Percentage: 52%" },
  { date: "Secondary School", title: "Secondary School Certificate (SSC)", place: "S.M. Vadake Vidyalaya & Junior College, Chondhi-Kihim", text: "Class 10 secondary education.", score: "Percentage: 71%" },
];

const CERTS = [
  { title: "Full Stack Developer Course", org: "IT Vedant", text: "Full Stack Developer course completed in 2026." },
  { title: "Front-end Web Development", org: "Reliance Foundation Skilling Academy", text: "Front-end web development certification from the Reliance Foundation Skilling Academy." },
];

/* ================= SMALL PARTS ================= */

// Section title: small tag + big heading
function Heading({ tag, children }) {
  return (
    <>
      <div className="tag">{tag}</div>
      <h2>{children}</h2>
    </>
  );
}

// One skill bar
function SkillBar({ name, percent }) {
  return (
    <div className="bar">
      <div>
        <span>{name}</span>
        <span>{percent}%</span>
      </div>
      <div className="track">
        <div className="fill" style={{ width: percent + "%" }} />
      </div>
    </div>
  );
}

// Text that changes every 2 seconds (simple version of typing effect)
function RoleText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((old) => (old + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return <h3 className="typed">{ROLES[index]}</h3>;
}

/* ================= SECTIONS ================= */

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <a className="logo" href="#home">
        <span className="men">👨🏻‍💻</span>Shreyash Kadam
      </a>

      <button id="burger" className={menuOpen ? "open" : ""} aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>

      <ul className={menuOpen ? "open" : ""}>
        {MENU.map((item) => (
          <li key={item.id}>
            <a href={"#" + item.id} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero({ openResume }) {
  return (
    <section id="home" className="hero">
      <div>
        <span className="badge">Open to Work</span>
        <div className="tag">Welcome to my space</div>
        <h1>Hi, I am <span>Shreyash Kadam</span></h1>
        <RoleText />
        <p>Full Stack Developer building responsive web applications with React.js, Node.js, JavaScript, MongoDB, SQL and REST APIs.</p>

        <a className="btn p" href="#contact">✉️ Contact Me</a>
        <button className="btn" onClick={openResume}>👁️ View Resume</button>
        <a className="btn" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>

      <div className="avatar">
        <img src="/profile.jpg" alt="Shreyash Kadam" />
        <span className="float" style={{ top: "8%", left: "-8%" }}>Full Stack Developer</span>
        <span className="float" style={{ top: "50%", right: "-10%" }}>React Developer</span>
        <span className="float" style={{ bottom: "6%", left: 0 }}>Open to Work</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <Heading tag="Who I Am">About <span>Me</span></Heading>

      <div className="two">
        <div>
          <h3 style={{ marginBottom: 12 }}>Passionate Full Stack Developer</h3>
          <p style={{ color: "var(--mute)", marginBottom: 12 }}>
            I am a <b>B.Tech Computer Science</b> graduate and Full Stack Developer with hands-on experience building responsive web applications using <b>React.js</b>, <b>Node.js</b>, <b>JavaScript</b>, <b>HTML5</b>, <b>CSS3</b>, <b>MongoDB</b> and <b>SQL</b>.
          </p>
          <p style={{ color: "var(--mute)" }}>
            I have worked on authentication, CRUD operations, database integration, responsive UI development and API integration. I am seeking an entry-level Full Stack or React Developer role to apply and expand my software development skills.
          </p>

          <div className="glass" style={{ marginTop: 20, display: "flex", gap: 16, alignItems: "center" }}>
            <div className="big">4+</div>
            <div>
              <b>Years of Study</b>
              <p>Rigorous CS concepts &amp; practices</p>
            </div>
          </div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: "1fr" }}>
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="glass">
              <span className="ib">{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <Heading tag="What I Work With">My Core <span>Skills</span></Heading>

      <div className="grid">
        {SKILLS.map((group) => (
          <div key={group.title} className="glass">
            <h3>{group.title}</h3>
            {group.items.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percent={skill.percent} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services">
      <Heading tag="My Offerings">Web Development <span>Services</span></Heading>
      <p style={{ color: "var(--mute)", margin: "-18px 0 26px" }}>
        Helping businesses and individuals build modern, scalable web solutions.
      </p>

      <div className="grid">
        {SERVICES.map((s) => (
          <div key={s.title} className="glass">
            <span className="ib">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <ul>
              {s.list.map((line) => <li key={line}>{line}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="glass" style={{ marginTop: 40 }}>
        <div className="tag">Why Hire Me</div>
        <h3 style={{ fontSize: "1.5rem", margin: "6px 0 10px" }}>Delivering High-Quality Web Solutions</h3>
        <p>Modern systems that help businesses, institutes, and individuals move online smoothly, pairing solid database engineering with polished glassmorphism frontends.</p>

        <div style={{ margin: "16px 0" }}>
          {WHY_HIRE.map((w) => <span className="chip" key={w}>✔ {w}</span>)}
        </div>

        <a className="btn p" href="#contact">✉️ Let's Discuss Your Project</a>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <Heading tag="My Portfolio">Featured <span>Projects</span></Heading>
      <p style={{ color: "var(--mute)", marginBottom: 20 }}>Explore some of my recent work.</p>

      {/* Cards scroll sideways using the CSS class "project-slider" */}
      <div className="project-slider">
        {PROJECTS.map((p) => (
          <div key={p.title} className="glass project-card">
            <div className="shot">
              <img src={p.image} alt={p.title} loading="lazy" />
            </div>

            <h3>{p.title}</h3>
            <p>{p.text}</p>

            <div className="project-tags">
              {p.tags.map((tag) => <span className="chip" key={tag}>{tag}</span>)}
            </div>

            <div className="project-actions">
              <a className="btn" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="btn p" href={p.live} target="_blank" rel="noopener noreferrer">🔗 Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education">
      <Heading tag="My Journey"><span>Education</span></Heading>

      <div className="tl">
        {EDUCATION.map((e) => (
          <div key={e.title} className="glass">
            <small>{e.date}</small>
            <h3>🎓 {e.title}</h3>
            <b>{e.place}</b>
            <p>{e.text}</p>
            <span className="chip">{e.score}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certs">
      <Heading tag="Validations"><span>Certifications</span></Heading>

      <div className="grid">
        {CERTS.map((c) => (
          <div key={c.title} className="glass">
            <h3>🏆 {c.title}</h3>
            <b style={{ color: "var(--b)" }}>{c.org}</b>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ResumeSection({ openResume }) {
  return (
    <section id="resume">
      <Heading tag="My Credentials"><span>Resume</span></Heading>

      <div className="glass" style={{ textAlign: "center" }}>
        <h3>Shreyash Kadam – Profile Summary</h3>
        <p style={{ margin: "8px 0 18px" }}>
          BTech Computer Science graduate and Full Stack Developer experienced in React.js, Node.js, JavaScript, MongoDB, SQL and REST APIs, seeking an entry-level Full Stack or React Developer role.
        </p>

        <button className="btn p" onClick={openResume}>👁️ View Resume</button>
        <a className="btn" href="/resume.pdf" download="Shreyash_Kadam_Resume.pdf">⬇️ Download Resume (PDF)</a>
        <a className="btn" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Opens the user's email app with the message filled in
  function handleSubmit(e) {
    e.preventDefault();
    const body = message + "\n\n— " + name + " (" + email + ")";
    const link =
      "mailto:" + EMAIL +
      "?subject=" + encodeURIComponent(subject || "Portfolio enquiry") +
      "&body=" + encodeURIComponent(body);
    window.location.href = link;
  }

  return (
    <section id="contact">
      <Heading tag="Get In Touch">Let's Build Something <span>Amazing Together</span></Heading>

      <div className="two">
        <div>
          <h3 style={{ marginBottom: 10 }}>Contact Information</h3>
          <p style={{ color: "var(--mute)", marginBottom: 18 }}>
            Have an idea for a business website, custom dashboard, or e-commerce solution? Reach out using the form or these channels.
          </p>

          <div className="glass" style={{ marginBottom: 12 }}>
            <b>✉️ Email Me</b>
            <p>{EMAIL}</p>
          </div>
          <div className="glass" style={{ marginBottom: 12 }}>
            <b>📞 Call Me</b>
            <p>{PHONE}</p>
          </div>
          <div className="glass" style={{ marginBottom: 12 }}>
            <b>📍 Location</b>
            <p>Mumbai, Maharashtra, India</p>
          </div>
        </div>

        <form className="glass" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>
          <input placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <input placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <textarea rows="5" placeholder="Message" required value={message} onChange={(e) => setMessage(e.target.value)} />
          <button className="btn p" style={{ width: "fit-content" }}>✉️ Send Message</button>
        </form>
      </div>
    </section>
  );
}

// Popup that shows the resume PDF
function ResumeModal({ close }) {
  return (
    <div id="rm" style={{ display: "block" }} onClick={close}>
      {/* stopPropagation = clicking inside the box does NOT close it */}
      <div className="rbox" onClick={(e) => e.stopPropagation()}>
        <button className="btn p rx" onClick={close}>&times; Close</button>
        <iframe
          title="Resume"
          src="/resume.pdf"
          style={{ width: "100%", height: "85vh", border: 0, borderRadius: 10, background: "#fff" }}
        />
      </div>
    </div>
  );
}

/* ================= MAIN APP ================= */
export default function App() {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <Navbar />
      <Hero openResume={() => setShowResume(true)} />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Education />
      <Certifications />
      <ResumeSection openResume={() => setShowResume(true)} />
      <Contact />

      <footer>
        &copy; 2026 Designed &amp; Developed by Shreyash Kadam<br />
        <a href={GITHUB} target="_blank" rel="noopener noreferrer" style={{ color: "var(--b)" }}>GitHub</a> ·{" "}
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" style={{ color: "var(--b)" }}>LinkedIn</a>
      </footer>

      <a id="top" href="#home">⬆</a>

      {showResume && <ResumeModal close={() => setShowResume(false)} />}
    </>
  );
}