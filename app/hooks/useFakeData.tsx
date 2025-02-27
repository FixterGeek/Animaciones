export const images = [
  "/scroll_gallery/branding.webp",
  "/scroll_gallery/cellphones.webp",
  "/scroll_gallery/awesome.webp",
  "/scroll_gallery/beauty.webp",
  "/scroll_gallery/design.webp",
  "/scroll_gallery/pool.webp",
  "/scroll_gallery/chair.webp",
];

export type Group = {
  images: string[];
  title: string;
  links: { text: string; link: string }[];
  paragraph: string;
};

const groups = [
  {
    images,
    title: "AM-ARC",
    links: [
      {
        text: "Awards",
        link: "http://easybits.cloud",
      },
      {
        text: "Visit Live",
        link: "http://easybits.cloud",
      },
      {
        text: "Learn More",
        link: "http://easybits.cloud",
      },
    ],
    paragraph:
      "lorem ipsum un parrafo para identidty logo website, ux, ui, desig  custome, 3d design web 3d animated web, an architectual simplicity lorem ipsum un parrafo para identidty logo website, ux, ui, desig  custome, 3d design web 3d animated web, an architectual simplicity",
  },
  {
    images,
    title: "Pelusin-ARC",
    links: [
      {
        text: "Awards",
        link: "http://easybits.cloud",
      },
      {
        text: "Visit Live",
        link: "http://easybits.cloud",
      },
      {
        text: "Learn More",
        link: "http://easybits.cloud",
      },
    ],
    paragraph:
      "lorem ipsum un parrafo para identidty logo website, ux, ui, desig  custome, 3d design web 3d animated web, an architectual simplicity lorem ipsum un parrafo para identidty logo website, ux, ui, desig  custome, 3d design web 3d animated web, an architectual simplicity",
  },
  {
    images,
    title: "AM-Perro",
    links: [
      {
        text: "Awards",
        link: "http://easybits.cloud",
      },
      {
        text: "Visit Live",
        link: "http://easybits.cloud",
      },
      {
        text: "Learn More",
        link: "http://easybits.cloud",
      },
    ],
    paragraph:
      "lorem ipsum un parrafo para identidty logo website, ux, ui, desig  custome, 3d design web 3d animated web, an architectual simplicity lorem ipsum un parrafo para identidty logo website, ux, ui, desig  custome, 3d design web 3d animated web, an architectual simplicity",
  },
  {
    images,
    title: "Pellusina matrushka",
    links: [
      {
        text: "Awards",
        link: "http://easybits.cloud",
      },
      {
        text: "Visit Live",
        link: "http://easybits.cloud",
      },
      {
        text: "Learn More",
        link: "http://easybits.cloud",
      },
    ],
    paragraph:
      "lorem ipsum un parrafo para identidty logo website, ux, ui, desig  custome, 3d design web 3d animated web, an architectual simplicity lorem ipsum un parrafo para identidty logo website, ux, ui, desig  custome, 3d design web 3d animated web, an architectual simplicity",
  },
  {
    images,
    title: "Ya hace hambre",
    links: [
      {
        text: "Awards",
        link: "http://easybits.cloud",
      },
      {
        text: "Visit Live",
        link: "http://easybits.cloud",
      },
      {
        text: "Learn More",
        link: "http://easybits.cloud",
      },
    ],
    paragraph:
      "lorem ipsum un parrafo para identidty logo website, ux, ui, desig  custome, 3d design web 3d animated web, an architectual simplicity lorem ipsum un parrafo para identidty logo website, ux, ui, desig  custome, 3d design web 3d animated web, an architectual simplicity",
  },
];

export const useFakeData = () => ({ groups });
