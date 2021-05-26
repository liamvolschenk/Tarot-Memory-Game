//I have stored the images for the cards in a seperate folder, and then created a JS file that exports them out in an array, each card is repeated so 
//that the game has a pair of each card.

import King from './king.jpeg';
import Fool from './fool.jpeg';
import Judgement from './judgement.jpeg';
import Moon from './moon.jpeg';
import Sun from './sun.jpeg';
import World from './world.jpeg';
import Fortune from './fortune.jpeg';
import Star from './star.jpeg';
import Strength from './strength.jpeg';
import Back from './back.jpeg';

export let images = [
    {
        name: "King",
        pic: King,
        flipped: false,
    },
    {
        name: "Fool",
        pic: Fool,
        flipped: false,
    },
    {
        name: "Judgement",
        pic: Judgement,
        flipped: false,
    },
    {
        name: "Moon",
        pic: Moon,
        flipped: false,
    },
    {
        name: "Sun",
        pic: Sun,
        flipped: false,
    },
    {
        name: "World",
        pic: World,
        flipped: false,
    },
    {
        name: "Fortune",
        pic: Fortune,
        flipped: false,
    },
    {
        name: "Star",
        pic: Star,
        flipped: false,
    },
    {
        name: "Strength",
        pic: Strength,
        flipped: false,
    },
    {
        name: "King",
        pic: King,
        flipped: false,
    },
    {
        name: "Fool",
        pic: Fool,
        flipped: false,
    },
    {
        name: "Judgement",
        pic: Judgement,
        flipped: false,
    },
    {
        name: "Moon",
        pic: Moon,
        flipped: false,
    },
    {
        name: "Sun",
        pic: Sun,
        flipped: false,
    },
    {
        name: "World",
        pic: World,
        flipped: false,
    },
    {
        name: "Fortune",
        pic: Fortune,
        flipped: false,
    },
    {
        name: "Star",
        pic: Star,
        flipped: false,
    },
    {
        name: "Strength",
        pic: Strength,
        flipped: false,
    }
]


//This is what we will see on the back of the cards when they are faced down
export const backCard = Back;