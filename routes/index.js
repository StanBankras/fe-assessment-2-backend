const express = require('express');
const router = express.Router();

const users = [
  {
    id: '5e676b813cd15e48d4114d80',
    firstName: 'Frank',
    lastName: 'Visser',
    gender: 'm',
    age: '28',
    picture: 'https://thumbs.dreamstime.com/z/portrait-young-male-teacher-background-school-blackboard-teacher-s-day-knowledge-day-back-to-school-study-159722306.jpg',
    matches: [
      '5e6f453502bf8547f8dee3d0',
      '5e6f45a702bf8547f8dee3d1',
      '5e6f45ce02bf8547f8dee3d2',
      '5e6f460d02bf8547f8dee3d3',
      '5e6f46a802bf8547f8dee3d4',
      '5e6f46d302bf8547f8dee3d5',
      '5e6f472102bf8547f8dee3d6',
      '5e6f474d02bf8547f8dee3d7'
    ],
    likedPersons: [
      '5e6f460d02bf8547f8dee3d3',
      '5e6f453502bf8547f8dee3d0',
      '5e6f45a702bf8547f8dee3d1',
      '5e6f45ce02bf8547f8dee3d2',
      '5e6f46a802bf8547f8dee3d4'
    ],
    chats: [0]
  },
  {
    id: '5e6f3d2f02bf8547f8dee3c9',
    firstName: 'Mike',
    lastName: 'de Jong',
    gender: 'm',
    age: '19',
    picture: 'https://thumbs.dreamstime.com/z/marmaris-turkey-may-male-tour-guide-microphone-bus-evening-time-marmaris-turkey-may-male-tour-guide-120829295.jpg',
    matches: [
      '5e6f453502bf8547f8dee3d0',
      '5e6f45a702bf8547f8dee3d1',
      '5e6f45ce02bf8547f8dee3d2',
      '5e6f460d02bf8547f8dee3d3',
      '5e6f46a802bf8547f8dee3d4',
      '5e6f46d302bf8547f8dee3d5',
      '5e6f472102bf8547f8dee3d6',
      '5e6f474d02bf8547f8dee3d7',
      ''
    ],
    likedPersons: [
      '5e6f453502bf8547f8dee3d0'
    ],
    chats: []
  },
  {
    id: '5e6f3f5d02bf8547f8dee3ca',
    firstName: 'Yari',
    lastName: 'Molenaar',
    gender: 'm',
    age: '26',
    picture: 'https://thumbs.dreamstime.com/z/man-men-barbershop-concept-mens-sensuality-sexy-guy-casual-style-macho-man-grunge-background-male-fashion-man-men-164531354.jpg',
    matches: [
      '5e6f453502bf8547f8dee3d0',
      '5e6f45a702bf8547f8dee3d1',
      '5e6f45ce02bf8547f8dee3d2',
      '5e6f460d02bf8547f8dee3d3',
      '5e6f46a802bf8547f8dee3d4',
      '5e6f46d302bf8547f8dee3d5',
      '5e6f474d02bf8547f8dee3d7',
      '5e6f472102bf8547f8dee3d6'
    ],
    likedPersons: [],
    chats: []
  },
  {
    id: '5e6f406c02bf8547f8dee3cb',
    firstName: 'Ahaan',
    lastName: 'Aarav',
    gender: 'm',
    age: '25',
    picture: 'https://thumbs.dreamstime.com/z/young-handsome-indin-man-wearing-black-shirt-sunglasses-sitting-beach-white-dog-goa-beach-happy-young-159364176.jpg',
    matches: [
      '5e6f453502bf8547f8dee3d0',
      '5e6f45a702bf8547f8dee3d1',
      '5e6f45ce02bf8547f8dee3d2',
      '5e6f460d02bf8547f8dee3d3',
      '5e6f46a802bf8547f8dee3d4',
      '5e6f46d302bf8547f8dee3d5',
      '5e6f472102bf8547f8dee3d6',
      '5e6f474d02bf8547f8dee3d7'
    ],
    likedPersons: [],
    chats: []
  },
  {
    id: '5e6f40ef02bf8547f8dee3cc',
    firstName: 'Jonathan',
    lastName: 'Aalders',
    gender: 'm',
    age: '21',
    picture: 'https://thumbs.dreamstime.com/z/barbershop-advertising-concept-businessman-serious-face-isolated-white-background-man-beard-holds-razor-macho-150268463.jpg',
    matches: [
      '5e6f453502bf8547f8dee3d0',
      '5e6f45a702bf8547f8dee3d1',
      '5e6f45ce02bf8547f8dee3d2',
      '5e6f460d02bf8547f8dee3d3',
      '5e6f46a802bf8547f8dee3d4',
      '5e6f46d302bf8547f8dee3d5',
      '5e6f472102bf8547f8dee3d6',
      '5e6f474d02bf8547f8dee3d7'
    ],
    likedPersons: [],
    chats: []
  },
  {
    id: '5e6f411702bf8547f8dee3cd',
    firstName: 'Gijs',
    lastName: 'Vogelzang',
    gender: 'm',
    age: '29',
    picture: 'https://thumbs.dreamstime.com/z/i-do-not-know-what-to-choose-concept-european-looking-red-hair-man-years-glasses-white-t-shirt-does-not-know-i-do-not-163522564.jpg',
    matches: [
      '5e6f453502bf8547f8dee3d0',
      '5e6f45a702bf8547f8dee3d1',
      '5e6f45ce02bf8547f8dee3d2',
      '5e6f460d02bf8547f8dee3d3',
      '5e6f46a802bf8547f8dee3d4',
      '5e6f46d302bf8547f8dee3d5',
      '5e6f472102bf8547f8dee3d6',
      '5e6f474d02bf8547f8dee3d7'
    ],
    likedPersons: [],
    chats: []
  },
  {
    id: '5e6f41de02bf8547f8dee3ce',
    firstName: 'Willem',
    lastName: 'Nieuwkoop',
    gender: 'm',
    age: {
      $numberInt: '23'
    },
    picture: 'https://thumbs.dreamstime.com/z/young-years-old-man-tunnel-skateboard-ambient-lig-young-years-old-man-tunnel-skateboard-ambient-light-image-image-126231785.jpg',
    matches: [
      '5e6f453502bf8547f8dee3d0',
      '5e6f45a702bf8547f8dee3d1',
      '5e6f45ce02bf8547f8dee3d2',
      '5e6f460d02bf8547f8dee3d3',
      '5e6f46a802bf8547f8dee3d4',
      '5e6f46d302bf8547f8dee3d5',
      '5e6f472102bf8547f8dee3d6',
      '5e6f474d02bf8547f8dee3d7'
    ],
    likedPersons: [],
    chats: []
  },
  {
    id: '5e6f420302bf8547f8dee3cf',
    firstName: 'Joran',
    lastName: 'Haan',
    gender: 'm',
    age: {
      $numberInt: '20'
    },
    picture: 'https://thumbs.dreamstime.com/z/one-young-man-years-old-laying-bench-gym-indoors-one-young-man-years-old-laying-bench-gym-indoors-holding-two-dumbbells-122725938.jpg',
    matches: [
      '5e6f453502bf8547f8dee3d0',
      '5e6f45a702bf8547f8dee3d1',
      '5e6f45ce02bf8547f8dee3d2',
      '5e6f460d02bf8547f8dee3d3',
      '5e6f46a802bf8547f8dee3d4',
      '5e6f46d302bf8547f8dee3d5',
      '5e6f472102bf8547f8dee3d6',
      '5e6f474d02bf8547f8dee3d7'
    ],
    likedPersons: [
      '5e6f474d02bf8547f8dee3d7',
      '5e6f472102bf8547f8dee3d6',
      '5e6f46a802bf8547f8dee3d4',
      '5e6f45a702bf8547f8dee3d1',
      '5e6f453502bf8547f8dee3d0'
    ],
    chats: []
  },
  {
    id: '5e6f453502bf8547f8dee3d0',
    firstName: 'Isa',
    lastName: 'de Winter',
    gender: 'f',
    age: '19',
    picture: 'https://thumbs.dreamstime.com/z/lovely-girl-outdoors-portrait-cute-female-model-face-blue-water-background-lovely-girl-outdoors-portrait-cute-female-model-face-139093133.jpg',
    matches: [
      '5e676b813cd15e48d4114d80',
      '5e6f3d2f02bf8547f8dee3c9',
      '5e6f3f5d02bf8547f8dee3ca',
      '5e6f406c02bf8547f8dee3cb',
      '5e6f40ef02bf8547f8dee3cc',
      '5e6f411702bf8547f8dee3cd',
      '5e6f41de02bf8547f8dee3ce',
      '5e6f420302bf8547f8dee3cf'
    ],
    likedPersons: [
      '5e676b813cd15e48d4114d80',
      '5e6f3d2f02bf8547f8dee3c9'
    ],
    chats: [0]
  },
  {
    id: '5e6f45a702bf8547f8dee3d1',
    firstName: 'Julia',
    lastName: 'Vormer',
    gender: 'f',
    age: '23',
    picture: 'https://thumbs.dreamstime.com/z/pretty-woman-outdoors-beautiful-female-model-organic-cotton-sweater-green-grass-background-146091910.jpg',
    matches: [
      '5e676b813cd15e48d4114d80',
      '5e6f3d2f02bf8547f8dee3c9',
      '5e6f3f5d02bf8547f8dee3ca',
      '5e6f406c02bf8547f8dee3cb',
      '5e6f40ef02bf8547f8dee3cc',
      '5e6f411702bf8547f8dee3cd',
      '5e6f41de02bf8547f8dee3ce',
      '5e6f420302bf8547f8dee3cf'
    ],
    likedPersons: [],
    chats: []
  },
  {
    id: '5e6f45ce02bf8547f8dee3d2',
    firstName: 'Manon',
    lastName: 'Kruijswijk',
    gender: 'f',
    age: '25',
    picture: 'https://thumbs.dreamstime.com/z/fashion-female-model-posing-yellow-jacket-big-glasses-lit-city-centre-lights-night-street-womenswear-stylish-140406861.jpg',
    matches: [
      '5e676b813cd15e48d4114d80',
      '5e6f3d2f02bf8547f8dee3c9',
      '5e6f3f5d02bf8547f8dee3ca',
      '5e6f406c02bf8547f8dee3cb',
      '5e6f40ef02bf8547f8dee3cc',
      '5e6f411702bf8547f8dee3cd',
      '5e6f41de02bf8547f8dee3ce',
      '5e6f420302bf8547f8dee3cf'
    ],
    likedPersons: [],
    chats: []
  },
  {
    id: '5e6f460d02bf8547f8dee3d3',
    firstName: 'Joëlle',
    lastName: 'Jonkheer',
    gender: 'f',
    age: '27',
    picture: 'https://thumbs.dreamstime.com/z/beauty-black-skin-woman-african-ethnic-female-face-young-african-american-model-long-afro-hair-smiling-model-isolated-163819588.jpg',
    matches: [
      '5e676b813cd15e48d4114d80',
      '5e6f3d2f02bf8547f8dee3c9',
      '5e6f3f5d02bf8547f8dee3ca',
      '5e6f406c02bf8547f8dee3cb',
      '5e6f40ef02bf8547f8dee3cc',
      '5e6f411702bf8547f8dee3cd',
      '5e6f41de02bf8547f8dee3ce',
      '5e6f420302bf8547f8dee3cf'
    ],
    likedPersons: [],
    chats: []
  },
  {
    id: '5e6f46a802bf8547f8dee3d4',
    firstName: 'Rosa',
    lastName: 'Bruijns',
    gender: 'f',
    age: '28',
    picture: 'https://thumbs.dreamstime.com/z/happy-autumn-woman-raising-hands-over-sunset-sky-enjoying-life-nature-beauty-female-field-looking-sun-silhouette-girl-158561957.jpg',
    matches: [
      '5e676b813cd15e48d4114d80',
      '5e6f3d2f02bf8547f8dee3c9',
      '5e6f3f5d02bf8547f8dee3ca',
      '5e6f406c02bf8547f8dee3cb',
      '5e6f40ef02bf8547f8dee3cc',
      '5e6f411702bf8547f8dee3cd',
      '5e6f41de02bf8547f8dee3ce',
      '5e6f420302bf8547f8dee3cf'
    ],
    likedPersons: [
      '5e676b813cd15e48d4114d80',
      '5e6f3d2f02bf8547f8dee3c9',
      '5e6f3f5d02bf8547f8dee3ca'
    ],
    chats: []
  },
  {
    id: '5e6f46d302bf8547f8dee3d5',
    firstName: 'Monique',
    lastName: 'van de Horn',
    gender: 'f',
    age: '27',
    picture: 'https://thumbs.dreamstime.com/z/children-family-celebration-concept-adorable-female-kni-children-family-celebration-concept-adorable-female-knitted-125192779.jpg',
    matches: [
      '5e676b813cd15e48d4114d80',
      '5e6f3d2f02bf8547f8dee3c9',
      '5e6f3f5d02bf8547f8dee3ca',
      '5e6f406c02bf8547f8dee3cb',
      '5e6f40ef02bf8547f8dee3cc',
      '5e6f411702bf8547f8dee3cd',
      '5e6f41de02bf8547f8dee3ce',
      '5e6f420302bf8547f8dee3cf'
    ],
    likedPersons: [
      '5e6f3f5d02bf8547f8dee3ca',
      '5e6f406c02bf8547f8dee3cb',
      '5e6f40ef02bf8547f8dee3cc'
    ],
    chats: []
  },
  {
    id: '5e6f472102bf8547f8dee3d6',
    firstName: 'Rianne',
    lastName: 'Blauw',
    gender: 'f',
    age: '22',
    picture: 'https://thumbs.dreamstime.com/z/portrait-african-american-female-doctor-hospital-looking-camera-smiling-145573776.jpg',
    matches: [
      '5e676b813cd15e48d4114d80',
      '5e6f3d2f02bf8547f8dee3c9',
      '5e6f3f5d02bf8547f8dee3ca',
      '5e6f406c02bf8547f8dee3cb',
      '5e6f40ef02bf8547f8dee3cc',
      '5e6f411702bf8547f8dee3cd',
      '5e6f41de02bf8547f8dee3ce',
      '5e6f420302bf8547f8dee3cf'
    ],
    likedPersons: [],
    chats: []
  },
  {
    id: '5e6f474d02bf8547f8dee3d7',
    firstName: 'Jolanda',
    lastName: 'Waal',
    gender: 'f',
    age: '25',
    picture: 'https://thumbs.dreamstime.com/z/horizontal-shot-pleasant-looking-successful-professional-female-lawyer-learns-clients-case-works-modern-laptop-computer-143607565.jpg',
    matches: [
      '5e676b813cd15e48d4114d80',
      '5e6f3d2f02bf8547f8dee3c9',
      '5e6f3f5d02bf8547f8dee3ca',
      '5e6f406c02bf8547f8dee3cb',
      '5e6f40ef02bf8547f8dee3cc',
      '5e6f411702bf8547f8dee3cd',
      '5e6f41de02bf8547f8dee3ce',
      '5e6f420302bf8547f8dee3cf'
    ],
    likedPersons: [],
    chats: []
  }
]

