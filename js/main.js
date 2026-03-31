// Données du portfolio
const portfolioData = {
    projects: [
        {
            title: "🛒 E-Commerce Desktop",
            tech: "Java • Swing",
            description: "Application de gestion e-commerce avec interface graphique intuitive, gestion sécurisée des données clients et produits.",
            link: "https://github.com/Yameogo2004/APPLCATION-E_COMMERCE"
        },
        {
            title: "🚦 Traffic Deep Learning",
            tech: "Python • TensorFlow • Keras",
            description: "Prédiction de flux routier via réseaux de neurones récurrents (LSTM) et analyse de séries temporelles.",
            link: "https://github.com/Yameogo2004/Traffic-Deep-Learning-Prediction"
        },
        {
            title: "📊 Traffic Interface",
            tech: "Flask • Tkinter",
            description: "Interface utilisateur interactive pour visualiser les prédictions de trafic en temps réel.",
            link: "https://github.com/Yameogo2004/Traffic-Interface"
        },
        {
            title: "📈 Time Series & ML",
            tech: "Scikit-Learn • Pandas",
            description: "Modélisation prédictive pour données temporelles avec feature engineering avancé.",
            link: "https://github.com/Yameogo2004/TIME_SERIE_PROJECT"
        },
        {
            title: "🤖 ML Pipeline",
            tech: "Python • Scikit-Learn",
            description: "Pipeline complet de Machine Learning : nettoyage, modèles supervisés et visualisation.",
            link: "https://github.com/Yameogo2004/ML-PROJECT"
        },
        {
            title: "🌐 PROJET NETSPOT",
            tech: "Cisco • Packet Tracer",
            description: "Simulation d'infrastructure réseau sécurisée : VLAN, routage inter-VLAN et sécurité.",
            link: "https://github.com/Yameogo2004/PROJET_NETSPOT"
        },
        {
            title: "📡 Modulation QAM",
            tech: "MATLAB • Simulink",
            description: "Étude complète de modulation numérique QAM, analyse de constellation et taux d'erreur binaire.",
            link: "https://github.com/Yameogo2004/Projet-QAM"
        },
        {
            title: "🗑️ Smart Trash Bin",
            tech: "Arduino • IoT",
            description: "Poubelle connectée avec capteur ultrasonique pour la smart city.",
            link: "https://github.com/Yameogo2004/Smart-Trash-Bin"
        },
        {
            title: "⚡ Electronique Proteus",
            tech: "Proteus • µC",
            description: "Simulation de circuits électroniques avec microcontrôleur et capteurs.",
            link: "https://github.com/Yameogo2004/ELECTRONIQUE-PROJECT"
        }
    ],
    skills: [
        { icon: "fas fa-network-wired", name: "Cisco / VLAN / TCP-IP" },
        { icon: "fas fa-shield-alt", name: "Cybersécurité / VPN / Firewall" },
        { icon: "fas fa-cloud", name: "Cloud / Virtualisation / VMware" },
        { icon: "fab fa-java", name: "Java / Swing" },
        { icon: "fab fa-python", name: "Python / TensorFlow / Keras" },
        { icon: "fas fa-microchip", name: "Arduino / Proteus / IoT" },
        { icon: "fas fa-chart-line", name: "Machine Learning / Deep Learning" },
        { icon: "fas fa-database", name: "MySQL / SQLite" },
        { icon: "fab fa-git-alt", name: "Git / GitHub" }
    ],
    timeline: [
        {
            title: "🎓 Cycle Ingénieur en Réseaux & Télécommunications",
            date: "2023 - Présent",
            description: "École supérieure d'ingénierie · Spécialisation Cybersécurité & IA"
        },
        {
            title: "📜 Certification Cisco CCNA",
            date: "En cours",
            description: "Réseaux d'entreprise, sécurité et automatisation"
        },
        {
            title: "🤖 Deep Learning Specialization",
            date: "2024",
            description: "Réseaux de neurones, CNN, RNN et optimisation avancée"
        }
    ]
};

// Charger les projets
function loadProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    container.innerHTML = '<div class="loading"><i class="fas fa-spinner"></i> Chargement...</div>';
    
    setTimeout(() => {
        container.innerHTML = portfolioData.projects.map(project => `
            <div class="project-item">
                <div class="project-title">
                    <h3>${project.title}</h3>
                    <span class="tech-stack">${project.tech}</span>
                </div>
                <div class="project-desc">${project.description}</div>
                <a href="${project.link}" class="project-link" target="_blank">
                    <i class="fab fa-github"></i> Voir sur GitHub <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `).join('');
    }, 300);
}

// Charger les compétences
function loadSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    
    container.innerHTML = portfolioData.skills.map(skill => `
        <span class="skill-tag">
            <i class="${skill.icon}"></i> ${skill.name}
        </span>
    `).join('');
}

// Charger la timeline
function loadTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container) return;
    
    container.innerHTML = `
        <div class="timeline">
            ${portfolioData.timeline.map(item => `
                <div class="timeline-item">
                    <h3>${item.title}</h3>
                    <div class="timeline-date">${item.date}</div>
                    <div class="timeline-desc">${item.description}</div>
                </div>
            `).join('')}
            <div class="award">
                <i class="fas fa-trophy"></i>
                <div><strong>🏆 Projet primé :</strong> Hackathon IoT & GreenTech 2024</div>
            </div>
        </div>
    `;
}

// Charger les contacts
function loadContact() {
    const container = document.getElementById('contact-container');
    if (!container) return;
    
    container.innerHTML = `
        <div class="contact-info">
            <div class="contact-detail">
                <i class="fas fa-envelope"></i>
                <span>arielyameogo2004@gmail.com</span>
            </div>
            <div class="contact-detail">
                <i class="fas fa-phone-alt"></i>
                <span>+212 604280149 / +226 55623931</span>
            </div>
            <div class="social-links">
                <a href="https://www.linkedin.com/in/ariel-barthélémy-w-yameogo-43a39b332" class="social-btn" target="_blank">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://github.com/Yameogo2004" class="social-btn" target="_blank">
                    <i class="fab fa-github"></i> GitHub
                </a>
            </div>
        </div>
        <hr>
        <p style="margin-top: 1rem;">
            <i class="fas fa-map-marker-alt"></i> Basé entre Maroc & Burkina Faso
        </p>
    `;
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadSkills();
    loadTimeline();
    loadContact();
});
