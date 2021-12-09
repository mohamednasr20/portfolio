import screenshot1 from '../../assests/screenshot1.png';
import screenshot2 from '../../assests/screenshot2.png';
import screenshot3 from '../../assests/screenshot3.png';

export const projectsData = [
  {
    id: '1',
    title: 'Oval Real Estate',
    description:
      'Real Estate website for buying and selling houses Any user can search for properties and see any property detailes registerd users only can save searches and save properties.',
    imgUrl: screenshot1,
    technology: ['React', 'Redux', 'Mui', 'Firebase'],
    codeLink: 'https://github.com/mohamednasr20/Oval_Real_Estate',
    liveLink: 'https://oval-real-estate.web.app',
  },
  {
    id: '2',
    title: 'Invoices App',
    description:
      'This full-stack invoicing application the user can Create, read, update, and delete invoices, Receive form validations when trying to create/edit an invoice, Save draft invoices.',
    imgUrl: screenshot3,
    technology: ['React', 'Redux', 'Mui', 'Express', 'MongoDB'],
    codeLink: 'https://github.com/mohamednasr20/invoce_app_mern',
    liveLink: 'https://invoiceweb.netlify.app',
  },

  {
    id: '3',
    title: 'Arch Studio',
    description:
      'responsive Multi pages web application built with React and React BootStrap, has four pages home, about, portfolio, and contact page',
    imgUrl: screenshot2,
    technology: ['React', 'CSS', 'Bootstrap'],
    codeLink: 'https://github.com/mohamednasr20/Arch_Studio',
    liveLink: 'https://archapp.netlify.app',
  },
];
