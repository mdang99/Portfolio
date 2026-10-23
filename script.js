
const english = {
  navAbout: 'About',
  navWork: 'Work',
  navSkills: 'Capabilities',
  navContact: 'Contact',
  heroEyebrow: 'WEB DESIGN · 5+ YEARS OF EXPERIENCE',
  heroTitle: 'Websites that are<br/><em>clear, beautiful</em><br/>and built for growth.',
  heroText: 'DT Team is a web design studio with more than 5 years of experience, focused on modern interfaces, intuitive user experiences, and solutions aligned with each business goal.',
  viewProjects: 'View projects',
  discussProject: 'Discuss a project',
  selectedWork: 'SELECTED WORK',
  experienceLabel: 'Years of experience<br/>in web design &amp; development',
  metricProjects: 'Featured projects',
  metricResponsive: 'Responsive on every device',
  metricCustom: 'Tailored to your needs',
  aboutLabel: '01 / ABOUT',
  aboutTitle: 'From an idea to a website <span>polished and easy to use.</span>',
  aboutText: 'DT Team works with you throughout the entire website process: requirement analysis, content architecture, interface design, feature development, and optimization across devices. Our goal is to balance aesthetics, usability, and brand identity.',
  serviceCorporate: 'Corporate websites',
  serviceLanding: 'Landing pages / Campaigns',
  serviceUi: 'UI/UX & Responsive design',
  serviceCustom: 'Custom websites',
  workLabel: '02 / FEATURED WORK',
  workTitle: 'Selected websites<br/>we have delivered.',
  workText: 'Each project is shaped around its industry, with a focus on clear structure, brand identity, and user experience.',
  mockOutdoor: 'OUTDOOR<br/>ADVERTISING',
  outdoorTypes: 'BILLBOARDS · SIGNAGE · OOH',
  projectOneText: 'A corporate outdoor advertising website with regional billboard listings, detailed location information, Google Maps links, a project gallery, client feedback, and quote requests.',
  tagCorporate: 'Corporate',
  tagLocations: 'Location listing',
  tagResponsive: 'Responsive',
  mockCyber: 'CYBER<br/>SECURITY',
  systemProtected: 'SYSTEM PROTECTED',
  projectTwoText: 'A cybersecurity company website presenting security services, IT consulting, data administration, incident monitoring, and enterprise security solutions.',
  tagCyber: 'Cybersecurity',
  tagSolutions: 'Solutions',
  mockPet: 'PET<br/>LOOKUP',
  searchId: 'Enter ID: SM01…',
  projectThreeText: 'An online pet-profile lookup system using unique identifiers such as SM01 and SM02, enabling fast information access and simpler data management.',
  tagWebApp: 'Web app',
  tagSearch: 'Search system',
  tagLookup: 'Data lookup',
  singaporeAsia: 'SINGAPORE · ASIA',
  mockEvents: 'EVENTS<br/>WITH IMPACT',
  projectFourText: 'A brand website for an event company in the Asian market, using a minimal visual direction to highlight its positioning and make client contact effortless.',
  tagEvents: 'Events',
  tagMinimal: 'Minimal',
  tagBrand: 'Brand website',
  skillsLabel: '03 / CAPABILITIES',
  skillsTitle: 'Design is not only about looking good,<br/><span>but also about working effectively.</span>',
  skillsText: 'DT Team combines design thinking, user experience, and front-end development to create websites with clear structure, a professional presence, fast loading, and room to scale with the business.',
  yearsExperience: 'Years of hands-on experience',
  capStrategy: 'Strategy & User Experience',
  capStrategyText: 'We clarify goals, organize content, and map the user journey before designing the interface.',
  tagArchitecture: 'Information architecture',
  tagFlow: 'User flow',
  tagWireframe: 'Wireframe',
  capVisual: 'UI & Visual Design',
  capVisualText: 'We build a consistent, modern visual system aligned with the company’s brand positioning.',
  tagUiSystem: 'UI system',
  tagTypography: 'Typography',
  tagBrandVisual: 'Brand visuals',
  capDevelopment: 'Development & Optimization',
  capDevelopmentText: 'We build responsive interfaces, refine interactions, and optimize each website for reliable performance.',
  tagFrontend: 'Front-end',
  tagPerformance: 'Performance',
  whyTitle: 'Why choose us?',
  whyCount: '3 REASONS',
  whyGoalTitle: 'Focused on business goals',
  whyGoalText: 'Every design decision is aligned with the right audience and your conversion goals.',
  whyProcessTitle: 'One team, end to end',
  whyProcessText: 'Strategy, interface design, development, and handover follow one clear process.',
  whyScaleTitle: 'Built for long-term growth',
  whyScaleText: 'Fast, responsive websites with a structure that is ready to scale.',
  workflowTitle: 'Our process',
  fourSteps: '4 STEPS',
  phaseDiscover: 'DISCOVER',
  phaseShape: 'SHAPE',
  phaseBuild: 'BUILD',
  phaseLaunch: 'LAUNCH',
  stepAnalyze: 'Requirement analysis',
  stepDesign: 'Interface design',
  stepDevelop: 'Website development',
  stepDeliver: 'Testing & handover',
  contactLabel: '04 / CONTACT',
  contactTitle: 'Let’s start<br/>your next project.',
  contactText: 'DT Team is ready to discuss corporate websites, landing pages, and custom-built web systems.',
  emailLabel: 'EMAIL',
  phoneOne: 'PHONE 01',
  phoneTwo: 'PHONE 02',
  sendEmail: 'Send email',
  callTeam: 'Call DT Team',
  contactNote: '“Send email” opens a Gmail compose window. You can also select the email address or phone numbers above directly.',
  copyright: '© 2026 DT Team. All rights reserved.',
  backToTop: 'Back to top ↑',
  homeLabel: 'Home',
  navLabel: 'Main navigation',
  menuLabel: 'Open menu'
};

