import { useState, useEffect, useRef } from "react";
import { P } from "./icons";

/* ---------- constants & data ---------- */
const GH = "https://github.com/shreyashkdm777";
const LI = "https://www.linkedin.com/in/shreyashkadam777";
const EMAIL = "shreyashkdm777@gmail.com";
const PHONE = "+91 8698296373";

const NAV = [["home", "Home"], ["about", "About"], ["skills", "Skills"], ["services", "Services"], ["projects", "Projects"], ["education", "Education"], ["certs", "Certifications"], ["resume", "Resume"], ["contact", "Contact"]];
const ROLES = ["Full Stack Developer", "React.js Developer", "Open to Work"];

const SPEC = [
  ["layout", "Responsive Frontend", "Building responsive UIs with React.js, HTML5, CSS3, JavaScript, Bootstrap and Tailwind CSS."],
  ["database", "Full Stack Integration", "Authentication, CRUD operations, database integration and REST API integration."],
  ["briefcase", "Open to Entry-Level Roles", "Seeking a Full Stack or React Developer position."],
];

const SKILLS = [
  ["code", "Frontend Development", [["HTML5", 90], ["CSS3", 85], ["JavaScript", 80], ["React.js", 75], ["Bootstrap", 85], ["Tailwind CSS", 75]]],
  ["database", "Backend & Database", [["Node.js", 70], ["Java", 70], ["SQL", 75], ["MongoDB", 70], ["REST APIs", 75]]],
  ["user", "Tools & Soft Skills", [["Git & GitHub", 80], ["Problem Solving", 85], ["Communication", 85], ["Teamwork", 85]]],
];

const SERVICES = [
  ["globe", "Business Websites", "Polished, responsive websites tailored to your branding.", ["Company websites", "Portfolio websites", "Landing pages"]],
  ["zap", "React Web Apps", "Interactive apps built with React.js.", ["Reusable components", "API integration", "Responsive UI"]],
  ["cart", "Booking & Ordering Sites", "Clean, mobile-friendly interfaces for food and travel businesses.", ["Menus & categories", "Cards & hover effects", "Mobile-friendly layouts"]],
  ["layers", "Full Stack Features", "Authentication, CRUD operations and database integration.", ["MongoDB / SQL", "REST APIs", "Auth flows"]],
];

const WHY = ["Full Stack Developer", "React Developer", "Clean & Readable Code", "Responsive Design", "Fast Delivery", "Scalable Solutions", "Client-Focused", "Long-Term Support"];

const PROJECTS = [
  { title: "E-BookStore – Online Book Reading Website", text: "Responsive Online Book Reading Website featuring a modern navigation bar, an attractive hero section, interactive book cards, book categories, a shopping cart, and a well-designed footer.", tags: ["HTML", "CSS", "JavaScript"], live: "https://onlinee-bookstore.netlify.app", image:"/ebookweb.png" },
  { title: "Bite Box – Food Ordering Website", text: "Responsive food-ordering website with navigation, food cards, hero section, categories, cart and footer, built with Flexbox, Grid and media queries.", tags: ["HTML", "CSS", "JavaScript"], live: null, image: "/bitebox.jpg" },
  { title: "Sukoonn Villa – Villa Booking Website", text: "Responsive villa booking website with cards, image hover effects, navigation menus and a category section, optimized for mobile.", tags: ["HTML", "CSS", "JavaScript"], live: "https://sukoonnvilla.netlify.app/", image: "/sukoonn.png" },
];

const EDU = [
  ["2022 – 2026", "B.Tech in Computer Science", "Chhatrapati Shivaji Maharaj University, Panvel", "Bachelor of Technology in Computer Science.", "CGPA: 7.50"],
  ["2021 – 2022", "Higher Secondary Certificate (HSC)", "S.M. Vadake Vidyalaya & Junior College, Chondhi-Kihim", "Class 12, Mumbai University.", "Percentage: 52%"],
  ["Secondary School", "Secondary School Certificate (SSC)", "S.M. Vadake Vidyalaya & Junior College, Chondhi-Kihim", "Class 10 secondary education.", "Percentage: 71%"],
];

