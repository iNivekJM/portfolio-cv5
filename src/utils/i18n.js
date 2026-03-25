import profileEs from '../../data/profile.json';
import profileEn from '../../data/profile_en.json';
import experienceEs from '../../data/experience.json';
import experienceEn from '../../data/experience_en.json';
import educationEs from '../../data/education.json';
import educationEn from '../../data/education_en.json';
import skillsEs from '../../data/skills.json';
import skillsEn from '../../data/skills_en.json';
import projectsEs from '../../data/projects.json';
import projectsEn from '../../data/projects_en.json';

export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      education: 'Educación',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      cta: 'Ver más',
      scrollDown: 'Scroll hacia abajo',
    },
    about: {
      title: 'Sobre mí',
      bioTitle: 'Biografía',
    },
    experience: {
      title: 'Experiencia Laboral',
      present: 'Presente',
      achievements: 'Logros',
    },
    education: {
      title: 'Educación & Certificaciones',
    },
    skills: {
      title: 'Habilidades Técnicas',
    },
    projects: {
      title: 'Proyectos Destacados',
      repo: 'Repositorio',
      live: 'Sitio Web',
      techs: 'Tecnologías',
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Interesado en trabajar juntos?',
      description: 'Actualmente estoy abierto a nuevas oportunidades. Si estás buscando un desarrollador con experiencia para tu equipo o tienes alguna pregunta, no dudes en contactarme.',
      email: 'Correo',
      phone: 'Teléfono',
      location: 'Ubicación',
      social: 'Redes Sociales',
      copyEmail: 'Copiar correo',
      emailCopied: '¡Correo copiado!',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      built: 'Construido con',
      and: 'y',
    },
    common: {
      darkMode: 'Modo oscuro',
      lightMode: 'Modo claro',
      language: 'Idioma',
    }
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hi, I\'m',
      cta: 'Learn more',
      scrollDown: 'Scroll down',
    },
    about: {
      title: 'About Me',
      bioTitle: 'Biography',
    },
    experience: {
      title: 'Work Experience',
      present: 'Present',
      achievements: 'Achievements',
    },
    education: {
      title: 'Education & Certifications',
    },
    skills: {
      title: 'Technical Skills',
    },
    projects: {
      title: 'Featured Projects',
      repo: 'Repository',
      live: 'Website',
      techs: 'Technologies',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Interested in working together?',
      description: 'I\'m currently open to new opportunities. If you\'re looking for an experienced developer for your team or have any questions, feel free to contact me.',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      social: 'Social Media',
      copyEmail: 'Copy email',
      emailCopied: 'Email copied!',
    },
    footer: {
      rights: 'All rights reserved.',
      built: 'Built with',
      and: 'and',
    },
    common: {
      darkMode: 'Dark mode',
      lightMode: 'Light mode',
      language: 'Language',
    }
  }
};

export const data = {
  es: {
    profile: profileEs,
    experience: experienceEs,
    education: educationEs,
    skills: skillsEs,
    projects: projectsEs,
  },
  en: {
    profile: profileEn,
    experience: experienceEn,
    education: educationEn,
    skills: skillsEn,
    projects: projectsEn,
  }
};

export const locales = ['es', 'en'];
export const defaultLocale = 'es';