const textElements = [...document.querySelectorAll('[data-i18n]')];
const htmlElements = [...document.querySelectorAll('[data-i18n-html]')];
const ariaElements = [...document.querySelectorAll('[data-i18n-aria-label]')];
const vietnamese = {};

textElements.forEach((element) => { vietnamese[element.dataset.i18n] = element.textContent.trim(); });
htmlElements.forEach((element) => { vietnamese[element.dataset.i18nHtml] = element.innerHTML.trim(); });
ariaElements.forEach((element) => { vietnamese[element.dataset.i18nAriaLabel] = element.getAttribute('aria-label'); });

const pageMeta = {
  vi: {
    title: 'DT Team — Hồ sơ năng lực thiết kế website',
    description: 'Hồ sơ năng lực của DT Team với hơn 5 năm kinh nghiệm thiết kế và phát triển website doanh nghiệp, trang đích và hệ thống web theo yêu cầu.',
    switchLabel: 'Chuyển sang tiếng Anh',
    emailSubject: 'Trao đổi dự án website với DT Team'
  },
  en: {
    title: 'DT Team — Web Design Portfolio',
    description: 'DT Team portfolio with more than 5 years of experience designing and developing corporate websites, landing pages, and custom web systems.',
    switchLabel: 'Switch to Vietnamese',
    emailSubject: 'Discuss a website project with DT Team'
  }
};

const languageToggle = document.querySelector('.lang-toggle');
const descriptionMeta = document.querySelector('meta[name="description"]');

function setLanguage(locale, persist = true) {
  const language = locale === 'en' ? 'en' : 'vi';
  const translations = language === 'en' ? english : vietnamese;

  textElements.forEach((element) => {
    const value = translations[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  htmlElements.forEach((element) => {
    const value = translations[element.dataset.i18nHtml];
    if (value !== undefined) element.innerHTML = value;
  });
  ariaElements.forEach((element) => {
    const value = translations[element.dataset.i18nAriaLabel];
    if (value !== undefined) element.setAttribute('aria-label', value);
  });

  document.documentElement.lang = language;
  document.title = pageMeta[language].title;
  descriptionMeta?.setAttribute('content', pageMeta[language].description);
  languageToggle?.setAttribute('aria-label', pageMeta[language].switchLabel);
  if (languageToggle) {
    languageToggle.querySelector('.lang-current').textContent = language.toUpperCase();
    languageToggle.querySelector('.lang-next').textContent = language === 'vi' ? 'EN' : 'VI';
  }

  const mailtoLink = document.querySelector('a[href^="mailto:"]');
  if (mailtoLink) mailtoLink.href = `mailto:nvmdang99@gmail.com?subject=${encodeURIComponent(pageMeta[language].emailSubject)}`;
  const gmailLink = document.querySelector('a[href*="mail.google.com"]');
  if (gmailLink) {
    const gmailUrl = new URL(gmailLink.href);
    gmailUrl.searchParams.set('su', pageMeta[language].emailSubject);
    gmailLink.href = gmailUrl.toString();
  }

  if (persist) {
    try { localStorage.setItem('dt-language', language); } catch {}
    const pageUrl = new URL(window.location.href);
    pageUrl.searchParams.set('lang', language);
    history.replaceState(null, '', pageUrl);
  }
}

let initialLanguage = 'vi';
const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
if (requestedLanguage === 'vi' || requestedLanguage === 'en') {
  initialLanguage = requestedLanguage;
} else {
  try { initialLanguage = localStorage.getItem('dt-language') || 'vi'; } catch {}
}
setLanguage(initialLanguage, false);

languageToggle?.addEventListener('click', () => {
  setLanguage(document.documentElement.lang === 'vi' ? 'en' : 'vi');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.main-nav');

menuBtn?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

