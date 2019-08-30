const howWeHelp = [
  {
    title: 'For Job Seekers',
    description: 'AI-powered job search',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
  {
    title: 'For Startups',
    description: 'Referal-based growth',
    image: 'https://avatarfiles.alphacoders.com/160/thumb-160477.png',
  },
  {
    title: 'For Scale-ups',
    description: 'Team collaboration, scaled',
    image: 'https://i.redd.it/u457h81ccm831.jpg',
  },
  {
    title: 'For Enterprise',
    description: 'Highly-integrated & custom',
    image: 'https://pbs.twimg.com/profile_images/849259778803195904/5cmUYDBV.jpg',
  },
];

const jobs = [
  {
    area: 'dev',
    title: 'Database Administrator',
    company: 'Wikimedia Foundation',
    type: 'Employee/colleague',
    salary: '80k - 90k',
    members: [
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png',
        profile: 'https://www.torre.co/home',
      },
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_randomsuburbguy_170104_0514_qxi74z8.png',
        profile: 'https://www.torre.co/home',
      },
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_random_180527_1151_2bcb7h9.png',
        profile: 'https://www.torre.co/home',
      },
    ],
    rank: '??',
    expires: new Date(Date.now() + 1000*60*60*20),
    question: 'What benefits do you have within the U.S.?',
    template: 'https://moneyinc.com/wp-content/uploads/2017/04/employee-750x422.jpg',
    logo: 'https://cdn1.designhill.com/cache/uploads/pagefile/1554116576-13511971185ca1efe0bcd5a0-26602492-500x500.jpg?ver=2.10.26',
  },
  {
    area: 'dev',
    title: 'Go Developer',
    company: 'X-Team',
    type: 'Freelance/contractor',
    salary: '70k - 140k',
    members: [
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png',
        profile: 'https://www.torre.co/home',
      },
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_randomsuburbguy_170104_0514_qxi74z8.png',
        profile: 'https://www.torre.co/home',
      },
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_random_180527_1151_2bcb7h9.png',
        profile: 'https://www.torre.co/home',
      },
    ],
    rank: '??',
    expires: new Date(Date.now() + 1000*60*60*24*2),
    question: 'What kind of websites do you have?',
    template: 'https://www.incimages.com/uploaded_files/image/1940x900/getty_846275012_2000133420009280149_365682.jpg',
    logo: 'https://image.freepik.com/vetores-gratis/modelo-de-logotipo-de-gradiente-com-forma-abstrata_23-2148204210.jpg',
  },
  {
    area: 'other',
    title: 'Director of sales',
    company: 'Close.io',
    type: 'Employee/colleague',
    salary: '80k - 100k',
    members: [
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png',
        profile: 'https://www.torre.co/home',
      },
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_randomsuburbguy_170104_0514_qxi74z8.png',
        profile: 'https://www.torre.co/home',
      },
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_random_180527_1151_2bcb7h9.png',
        profile: 'https://www.torre.co/home',
      },
    ],
    rank: '??',
    expires: new Date(Date.now() + 1000*60*60*24*11),
    question: 'Can you explain something?',
    template: 'http://images.ctfassets.net/oartd9t7ehdh/5onsQR9ESAeYKy0ieuO2ey/f5964e6b7b6079c0a77893b0d5cdb93c/620x346-Hard-Work-Makes-People-Happy.jpg',
    logo: 'http://www.uidownload.com/files/517/657/114/colored-company-logos-creative-design-02.jpg',
  },
  {
    area: 'other',
    title: 'Strategic Customer Engagement',
    company: 'Amazon Web Services',
    type: 'Employee/colleague',
    salary: '150k - 160k',
    members: [
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png',
        profile: 'https://www.torre.co/home',
      },
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_randomsuburbguy_170104_0514_qxi74z8.png',
        profile: 'https://www.torre.co/home',
      },
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_random_180527_1151_2bcb7h9.png',
        profile: 'https://www.torre.co/home',
      },
    ],
    rank: '??',
    expires: new Date(Date.now() + 1000*60*60*24*20),
    question: 'I\'m located in New Jersey, can I apply?',
    template: 'http://media.bizj.us/view/img/6487132/thinkstockphotos-178598388*750xx2122-1196-0-0.jpg',
    logo: 'https://cdn.vox-cdn.com/thumbor/yuQrQ__v1qgvzzJE9gezEM8srhA=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/65043804/morning_company.0.jpg',
  },
  {
    area: 'dev',
    title: 'Junior Developer',
    company: 'Voice123',
    type: 'Employee/colleague',
    salary: '36k',
    members: [
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png',
        profile: 'https://www.torre.co/home',
      },
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_randomsuburbguy_170104_0514_qxi74z8.png',
        profile: 'https://www.torre.co/home',
      },
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_random_180527_1151_2bcb7h9.png',
        profile: 'https://www.torre.co/home',
      },
    ],
    rank: '??',
    expires: new Date(Date.now() + 1000*60*60*24*5),
    question: 'Flexible vacation time?',
    template: 'https://st2.depositphotos.com/1325771/11552/i/950/depositphotos_115527600-stock-photo-portrait-of-happy-young-people.jpg',
    logo: 'http://www.celebritypunchout.com/wp-content/uploads/2019/06/business-company-logo-template-buy-design-beautiful-buisness-trending-6.jpg',
  },
  {
    area: 'other',
    title: 'Desarrollador',
    company: 'RAPPI',
    type: 'Employee/colleague',
    salary: '30k - 70k',
    members: [
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png',
        profile: 'https://www.torre.co/home',
      },
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_randomsuburbguy_170104_0514_qxi74z8.png',
        profile: 'https://www.torre.co/home',
      },
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_random_180527_1151_2bcb7h9.png',
        profile: 'https://www.torre.co/home',
      },
    ],
    rank: '??',
    expires: new Date(Date.now() + 1000*60*60*22),
    question: 'How are you planning to achieve that goal?',
    template: 'http://sites.psu.edu/siowfa15/wp-content/uploads/sites/29639/2015/10/13622937-Happy-young-business-people-working-together-Stock-Photo.jpg',
    logo: 'https://image.shutterstock.com/image-vector/kk-initial-logo-company-name-600w-680692042.jpg',
  },
  {
    area: 'dev',
    title: 'Senior Developer',
    company: 'Mixmax',
    type: 'Employee/colleague',
    salary: '150k - 160k',
    members: [
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png',
        profile: 'https://www.torre.co/home',
      },
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_randomsuburbguy_170104_0514_qxi74z8.png',
        profile: 'https://www.torre.co/home',
      },
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_random_180527_1151_2bcb7h9.png',
        profile: 'https://www.torre.co/home',
      },
    ],
    rank: '??',
    expires: new Date(Date.now() + 1000*60*43),
    question: 'What would be the greatest challenge?',
    template: 'http://www.asianefficiency.com/wp-content/uploads/2017/08/Happy-people-working-e1504013336258.jpg',
    logo: 'http://www.uidownload.com/files/517/657/114/colored-company-logos-creative-design-02.jpg',
  },
  {
    area: 'dev',
    title: 'Full-stack Developer',
    company: 'Agency Analytics',
    type: 'Employee/colleague',
    salary: '100k',
    members: [
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png',
        profile: 'https://www.torre.co/home',
      },
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_randomsuburbguy_170104_0514_qxi74z8.png',
        profile: 'https://www.torre.co/home',
      },
      {
        avatar: 'https://pickaface.net/gallery/avatar/unr_random_180527_1151_2bcb7h9.png',
        profile: 'https://www.torre.co/home',
      },
    ],
    rank: '??',
    expires: new Date(Date.now() + 1000*60*60*7),
    question: 'What college/university degree is required?',
    template: 'https://content.fortune.com/wp-content/uploads/2014/11/landing-a-job.jpg',
    logo: 'https://image.freepik.com/vetores-gratis/modelo-de-logotipo-de-gradiente-com-forma-abstrata_23-2148204210.jpg',
  },
];

