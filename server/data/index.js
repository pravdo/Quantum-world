import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpeg",
    friends: [],
    location: "San Fran, CA",
    occupation: "Software Engineer",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Steve",
    lastName: "Ralph",
    email: "thataaa@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p3.jpeg",
    friends: [],
    location: "New York, CA",
    occupation: "Degenerate",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Some",
    lastName: "Guy",
    email: "someguy@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "p4.jpeg",
    friends: [],
    location: "Canada, CA",
    occupation: "Data Scientist Hacker",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Whatcha",
    lastName: "Doing",
    email: "whatchadoing@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p6.jpeg",
    friends: [],
    location: "Korea, CA",
    occupation: "Educator",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p5.jpeg",
    friends: [],
    location: "Utah, CA",
    occupation: "Hacker",
    viewedProfile: 40212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Harvey",
    lastName: "Dunn",
    email: "harveydunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p7.jpeg",
    friends: [],
    location: "Los Angeles, CA",
    occupation: "Journalist",
    viewedProfile: 976,
    impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Carly",
    lastName: "Vowel",
    email: "carlyvowel@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p8.jpeg",
    friends: [],
    location: "Chicago, IL",
    occupation: "Nurse",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Jessica",
    lastName: "Dunn",
    email: "jessicadunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p9.jpeg",
    friends: [],
    location: "Washington, DC",
    occupation: "A Student",
    viewedProfile: 19420,
    impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Steve",
    lastName: "Ralph",
    location: "New York, CA",
    description: "Some really long random description",
    picturePath: "post1.jpeg",
    userPicturePath: "p3.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Whatcha",
    lastName: "Doing",
    location: "Korea, CA",
    description:
      "Another really long random description. This one is longer than the previous one.",
    picturePath: "post2.jpeg",
    userPicturePath: "p6.jpeg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "one more random comment",
      "and another random comment",
      "no more random comments",
      "I lied, one more random comment",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Jane",
    lastName: "Doe",
    location: "Utah, CA",
    description:
      "This is the last really long random description. This one is longer than the previous one.",
    picturePath: "post3.jpeg",
    userPicturePath: "p5.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "one more random comment",
      "I lied, one more random comment",
      "I lied again, one more random comment",
      "Why am I doing this?",
      "I'm bored",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Harvey",
    lastName: "Dunn",
    location: "Los Angeles, CA",
    description:
      "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
    picturePath: "post4.jpeg",
    userPicturePath: "p7.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      "I lied again, one more random comment",
      "Why am I doing this?",
      "I'm bored",
      "I'm still bored",
      "All I want to do is play video games",
      "I'm going to play video games",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: "Carly",
    lastName: "Vowel",
    location: "Chicago, IL",
    description:
      "Just a short description. I'm tired of typing. I'm going to play video games now.",
    picturePath: "post5.jpeg",
    userPicturePath: "p8.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      "I lied again, one more random comment",
      "Why am I doing this?",
      "Man I'm bored",
      "What should I do?",
      "I'm going to play video games",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: "Jessica",
    lastName: "Dunn",
    location: "Washington, DC",
    description:
      "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
    picturePath: "post6.jpeg",
    userPicturePath: "p9.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),

    comments: [
      "Can I play video games now?",
      "No let's actually study",
      "Never mind, I'm going to play video games",
      "Stop it.",
      "Michael, stop it.",
    ],
  },
];

