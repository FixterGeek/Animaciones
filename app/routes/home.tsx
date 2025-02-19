import { Link } from "react-router";
import type { Route } from "./+types/home";
import { GiBulletImpacts } from "react-icons/gi";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Componentes mágicos 🪄✨" },
    {
      name: "description",
      content: "Componentes del curso de animaciones con React",
    },
    {
      name: "og:image",
      content: "/robot-hat.png",
    },
  ];
}

export default function Home() {
  return (
    <section className="flex py-20 min-h-screen justify-center">
      <div>
        <img className="w-64 mx-auto" src="/robot-hat.png" />
        <h1 className="text-white text-4xl font-bold mt-6 text-center">
          ¡Qué empice la magia!
        </h1>
        <p className="text-center text-white/60 font-light mt-4 text-lg max-w-xl">
          Estos son todos los componentes que construiremos en el curso{" "}
          <a href="https://animaciones.fixtergeek.com/" target="_blank">
            <strong className="text-[#5158F6] underline">
              «Animaciones con React + Motion»
            </strong>
          </a>
        </p>
        <ul className="max-w-xl w-fit text-left mx-auto mt-8">
          <Item link="/basic_gallery" text="Basic gallery" />
          <Item link="/accordion" text="Accordion gallery" />
          <Item link="/banners" text="Banners" />
          <Item link="/beam" text="Scroll beam" />
          <Item link="/border_button" text="Border button" />
          <Item link="/cardtridi" text="Card 3d" />
          <Item link="/carrousell" text="Carrousell" />
          <Item link="/drawer" text="Drawer" />
          <Item link="/flipper" text="Flipper" />
          <Item link="/flipwords" text="Flipwords" />
          <Item link="/grid-gallery" text="Grid gallery" />
          <Item link="/jackpot" text="Jackpot" />
          <Item link="/moving_border" text="Bloob button" />
          <Item link="/phone_hero" text="Scroll hero" />
          <Item link="/reorder" text="Draggable list" />
          <Item link="/swipe_gallery" text="Swipe gallery" />
          <Item link="/infinity_moving" text="Infinity Moving Chips" />
          <Item link="/image_slider" text="Image Slider" />
          <Item link="/red_banners" text="Red Banners" />
          <Item link="/auto_circle" text="Práctica para Rotary" />
          <Item link="/new_rotary" text="Rotary Gallery" />
        </ul>{" "}
      </div>
    </section>
  );
}

const Item = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link to={link}>
      <li className="text-white my-2 flex gap-2 items-center hover:opacity-50">
        <GiBulletImpacts />
        {text}
      </li>
    </Link>
  );
};
