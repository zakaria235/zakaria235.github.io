function ProjectCard({ title, description, technologies, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-tags">
        {technologies.map(function (tech, i) {
          return <span className="tag" key={i}>{tech}</span>;
        })}
      </div>
      <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i> Voir le projet
      </a>
    </div>
  );
}

function ProjectsList() {
  var projects = [
    {
      title: "CV Personnel Interactif",
      description: "Mon CV personnel en ligne construit avec HTML, CSS, jQuery et React. Hébergé sur GitHub Pages.",
      technologies: ["HTML", "CSS", "jQuery", "React"],
      link: "https://github.com/votre-username/mon-cv"
    },
    {
      title: "parfum site web",
      description: "Site web dans le cadre de projet module web 1, avec présentation des produits et formulaire de contact.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/votre-username/parfum-site"
    },

  ];

  return (
    <div className="projects-grid">
      {projects.map(function (project, i) {
        return (
          <ProjectCard
            key={i}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        );
      })}
    </div>
  );
}

function ContactForm() {
  // State : valeurs des champs
  var [name, setName]       = React.useState('');
  var [email, setEmail]     = React.useState('');
  var [message, setMessage] = React.useState('');
  // State : erreurs de validation
  var [errors, setErrors]   = React.useState({});
  // State : succès envoi
  var [sent, setSent]       = React.useState(false);

  function handleSubmit() {
    var validationErrors = window.validateContactForm(name, email, message);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
  }

  if (sent) {
    return (
      <p className="success-msg">
        <i className="fa fa-check-circle"></i> Merci ! Votre message a bien été envoyé.
      </p>
    );
  }

  return (
    <div className="contact-form">
      {/* Champ Nom */}
      <input
        type="text"
        placeholder="Votre nom"
        value={name}
        onChange={function (e) { setName(e.target.value); }}
      />
      {errors.name && <span className="error-msg">{errors.name}</span>}

      {/* Champ Email */}
      <input
        type="email"
        placeholder="Votre email"
        value={email}
        onChange={function (e) { setEmail(e.target.value); }}
      />
      {errors.email && <span className="error-msg">{errors.email}</span>}

      {/* Champ Message */}
      <textarea
        placeholder="Votre message..."
        value={message}
        onChange={function (e) { setMessage(e.target.value); }}
      />
      {errors.message && <span className="error-msg">{errors.message}</span>}

      <button className="btn-submit" onClick={handleSubmit}>
        Envoyer <i className="fa fa-paper-plane"></i>
      </button>
    </div>
  );
}

var projectsRoot = ReactDOM.createRoot(document.getElementById('react-projects-root'));
projectsRoot.render(<ProjectsList />);

var contactRoot = ReactDOM.createRoot(document.getElementById('react-contact-root'));
contactRoot.render(<ContactForm />);