export const articles = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    avatar: "DP",
    title: "Doppler Effect",
    subheader: "R Nave1",
    picturePath: "doppler_effect.png",
    main_info:
      "You hear the high pitch of the siren of the approaching ambulance, and notice that its pitch drops suddenly as the ambulance passes you. That is called the Doppler effect.",
    first_summary:
      "When a vehicle with a siren passes you, a noticeable drop in the pitch of the sound of the siren will be observed as the vehicle passes. This is an example of the Doppler effect. An approaching source moves closer during period of the sound wave so the effective wavelength is shortened, giving a higher pitch since the velocity of the wave is unchanged. Similarly the pitch of a receding sound source will be lowered.",
    second_summary:
      "The speed of sound is determined by the medium in which it is traveling, and therefore is the same for a moving source. But the frequency and wavelength are changed.",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    avatar: "dB",
    title: "Decibels",
    subheader: "R Nave2",
    picturePath: "decibels.jpg",
    main_info:
      "The sound intensity I may be expressed in decibels above the standard threshold of hearing I0.",
    first_summary:
      "The logarithm involved is just the power of ten of the sound intensity expressed as a multiple of the threshold of hearing intensity. Example: If I = 10,000 times the threshold, then the ratio of the intensity to the threshold intensity is 104, the power of ten is 4, and the intensity is 40 dB",
    second_summary:
      "Decibels provide a relative measure of sound intensity. The unit is based on powers of 10 to give a manageable range of numbers to encompass the wide range of the human hearing response, from the standard threshold of hearing at 1000 Hz to the threshold of pain at some ten trillion times that intensity.",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    avatar: "SE",
    title: "Solar Eclipse",
    subheader: "R Nave3",
    picturePath: "solar_eclipse.png",
    main_info:
      "A solar eclipse occurs when the Moon's shadow falls on the Earth, and a lunar eclipse occurs when the Earth's shadow falls on the Moon.",
    first_summary:
      "A look at the geometry of Moon phases would make it appear that a solar eclipse should happen at every new moon. This does not occur because the plane of the Moon's orbit is tilted 5.2° with respect to the plane of the Earth's orbit around the Sun (the ecliptic plane).",
    second_summary:
      "The conditions for eclipses occur only at the points at which the Moon's orbit passes through the ecliptic plane.The illustration below is not to scale and of course greatly exaggerates the 5.2° angle of the Moon's orbit with the ecliptic, but conceptually it shows the conditions for eclipses. The illustration was inspired by one in Chaisson and McMillan.",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    avatar: "GR",
    title: "Gamma Radioactivity",
    subheader: "R Nave4",
    picturePath: "gamma.png",
    main_info:
      "Gamma radiation is the most useful type of radiation for medical purposes, but at the same time it is the most dangerous because of its ability to penetrate large thicknesses of material.",
    first_summary:
      "Gamma radioactivity is composed of electromagnetic rays. It is distinguished from x-rays only by the fact that it comes from the nucleus. Most gamma rays are somewhat higher in energy than x-rays and therefore are very penetrating.",
    second_summary:
      "Electron capture is one form of radioactivity. A parent nucleus may capture one of its orbital electrons and emit a neutrino. This is a process which competes with positron emission and has the same effect on the atomic number.",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    avatar: "NFL",
    title: "Newton's First Law",
    subheader: "R Nave5",
    picturePath: "first_law.png",
    main_info:
      "Newton's First Law states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force.",
    first_summary:
      "It may be seen as a statement about inertia, that objects will remain in their state of motion unless a force acts to change the motion. Any change in motion involves an acceleration, and then Newton's Second Law applies.",
    second_summary:
      "The statements of both the Second Law and the First Law here are presuming that the measurements are being made in a reference frame which is not itself accelerating. Such a frame is often referred to as an 'inertial frame'.",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    avatar: "OL",
    title: "Ohm's Law",
    subheader: "R Nave6",
    picturePath: "ohm_law.png",
    main_info:
      "For many conductors of electricity, the electric current which will flow through them is directly proportional to the voltage applied to them.",
    first_summary:
      "When a microscopic view of Ohm's law is taken, it is found to depend upon the fact that the drift velocity of charges through the material is proportional to the electric field in the conductor. ",
    second_summary:
      "The ratio of voltage to current is called the resistance, and if the ratio is constant over a wide range of voltages, the material is said to be an 'ohmic' material. ",
  },
];
