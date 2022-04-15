import titanic from "./media/titanic.jpg";
import avatar from "./media/avatar.jpg";
import starwars from "./media/starwars.jpg";
import avengerinfinitywar from "./media/avengerinfinitywar.jpg";
import jurassicworld from "./media/jurrasicworld.jpg";

const data = [
  {
    id: 1,
    title: "Avatar",
    distributor: "20th Century Fox",
    year: 2009,
    amount: "$2,787,965,087",
    img: {
      src: avatar,
      alt: "avatar",
    },
    ranking: 1,
  },
  {
    id: 2,
    title: "Titanic",
    distributor: "20th Century Fox",
    year: 1997,
    amount: "$2,187,463,944",
    img: {
      src: titanic,
      alt: "titanic",
    },
    ranking: 2,
  },
  {
    id: 3,
    title: "Star Wars: The Force Awakens",
    distributor: "Walt Disney Studios Motion Pictures",
    year: 2015,
    amount: "$2,068,223,624",
    img: {
      src: starwars,
      alt: "star_wars_the_force_awakens",
    },
    ranking: 3,
  },
  {
    id: 4,
    title: "Avengers: Infinity War",
    distributor: "Walt Disney Studios Motion Pictures",
    year: 2018,
    amount: "$2,048,359,754",
    img: {
      src: avengerinfinitywar,
      alt: "avengers_infinity_war",
    },
    ranking: 4,
  },
  {
    id: 5,
    title: "Jurassic World",
    distributor: "Universal Pictures",
    year: 2015,
    amount: "$1,671,713,208",
    img: {
      src: jurassicworld,
      alt: "jurassic_world",
    },
    ranking: 5,
  },
];
export default data;
