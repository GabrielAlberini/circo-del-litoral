import imgHome1 from "./frontend/assets/img/img-home/circo1.jpg";
import imgHome2 from "./frontend/assets/img/img-home/circo2.jpg";
import imgHome3 from "./frontend/assets/img/img-home/circo3.jpg";
import imgHome4 from "./frontend/assets/img/img-home/circo4.jpg";
import imgHome6 from "./frontend/assets/img/img-home/circo6.jpg";
// Users
import user from "./frontend/assets/img/users/user.png";

const SECTION_HOME = [
  {
    title: "Eventos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestias, assumenda nisi voluptatum beatae animi error officiis illo. Id distinctio sapiente eos dolores tempora possimus aspernatur accusantium culpa sequi minus?",
    invSection: "",
    redirection: "/",
    img: imgHome1,
  },
  {
    title: "Producciones",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestias, assumenda nisi voluptatum beatae animi error officiis illo. Id distinctio sapiente eos dolores tempora possimus aspernatur accusantium culpa sequi minus?",
    invSection: "column-reverse",
    redirection: "/",
    img: imgHome2,
  },
  {
    title: "Novedades",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestias, assumenda nisi voluptatum beatae animi error officiis illo. Id distinctio sapiente eos dolores tempora possimus aspernatur accusantium culpa sequi minus?",
    invSection: "",
    redirection: "/",
    img: imgHome3,
  },
];

const GALERY_CONTACT_HOME = [
  {
    title: "Galeria",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestias, assumenda nisi voluptatum beatae animi error officiis illo. Id distinctio sapiente eos dolores tempora possimus aspernatur accusantium culpa sequi minus?",
    redirection: "/",
    img: imgHome4,
  },
  {
    title: "Contact",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestias, assumenda nisi voluptatum beatae animi error officiis illo. Id distinctio sapiente eos dolores tempora possimus aspernatur accusantium culpa sequi minus?",
    redirection: "/",
    img: imgHome6,
  },
];

const ITEMS_USERS = [
  {
    img: imgHome1,
    description:
      "llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala ",
    name: "Pepito",
    rol: "Malabarista",
    socialLink: "https://google.com",
  },
  {
    img: imgHome1,
    description:
      "llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala ",
    name: "Gabriel Alberini",
    rol: "Malabarista",
    socialLink: "",
  },
  {
    img: imgHome1,
    description:
      "llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala ",
    name: "Juancito",
    rol: "Malabarista",
    socialLink: "",
  },
  {
    img: imgHome1,
    description:
      "llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala ",
    name: "Martincito",
    rol: "Malabarista",
    socialLink: "",
  },
  {
    img: imgHome1,
    description:
      "llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala llalalala ",
    name: "Marianita",
    rol: "Malabarista",
    socialLink: "",
  },
];

const SUBBANNER_IMG = [
  { galeriaFoto: imgHome1 },
  { galeriaFoto: imgHome2 },
  { galeriaFoto: imgHome3 },
  { galeriaFoto: imgHome4 },
  { galeriaFoto: imgHome6 },
];

const USERS = [
  {
    id: "1",
    img: user,
    name: "Nombre de usuario",
    rol: "Malabarista",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla dicta ipsa eum sunt ex cumque praesentium, tempore deleniti modi sit sequi molestiae laudantium labore ducimus nesciunt rerum quis debitis? Beatae.",
    socialLink: "https:/google.com",
  },
  {
    id: "2",
    img: user,
    name: "Nombre de usuario",
    rol: "Malabarista",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla dicta ipsa eum sunt ex cumque praesentium, tempore deleniti modi sit sequi molestiae laudantium labore ducimus nesciunt rerum quis debitis? Beatae.",
    socialLink: "https:/google.com",
  },
  {
    id: "3",
    img: user,
    name: "Nombre de usuario",
    rol: "Malabarista",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla dicta ipsa eum sunt ex cumque praesentium, tempore deleniti modi sit sequi molestiae laudantium labore ducimus nesciunt rerum quis debitis? Beatae.",
    socialLink: "https:/google.com",
  },
  {
    id: "4",
    img: user,
    name: "Nombre de usuario",
    rol: "Malabarista",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla dicta ipsa eum sunt ex cumque praesentium, tempore deleniti modi sit sequi molestiae laudantium labore ducimus nesciunt rerum quis debitis? Beatae.",
    socialLink: "https:/google.com",
  },
];

const ITEMS_GALERY = [
  {
    id: 1,
    img: imgHome1,
    alt: "foto de circo",
  },
  {
    id: 2,
    img: imgHome2,
    alt: "foto de circo",
  },
  {
    id: 3,
    img: imgHome3,
    alt: "foto de circo",
  },
  {
    id: 4,
    img: imgHome4,
    alt: "foto de circo",
  },
  {
    id: 5,
    img: imgHome6,
    alt: "foto de circo",
  },
];

export {
  SECTION_HOME,
  GALERY_CONTACT_HOME,
  ITEMS_USERS,
  SUBBANNER_IMG,
  ITEMS_GALERY,
  USERS,
};