const people = [
  {
    name: 'Weird Green',
    profession: ['Full-stack Developers', 'Front-end Developers'],
    position: 'HR Consultant',
    upVotes: '230',
    tag: 'HR',
    tagVotes: '1345',
    openTo: 'Full-time and/or part-time employment and freelance gigs',
    avatar: 'https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png',
  },
  {
    name: 'Pseudo Ozzy',
    profession: ['Full-stack Developers', 'Back-end Developers'],
    position: 'Digital Marketing Consultant',
    upVotes: '1400',
    tag: 'Content Marketing',
    tagVotes: '345',
    openTo: 'Full-time and/or part-time employment',
    avatar: 'https://pickaface.net/gallery/avatar/Opi51e65b61dcd54.png',
  },
  {
    name: 'OnePunch Man',
    profession: ['Other', 'Back-end Developers'],
    position: 'Software Developer and Consultant',
    upVotes: '1000',
    tag: 'Android',
    tagVotes: '34543',
    openTo: 'Full-time and/or part-time employment and freelance gigs',
    avatar: 'https://pickaface.net/gallery/avatar/unr_randomsuburbguy_170104_0514_qxi74z8.png',
  },
  {
    name: 'Little Pretty',
    profession: ['Other', 'Dev Ops Enginners'],
    position: 'Award Winning Consultant',
    upVotes: '8700',
    tag: 'Promotions and Marketing',
    tagVotes: '123123',
    openTo: 'Freelance gigs',
    avatar: 'https://i.pinimg.com/originals/38/a7/1f/38a71f1048bd022158b2b094f652156a.png',
  },
  {
    name: 'Regular Dude',
    profession: ['Dev Ops Enginners', 'Front-end Developers'],
    position: 'Regular Consultant',
    upVotes: '200',
    tag: 'Regular',
    tagVotes: '657',
    openTo: 'Regular stuff',
    avatar: 'https://pickaface.net/gallery/avatar/unr_random_180527_1151_2bcb7h9.png',
  },
];

const professions = [
  {
    title: 'Full-stack Developers',
    anchor: 'https://torre.co/search?people.skill=55531',
  },
  {
    title: 'Front-end Developers',
    anchor: 'https://torre.co/search?people.skill=55515',
  },
  {
    title: 'Back-end Developers',
    anchor: 'https://torre.co/search?people.skill=55208',
  },
  {
    title: 'Dev Ops Enginners',
    anchor: 'https://torre.co/search?people.skill=40852',
  },
  {
    title: 'Other',
    anchor: 'https://torre.co/search',
  },
];
export { howWeHelp, jobs, people, professions };
