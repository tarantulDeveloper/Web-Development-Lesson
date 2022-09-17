import Images from './images.js';

const greenCardData = [
    {
        id: 1,
        title: "Web Design",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe itaque consequatur.",
    },
    {
        id: 2,
        title: "CSS Templates",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe itaque consequatur.",
    },
    {
        id: 3,
        title: "Interactive Media",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe itaque consequatur.",
    }
];

const latestUpdates = [
    {
        id : 1,
        title: "Today we are happy!",
        text: "Some text here. These limons are awesome!",
        date: "June 25, 2021",
        image: Images.lemon_1
    },
    {
        id: 2,
        title: "Special offer for you!",
        text: "This is special offer for you and for your friends!",
        date: "August 12, 2022",
        image: Images.lemon_2
    },
    {
        id: 3,
        title: "Happy Birthday!",
        text: "We give presents to you. Why? Well, because today is your Birthday!",
        date: "July 27, 1999",
        image: Images.lemon_3_mini
    }
];

export {greenCardData, latestUpdates};