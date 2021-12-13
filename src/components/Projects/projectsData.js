import screenshot1 from '../../assests/screenshot1.png';
import screenshot2 from '../../assests/screenshot2.png';
import screenshot3 from '../../assests/screenshot3.png';

export const projectsData = [
  {
    id: '1',
    title: 'Oval Real Estate',
    description:
      'This application is a real estate website where users can come to find real estate to buy or rent.',
    imgUrl: screenshot1,
    technology: ['React', 'Redux', 'Material-Ui', 'Firebase', 'Google-map'],
    codeLink: 'https://github.com/mohamednasr20/Oval_Real_Estate',
    liveLink: 'https://oval-real-estate.web.app',
  },
  {
    id: '2',
    title: 'Invoices App',
    description:
      'A MERN stack application, performing CURD operations to submit and retrive user requests.',
    imgUrl: screenshot3,
    technology: ['React', 'Redux', 'Material-Ui', 'Express', 'MongoDB', 'JWT'],
    codeLink: 'https://github.com/mohamednasr20/invoce_app_mern',
    liveLink: 'https://invoiceweb.netlify.app',
  },

  {
    id: '3',
    title: 'Arch Studio',
    description:
      'responsive Multi pages SBA web application, built using React.',
    imgUrl: screenshot2,
    technology: ['React', 'CSS', 'Bootstrap', 'Leaflet'],
    codeLink: 'https://github.com/mohamednasr20/Arch_Studio',
    liveLink: 'https://archapp.netlify.app',
  },
];
