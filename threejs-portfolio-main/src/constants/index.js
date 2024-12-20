export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  }
];


export const myProjects = [
  {
    title: 'Quantum based Paddy disease classification',
    desc: 'The project uses Quantum Machine Learning (QML) to detect sheath blight and blast diseases in\n' +
      ' paddy crops with 99.4% accuracy by analyzing images of healthy and infected leaves.',
    subdesc:
      ' Technologies: Python, Cirq, Tensorflow, Tensorflow Quantum, keras, OpenCV, Google Colab,\n' +
      ' Pandas, NumPy, Matplotlib, Scikit-learn and Git',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/Paddy.mp4',
    logo: '/assets/Paddy.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.svg',
      },
      {
        id: 2,
        name: 'TensorFlow',
        path: 'assets/tensorflow.svg',
      },
      {
        id: 3,
        name: 'OpenCv',
        path: '/assets/opencv.svg',
      },
      {
        id: 4,
        name: 'Matlab',
        path: '/assets/matlab.svg',
      },
    ],
  },
  {
    title: 'Argon Assault - Realistic Space Escape Game',
    desc: 'Game Argon Assault is a 3D action-adventure game developed in Unity, where players take on the role of a character trying to escape through space while being attacked by hostile aliens. ',
    subdesc:
    'With a mix of exploration and action, the game immerses players in a fast-paced, high-stakes scenario, using Unity’s 3D graphics and physics to create an engaging experience.',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/space.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Unity',
        path: '/assets/unity.svg',
      },
      {
        id: 2,
        name: 'Controller',
        path: 'assets/controller.svg',
      },
    ],
  },
  {
    title: 'DairySync - Dairy Management System',
    desc : 'DairyFlow is a comprehensive Dairy Management System designed for factories to efficiently manage stock, products, and inventory. The system allows users to easily add new dairy products, track stock levels, and delete products as needed.',
    subdesc:
      'With a user-friendly interface, DairyFlow ensures seamless operations, helping factory managers maintain accurate records, prevent stockouts, and streamline the inventory process for smooth production and distribution.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/dbms.mp4',
    logo: '/assets/dbms.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Html',
        path: '/assets/html.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'CSS',
        path: '/assets/css.png',
      },
      {
        id: 4,
        name: 'JS',
        path: '/assets/js.png',
      },
    ],
  },

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

