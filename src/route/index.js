// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  sallary: '600$ в місяць',
  address: 'Україна, м.Львів, вул.Городоцька 22, кв. 22',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },

    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },

    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start
        to work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport
        statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability
        for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 9,
          isTop: false,
        },
        {
          name: 'GIT',
          point: 8,
        },
        {
          name: 'Terminal',
          point: 8,
        },
        {
          name: 'NPM',
          point: 9,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Автомобілі',
          isMain: true,
        },
        {
          name: 'Рибалка',
          isMain: false,
        },
        {
          name: 'Технології',
          isMain: true,
        },
      ],
    },
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'My educations',
    },

    header,

    main: {
      education: [
        {
          name: 'Садок',
          isEnd: true,
        },
        {
          name: 'Школа',
          isEnd: true,
        },
        {
          name: 'Університет',
          isEnd: true,
        },
        {
          name: 'Курс IT-Brains',
          isEnd: false,
        },
      ],
      certifikates: [
        {
          name: 'Курси з англійської',
          id: 11321,
        },
        {
          name: 'Курси програмування',
          id: 22334,
        },
        {
          name: 'Курси верстки HTML+CSS',
          id: 42322,
        },
      ],
    },
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',

    page: {
      title: 'My work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '02.02.2022',
            to: '01.01.2023',
          },
        },

        {
          position: 'Junior Fullstack Developer7777',
          company: {
            name: 'IT Brains-777',
          },
          duration: {
            from: '02.02.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://uk.wikipedia.org/wiki/%D0%A0%D0%B5%D0%B7%D1%8E%D0%BC%D0%B5',
              about:
                'Мета резюме — надати працедавцю короткий виклад своєї професійної діяльності та зацікавити його своєю кандидатурою.',
              stacks: [
                {
                  name: 'React.js',
                  amount: 4,
                },
                {
                  name: 'HTML + CSS',
                },
                {
                  name: 'NodeJS',
                },
              ],
              awards: [
                {
                  name: 'Досягнення та навички',
                },
                {
                  name: 'Досягнення та навички - 777',
                },
              ],
              stackAmount: 10,
              awardAmount: 20,
            },
          ],
        },
      ],
    },
    footer,
  })
})

// ================================================================

router.get('/js', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('js', {
    layout: 'basic',

    name: 'JavaScript',
    description:
      'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
    history: {
      year: 1995,
      founder: 'Brendan Eich',
    },
    types: [
      'Number',
      'String',
      'Boolean',
      'Null',
      'Undefined',
      'Symbol',
      'Object',
    ],
    syntax: {
      variables: ['var', 'let', 'const'],
      functions: ['function'],
      conditionals: ['if', 'else', 'switch'],
      loops: ['for', 'while', 'do-while'],
      classes: ['class'],
    },
    features: [
      'First-class functions',
      'Closures',
      'Dynamic typing',
      'Prototype-based inheritance',
      'Asynchronous programming with Promises and async/await',
      'Modules with import/export statements',
    ],
    libraries: [
      'jQuery',
      'React',
      'Angular',
      'Vue',
      'Node.js',
      'Express.js',
      'Lodash',
      'Moment.js',
    ],
    tools: [
      'Babel',
      'Webpack',
      'ESLint',
      'Jest',
      'Mocha',
      'Chai',
      'Selenium',
      'Cypress',
    ],
    community: [
      {
        name: 'Stack Overflow',
        type: 'forum',
      },
      {
        name: 'JavaScript Weekly',
        type: 'newsletter',
      },
      {
        name: 'The Changelog',
        type: 'podcast',
      },
      {
        name: 'CSS-Tricks',
        type: 'blog',
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
