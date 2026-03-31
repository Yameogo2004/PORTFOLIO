// Données du portfolio
const portfolioData = {
    projects: [
        {
            title: "🛒 Application E-Commerce",
            tech: "Java • Swing",
            description: "Application de e-commerce avec interface graphique, gestion sécurisée des données clients et produits.",
            link: "https://github.com/Yameogo2004/APPLCATION-E_COMMERCE"
        },
        {
            title: "🚦 Traffic Deep Learning Prediction",
            tech: "Python • TensorFlow • Keras",
            description: "Prédiction du trafic routier à l'aide de modèles Deep Learning (LSTM, réseaux de neurones récurrents).",
            link: "https://github.com/Yameogo2004/Traffic-Deep-Learning-Prediction"
        },
        {
            title: "📊 Traffic Interface",
            tech: "Python • Flask • Tkinter",
            description: "Interface déployée pour interagir avec le modèle de prédiction de trafic.",
            link: "https://github.com/Yameogo2004/Traffic-Interface"
        },
        {
            title: "📈 Time Series Project",
            tech: "Python • Scikit-Learn • Pandas",
            description: "Projets de Machine Learning pour séries temporelles et modèles prédictifs.",
            link: "https://github.com/Yameogo2004/TIME_SERIE_PROJECT"
        },
        {
            title: "🤖 ML Project",
            tech: "Python • Scikit-Learn • TensorFlow",
            description: "Pipeline complet de Machine Learning avec différents algorithmes.",
            link: "https://github.com/Yameogo2004/ML-PROJECT"
        },
        {
            title: "🌐 Projet NETSPOT",
            tech: "Cisco • Packet Tracer",
            description: "Simulation et configuration réseau (VLAN, Wi-Fi, routage) avec Cisco Packet Tracer.",
            link: "https://github.com/Yameogo2004/PROJET_NETSPOT"
        },
        {
            title: "📡 Projet QAM",
            tech: "MATLAB • Simulink",
            description: "Étude et simulation de modulation QAM pour les télécommunications.",
            link: "https://github.com/Yameogo2004/Projet-QAM"
        },
        {
            title: "📶 TNS Project",
            tech: "MATLAB",
            description: "Étude et simulation de techniques de transmission numérique.",
            link: "https://github.com/Yameogo2004/TNS-PROJECT"
        },
        {
            title: "🗑️ Smart Trash Bin",
            tech: "Arduino • Capteurs",
            description: "Montage réel de poubelle intelligente pour le suivi du remplissage.",
            link: "https://github.com/Yameogo2004/Smart-Trash-Bin"
        },
        {
            title: "⚡ Électronique Project",
            tech: "Proteus • Microcontrôleur",
            description: "Simulation électronique avec Proteus, microcontrôleur et capteurs.",
            link: "https://github.com/Yameogo2004/ELECTRONIQUE-PROJECT"
        }
    ],
    
    skills: [
        { icon: "fas fa-network-wired", name: "Cisco / Réseaux / VLAN / TCP-IP" },
        { icon: "fas fa-shield-alt", name: "Cybersécurité / VPN / Firewall" },
        { icon: "fas fa-cloud", name: "Cloud / Virtualisation / VMware" },
        { icon: "fab fa-java", name: "Java / Swing / Applications Desktop" },
        { icon: "fab fa-python", name: "Python / Machine Learning / Deep Learning" },
        { icon: "fas fa-microchip", name: "Électronique / Arduino / Proteus" },
        { icon: "fas fa-chart-line", name: "TensorFlow / Keras / Scikit-Learn" },
        { icon: "fas fa-database", name: "MySQL / SQLite" },
        { icon: "fab fa-git-alt", name: "Git / GitHub" }
    ],
    
    timeline: [
        {
            title: "🎓 Cycle Ingénieur en Réseaux & Télécommunications",
            date: "2023 - Présent",
            description: "École supérieure d'ingénierie · Spécialisation Cybersécurité & Intelligence Artificielle"
        },
        {
            title: "📜 Certification Cisco CCNA",
            date: "En cours",
            description: "Réseaux d'entreprise, sécurité, automatisation et protocoles avancés"
        },
        {
            title: "🤖 Deep Learning Specialization",
            date: "2024",
            description: "Réseaux de neurones, CNN, RNN, optimisation avancée"
        }
    ],
    
    contact: {
        email: "arielyameogo2004@gmail.com",
        phone: "+212 604280149 / +226 55623931",
        linkedin: "https://www.linkedin.com/in/ariel-barthélémy-w-yameogo-43a39b332",
        github: "https://github.com/Yameogo2004"
    }
};

// Fonction pour charger les projets
function loadProjects() {
    const container = document.getElementById('projects-container');
    if (!container) {
        console.log("Container projects non trouvé");
        return;
    }
    
    let html = '<div class="projects-grid">';
    portfolioData.projects.forEach(project => {
        html += `
            <div class="project-item">
                <div class="project-title">
                    <h3>${project.title}</h3>
                    <span class="tech-stack">${project.tech}</span>
                </div>
                <div class="project-desc">${project.description}</div>
                <a href="${project.link}" class="project-link" target="_blank" rel="noopener">
                    <i class="fab fa-github"></i> Voir le projet <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
}

// Fonction pour charger les compétences
function loadSkills() {
    const container = document.getElementById('skills-container');
    if (!container) {
        console.log("Container skills non trouvé");
        return;
    }
    
    let html = '<div class="skills-cloud">';
    portfolioData.skills.forEach(skill => {
        html += `
            <span class="skill-tag">
                <i class="${skill.icon}"></i> ${skill.name}
            </span>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
}

// Fonction pour charger la timeline
function loadTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container) {
        console.log("Container timeline non trouvé");
        return;
    }
    
    let html = '<div class="timeline">';
    portfolioData.timeline.forEach(item => {
        html += `
            <div class="timeline-item">
                <h3>${item.title}</h3>
                <div class="timeline-date">${item.date}</div>
                <div class="timeline-desc">${item.description}</div>
            </div>
        `;
    });
    html += `
        <div class="award">
            <i class="fas fa-trophy"></i>
            <div><strong>🏆 Projet primé :</strong> Hackathon IoT & GreenTech 2024 - Smart Trash Bin</div>
        </div>
    </div>`;
    container.innerHTML = html;
}

// Fonction pour charger les contacts
function loadContact() {
    const container = document.getElementById('contact-container');
    if (!container) {
        console.log("Container contact non trouvé");
        return;
    }
    
    container.innerHTML = `
        <div class="contact-info">
            <div class="contact-detail">
                <i class="fas fa-envelope"></i>
                <span>${portfolioData.contact.email}</span>
            </div>
            <div class="contact-detail">
                <i class="fas fa-phone-alt"></i>
                <span>${portfolioData.contact.phone}</span>
            </div>
            <div class="social-links">
                <a href="${portfolioData.contact.linkedin}" class="social-btn" target="_blank" rel="noopener">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="${portfolioData.contact.github}" class="social-btn" target="_blank" rel="noopener">
                    <i class="fab fa-github"></i> GitHub
                </a>
            </div>
        </div>
        <hr>
        <p style="margin-top: 1rem;">
            <i class="fas fa-map-marker-alt"></i> Basé entre Maroc & Burkina Faso · Ouvert aux opportunités
        </p>
    `;
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    console.log("Page chargée, initialisation du portfolio...");
    loadProjects();
    loadSkills();
    loadTimeline();
    loadContact();
});
