// подготовить страницу занятия

const lessons = {
  "0718da02-b610-4ee5-8c19-bec71de5c0f0": [
    {
      title: "Введение в React",
      description: "Описание введения",
      id: "99c764f2-dc06-11ea-87d0-0242ac130003",
      comments: [
        {
          date: Date.now(),
          author: "testEmail_1@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_2@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_3@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
      ],
    },
    {
      title: "Самое интересное занятие",
      description: "Описание самого интересного занятия",
      id: "99c76754-dc06-11ea-87d0-0242ac130003",
      comments: [
        {
          date: Date.now(),
          author: "testEmail_1@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_2@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_3@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
      ],
    },
    {
      title: "Самое сложное занятие",
      description: "Описание самого сложного занятия",
      id: "99c76862-dc06-11ea-87d0-0242ac130003",
      comments: [
        {
          date: Date.now(),
          author: "testEmail_1@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_2@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_3@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
      ],
    },
  ],
  "9afbf2eb-e041-4f0b-b1b1-ee402dcc206f": [
    {
      title: "Введение в Svelte",
      description: "Описание введения",
      id: "99c76934-dc06-11ea-87d0-0242ac130003",
      comments: [
        {
          date: Date.now(),
          author: "testEmail_1@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_2@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_3@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
      ],
    },
    {
      title: "Самое интересное занятие",
      description: "Описание самого интересного занятия",
      id: "99c76bbe-dc06-11ea-87d0-0242ac130003",
      comments: [
        {
          date: Date.now(),
          author: "testEmail_1@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_2@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_3@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
      ],
    },
    {
      title: "Самое сложное занятие",
      description: "Описание самого сложного занятия",
      id: "99c76c9a-dc06-11ea-87d0-0242ac130003",
      comments: [
        {
          date: Date.now(),
          author: "testEmail_1@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_2@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_3@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
      ],
    },
  ],
  "c35adbbd-8dab-4e36-884d-854c653af3ca": [
    {
      title: "Введение в NodeJS",
      description: "Описание введения",
      id: "99c76d58-dc06-11ea-87d0-0242ac130003",
      comments: [
        {
          date: Date.now(),
          author: "testEmail_1@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_2@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_3@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
      ],
    },
    {
      title: "Самое интересное занятие",
      description: "Описание самого интересного занятия",
      id: "99c76e2a-dc06-11ea-87d0-0242ac130003",
      comments: [
        {
          date: Date.now(),
          author: "testEmail_1@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_2@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_3@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
      ],
    },
    {
      title: "Самое сложное занятие",
      description: "Описание самого сложного занятия",
      id: "99c76ee8-dc06-11ea-87d0-0242ac130003",
      comments: [
        {
          date: Date.now(),
          author: "testEmail_1@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_2@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_3@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
      ],
    },
  ],
  "045568047-8919-4269-b234-efedfc0cfe15": [
    {
      title: "Введение Vue",
      description: "Описание введения",
      id: "99c76fb0-dc06-11ea-87d0-0242ac130003",
      comments: [
        {
          date: Date.now(),
          author: "testEmail_1@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_2@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_3@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
      ],
    },
    {
      title: "Самое интересное занятие",
      description: "Описание самого интересного занятия",
      id: "99c77208-dc06-11ea-87d0-0242ac130003",
      comments: [
        {
          date: Date.now(),
          author: "testEmail_1@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_2@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_3@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
      ],
    },
    {
      title: "Самое сложное занятие",
      description: "Описание самого сложного занятия",
      id: "99c772e4-dc06-11ea-87d0-0242ac130003",
      comments: [
        {
          date: Date.now(),
          author: "testEmail_1@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_2@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_3@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
      ],
    },
  ],
  "d3d4e091-08ff-4ec4-8603-d7842e3f633f": [
    {
      title: "Введение в Angular",
      description: "Описание введения",
      id: "99c773ac-dc06-11ea-87d0-0242ac130003",
      comments: [
        {
          date: Date.now(),
          author: "testEmail_1@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_2@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_3@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
      ],
    },
    {
      title: "Самое интересное занятие",
      description: "Описание самого интересного занятия",
      id: "99c7746a-dc06-11ea-87d0-0242ac130003",
      comments: [
        {
          date: Date.now(),
          author: "testEmail_1@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_2@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_3@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
      ],
    },
    {
      title: "Самое сложное занятие",
      description: "Описание самого сложного занятия",
      id: "99c77532-dc06-11ea-87d0-0242ac130003",
      comments: [
        {
          date: Date.now(),
          author: "testEmail_1@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_2@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
        {
          date: Date.now(),
          author: "testEmail_3@mail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque, laudantium nam blanditiis enim deleniti mollitia natus minus perferendis iusto sequi sint tempora dolores delectus necessitatibus eaque numquam? Facilis, et.",
        },
      ],
    },
  ],
};

const courses = [
  {
    id: "0718da02-b610-4ee5-8c19-bec71de5c0f0",
    title: "React",
    description: "Описание курса React",
    url: "https://ru.reactjs.org/logo-og.png",
  },
  {
    id: "9afbf2eb-e041-4f0b-b1b1-ee402dcc206f",
    title: "Svelte",
    description: "Описание курса Svelte",
    url: "https://snipcart.com/media/204717/svelte.png",
  },
  {
    id: "c35adbbd-8dab-4e36-884d-854c653af3ca",
    title: "NodeJS",
    description: "Описание курса NodeJs",
    url:
      "https://habrastorage.org/webt/xc/4n/a1/xc4na1sca8xlufsjkj3yyo1z9m8.jpeg",
  },
  {
    id: "045568047-8919-4269-b234-efedfc0cfe15",
    title: "Vue",
    description: "Описание курса Vue",
    url: "https://tuhub.ru/sites/default/files/2018-02/vuejs-logo_0.jpg",
  },
  {
    id: "d3d4e091-08ff-4ec4-8603-d7842e3f633f",
    title: "Angular",
    description: "Описание курса Angular",
    url:
      "https://habrastorage.org/webt/qj/4f/bq/qj4fbq3wwv0pxasvf57drlggaom.jpeg",
  },
];

module.exports = {
  courses,
  lessons,
};
