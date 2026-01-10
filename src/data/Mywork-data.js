// src/data/Mywork-data.js

import project1 from "../assets/Images/imag8.jpeg";
import project2 from "../assets/Images/imag7.jpeg";
import project3 from "../assets/Images/imag3.jpeg";
import project4 from "../assets/Images/imag4.png";
import project5 from "../assets/Images/imag5.jpeg";
import project6 from "../assets/Images/imag6.jpeg";

const myWorkData = [
  {
    id: 1,
    title: "Cyber Threat Detection Platform",
    category: "Cyber Security",
    image: project1,
    description:
      "Real-time threat monitoring and incident detection system using log analysis and security intelligence.",
    technologies: ["SIEM", "Threat Intelligence", "Linux", "Python"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourname/threat-detection",
  },
  {
    id: 2,
    title: "Vulnerability Assessment Tool",
    category: "Cyber Security",
    image: project2,
    description:
      "Automated vulnerability scanning and risk assessment platform with detailed reporting.",
    technologies: ["Nmap", "OWASP", "Node.js", "React"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourname/vulnerability-scanner",
  },
  {
    id: 3,
    title: "Secure Portfolio Website",
    category: "Web Development",
    image: project3,
    description:
      "Modern personal portfolio built with performance optimization and security best practices.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourname/secure-portfolio",
  },
  {
    id: 4,
    title: "Cloud Security Dashboard",
    category: "Cloud Security",
    image: project4,
    description:
      "Monitoring dashboard for cloud infrastructure security, access control, and compliance insights.",
    technologies: ["AWS", "CloudWatch", "React", "API Security"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourname/cloud-security-dashboard",
  },
  {
    id: 5,
    title: "E-Commerce Web Application",
    category: "Web Development",
    image: project5,
    description:
      "Secure and scalable e-commerce platform with authentication, payments, and admin controls.",
    technologies: ["Laravel", "Vue.js", "MySQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourname/ecommerce-app",
  },
  {
    id: 6,
    title: "Incident Response Automation",
    category: "Cyber Security",
    image: project6,
    description:
      "Automated incident response workflows reducing detection and mitigation time.",
    technologies: ["SOAR", "Python", "REST APIs", "Linux"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourname/incident-response",
  },
];

export default myWorkData;