const CERTS = [
  ["Full Stack Developer Course", "IT Vedant", "Full Stack Developer course completed in 2026."],
  ["Front-end Web Development", "Reliance Foundation Skilling Academy", "Front-end web development certification from the Reliance Foundation Skilling Academy."],
];

/* ---------- small helpers ---------- */
const Ic = ({ n }) => (
  <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: P[n] }} />
);

function useInView() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

/* scroll-reveal wrapper: <Rv as="h2" d={index}> */
function Rv({ as: T = "div", className = "", d = 0, style, children, ...rest }) {
  const [ref, seen] = useInView();
  return (
    <T ref={ref} className={`${className} rv${seen ? " in" : ""}`} style={{ "--d": `${(d % 4) * 0.12}s`, ...style }} {...rest}>
      {children}
    </T>
  );
}

const Heading = ({ tag, children }) => (
  <>
    <Rv className="tag">{tag}</Rv>
    <Rv as="h2">{children}</Rv>
  </>
);

function Bar({ name, pct }) {
  const [ref, seen] = useInView();
  return (
    <div className="bar" ref={ref}>
      <div><span>{name}</span><span>{pct}%</span></div>
      <div className="track"><div className="fill" style={{ width: seen ? `${pct}%` : 0 }} /></div>
    </div>
  );
}

function Typed({ words }) {
  const [text, setText] = useState("");
  useEffect(() => {
    let w = 0, c = 0, del = false, id;
    const tick = () => {
      const word = words[w];
      c += del ? -1 : 1;
      setText(word.slice(0, c));
      let ms = del ? 45 : 90;
      if (!del && c === word.length) { del = true; ms = 1400; }
      else if (del && c === 0) { del = false; w = (w + 1) % words.length; ms = 400; }
      id = setTimeout(tick, ms);
    };
    tick();
    return () => clearTimeout(id);
  }, [words]);
  return <h3 className="typed"><span id="ty">{text}</span></h3>;
}