const chats = [
  {
    id: 0,
    users: ['5e676b813cd15e48d4114d80', '5e6f453502bf8547f8dee3d0'],
    messages: []
  }
]

let currentUser = '5e676b813cd15e48d4114d80';

router.get('/currentUser', (req,res) => {
  res.json(currentUser);
})

router.get('/users', (req, res, next) => {
  res.json(users);
})

router.get('/chats', (req, res, next) => {
  res.json(chats);
})

router.post('/logout', (req, res) => {
  console.log('logout');
  res.status(301).redirect("https://stanbankras.github.io/fe-assessment-2/");
});

router.post('/login', (req, res) => {
  currentUser = req.body.user;
  res.status(301).redirect('https://stanbankras.github.io/fe-assessment-2/matches.html');
});

router.post('/like', (req, res) => {
  const activeUser = users.find(x => x.id == req.body.userId);
  const likedUser = getUser(req.body.likedUser);
  if (activeUser.likedPersons.includes(likedUser.id)) {
    users.forEach(x => {
      if (x.id == activeUser.id) {
        x.likedPersons.splice(x.likedPersons.indexOf(likedUser.id), 1);
      }
    });
    activeUser.chats.forEach(chatId => {
      if (likedUser.chats.includes(chatId)) {
        deleteChat(chatId, likedUser.id, activeUser.id);
      }
    })
    if (req.body.type == 'js') {
      res.sendStatus(201);
    } else {
      res.status(301).redirect('https://stanbankras.github.io/fe-assessment-2/html-css/matches.html');
    }
  } else {
    users.forEach(x => {
      if (x.id == activeUser.id) {
        x.likedPersons.push(likedUser.id);
      }
    })
    checkMatch(activeUser.id, likedUser.id);
    if (req.body.type == 'js') {
      res.sendStatus(200);
    } else {
      res.status(301).redirect('https://stanbankras.github.io/fe-assessment-2/html-css/matches.html');
    }
  }
});

function checkMatch(userId, otherId) {
  const user = users.find(x => x.id == userId);
  const otherUser = users.find(x => x.id == otherId);
  if (user.likedPersons.includes(otherId) && otherUser.likedPersons.includes(userId)) {
    console.log('Match!');
    createChat(userId, otherId);
  }
}

function createChat(userId, otherId) {
  const chatId = randomId();
  const chat = {
    id: chatId,
    users: [userId, otherId],
    messages: []
  };
  chats.push(chat);
  users.forEach(user => {
    if(user.id == userId || user.id == otherId) {
      user.chats.push(chatId);
    }
  })
}

function deleteChat(chatId, userId, otherId) {
  chats.filter(chat => chat.id != chatId);
  users.forEach(user => {
    if (user.id == userId || user.id == otherId) {
      user.chats.splice(user.chats.indexOf(chatId), 1);
    }
  })
}

function getUser(userId) {
  return users.filter(x => { return x.id == userId })[0];
}

// https://learnersbucket.com/examples/javascript/unique-id-generator-in-javascript/
function randomId() {
  let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
  }
  //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

module.exports = router;