/* ---------- sections ---------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
    };
    const onDoc = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    const onResize = () => { if (window.innerWidth > 900) setOpen(false); };
    addEventListener("scroll", onScroll);
    document.addEventListener("click", onDoc);
    addEventListener("keydown", onKey);
    addEventListener("resize", onResize);
    return () => {
      removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onDoc);
      removeEventListener("keydown", onKey);
      removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <div id="bar" style={{ width: `${progress}%` }} />
      <nav ref={navRef}>
        <a className="logo" href="#home"><span className="men">👨🏻‍💻</span>Shreyash Kadam</a>
        <button id="burger" className={open ? "open" : ""} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <ul className={open ? "open" : ""} onClick={(e) => e.target.closest("a") && setOpen(false)}>
          {NAV.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
        </ul>
      </nav>
    </>
  );
}

function Hero({ onResume }) {
  return (
    <section id="home" className="hero">
      <div>
        <span className="badge">Open to Work</span>
        <div className="tag">Welcome to my space</div>
        <h1>Hi, I am <span>Shreyash Kadam</span></h1>
        <Typed words={ROLES} />
        <p>Full Stack Developer building responsive web applications with React.js, Node.js, JavaScript, MongoDB, SQL and REST APIs.</p>
        <a className="btn p" href="#contact"><Ic n="send" />Contact Me</a>
        <button className="btn" onClick={onResume}><Ic n="eye" />View Resume</button>
        <a className="btn" href={GH} target="_blank" rel="noopener noreferrer"><Ic n="github" />GitHub</a>
        <a className="btn" href={LI} target="_blank" rel="noopener noreferrer"><Ic n="linkedin" />LinkedIn</a>
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
            <div><b>Years of Study</b><p>Rigorous CS concepts &amp; practices</p></div>
          </div>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "1fr" }}>
          {SPEC.map(([icon, title, text], i) => (
            <Rv key={title} className="glass" d={i}>
              <span className="ib"><Ic n={icon} /></span>
              <h4>{title}</h4><p>{text}</p>
            </Rv>
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
        {SKILLS.map(([icon, title, bars], i) => (
          <Rv key={title} className="glass" d={i}>
            <h3><Ic n={icon} />{title}</h3>
            {bars.map(([name, pct]) => <Bar key={name} name={name} pct={pct} />)}
          </Rv>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services">
      <Heading tag="My Offerings">Web Development <span>Services</span></Heading>
      <p style={{ color: "var(--mute)", margin: "-18px 0 26px" }}>Helping businesses and individuals build modern, scalable web solutions.</p>
      <div className="grid">
        {SERVICES.map(([icon, title, text, list], i) => (
          <Rv key={title} className="glass" d={i}>
            <span className="ib"><Ic n={icon} /></span>
            <h3>{title}</h3><p>{text}</p>
            <ul>{list.map((l) => <li key={l}>{l}</li>)}</ul>
          </Rv>
        ))}
      </div>
      <Rv className="glass" style={{ marginTop: 40 }}>
        <div className="tag">Why Hire Me</div>
        <h3 style={{ fontSize: "1.5rem", margin: "6px 0 10px" }}>Delivering High-Quality Web Solutions</h3>
        <p>Modern systems that help businesses, institutes, and individuals move online smoothly, pairing solid database engineering with polished glassmorphism frontends.</p>
        <div style={{ margin: "16px 0" }}>
          {WHY.map((w) => <span className="chip" key={w}><Ic n="check" />{w}</span>)}
        </div>
        <a className="btn p" href="#contact"><Ic n="send" />Let's Discuss Your Project</a>
      </Rv>
    </section>
  );
}

function LiveDemo({ url }) {
  const [soon, setSoon] = useState(false);
  if (url) return <a className="btn p" href={url} target="_blank" rel="noopener noreferrer"><Ic n="external" />Live Demo</a>;
  const click = () => { setSoon(true); setTimeout(() => setSoon(false), 1500); };
  return <button className="btn p" onClick={click}>{soon ? "Coming Soon" : <><Ic n="external" />Live Demo</>}</button>;
}


function Projects() {
  const trackRef = useRef(null);

  const slide = (direction) => {
    if (!trackRef.current) return;

    const card = trackRef.current.querySelector(".project-card");
    const distance = card
      ? card.getBoundingClientRect().width + 20
      : 360;

    trackRef.current.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects">
      <Heading tag="My Portfolio">
        Featured <span>Projects</span>
      </Heading>

      <div className="project-slider-controls">
        <p>Explore some of my recent work.</p>

        <div className="project-slider-buttons">
          <button
            className="slider-arrow"
            type="button"
            aria-label="Previous projects"
            onClick={() => slide(-1)}
          >
            &#8249;
          </button>

          <button
            className="slider-arrow"
            type="button"
            aria-label="Next projects"
            onClick={() => slide(1)}
          >
            &#8250;
          </button>
        </div>
      </div>

      <div className="project-slider" ref={trackRef}>
        {PROJECTS.map((p, i) => (
          <Rv
            key={p.title}
            className="glass project-card"
            d={i}
          >
            <div className="shot">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                />
              ) : (
                "Project screenshot"
              )}
            </div>

            <h3>{p.title}</h3>
            <p>{p.text}</p>

            <div className="project-tags">
              {p.tags.map((tag) => (
                <span className="chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-actions">
              <a
                className="btn"
                href={GH}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Ic n="github" />
                GitHub
              </a>

              <LiveDemo url={p.live} />
            </div>
          </Rv>
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
        {EDU.map(([date, title, place, text, score], i) => (
          <Rv key={title} className="glass" d={i}>
            <small>{date}</small>
            <h3><Ic n="cap" />{title}</h3>
            <b>{place}</b><p>{text}</p>
            <span className="chip">{score}</span>
          </Rv>
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
        {CERTS.map(([title, org, text], i) => (
          <Rv key={title} className="glass" d={i}>
            <h3><Ic n="award" />{title}</h3>
            <b style={{ color: "var(--b)" }}>{org}</b><p>{text}</p>
          </Rv>
        ))}
      </div>
    </section>
  );
}

function ResumeSection({ onResume }) {
  return (
    <section id="resume">
      <Heading tag="My Credentials"><span>Resume</span></Heading>
      <Rv className="glass" style={{ textAlign: "center" }}>
        <h3>Shreyash Kadam – Profile Summary</h3>
        <p style={{ margin: "8px 0 18px" }}>
          BTech Computer Science graduate and Full Stack Developer experienced in React.js, Node.js, JavaScript, MongoDB, SQL and REST APIs, seeking an entry-level Full Stack or React Developer role.
        </p>
        <button className="btn p" onClick={onResume}><Ic n="eye" />View Resume</button>
        <a className="btn" href="/resume.pdf" download="Shreyash_Kadam_Resume.pdf"><Ic n="download" />Download Resume (PDF)</a>
        <a className="btn" href={GH} target="_blank" rel="noopener noreferrer"><Ic n="github" />GitHub</a>
        <a className="btn" href={LI} target="_blank" rel="noopener noreferrer"><Ic n="linkedin" />LinkedIn</a>
      </Rv>
    </section>
  );
}

function Contact() {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const body = `${f.message}\n\n— ${f.name} (${f.email})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(f.subject || "Portfolio enquiry")}&body=${encodeURIComponent(body)}`;
  };
  return (
    <section id="contact">
      <Heading tag="Get In Touch">Let's Build Something <span>Amazing Together</span></Heading>
      <div className="two">
        <div>
          <h3 style={{ marginBottom: 10 }}>Contact Information</h3>
          <p style={{ color: "var(--mute)", marginBottom: 18 }}>Have an idea for a business website, custom dashboard, or e-commerce solution? Reach out using the form or these channels.</p>
          {[["mail", "Email Me", EMAIL], ["phone", "Call Me", PHONE], ["pin", "Location", "Mumbai, Maharashtra, India"]].map(([icon, label, val]) => (
            <Rv key={label} className="glass" style={{ marginBottom: 12 }}>
              <b><Ic n={icon} />{label}</b><p>{val}</p>
            </Rv>
          ))}
        </div>
        <Rv as="form" className="glass" onSubmit={submit}>
          <h3>Send a Message</h3>
          <input placeholder="Name" required value={f.name} onChange={set("name")} />
          <input type="email" placeholder="Email" required value={f.email} onChange={set("email")} />
          <input placeholder="Subject" value={f.subject} onChange={set("subject")} />
          <textarea rows="5" placeholder="Message" required value={f.message} onChange={set("message")} />
          <button className="btn p" style={{ width: "fit-content" }}><Ic n="send" />Send Message</button>
        </Rv>
      </div>
    </section>
  );
}

function ResumeModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div id="rm" style={{ display: "block" }} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="rbox">
        <button className="btn p rx" onClick={onClose}>&times; Close</button>
        <iframe title="Resume" src="/resume.pdf" style={{ width: "100%", height: "85vh", border: 0, borderRadius: 10, background: "#fff" }} />
      </div>
    </div>
  );
}

/* ---------- app ---------- */
export default function App() {
  const [showResume, setShowResume] = useState(false);
  const open = () => setShowResume(true);
  const close = () => setShowResume(false);
  return (
    <>
      <Navbar />
      <Hero onResume={open} />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Education />
      <Certifications />
      <ResumeSection onResume={open} />
      <Contact />
      <footer>
        &copy; 2026 Designed &amp; Developed by Shreyash Kadam<br />
        <a href={GH} target="_blank" rel="noopener noreferrer" style={{ color: "var(--b)" }}><Ic n="github" />GitHub</a> ·{" "}
        <a href={LI} target="_blank" rel="noopener noreferrer" style={{ color: "var(--b)" }}><Ic n="linkedin" />LinkedIn</a>
      </footer>
      <a id="top" href="#home"><Ic n="arrowup" /></a>
      {showResume && <ResumeModal onClose={close} />}
    </>
  );
}
