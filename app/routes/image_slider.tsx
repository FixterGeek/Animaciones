import { ImageSlider } from "~/components/ImageSlider";

const people = [
  {
    name: "Roberta Torres",
    role: "Dev profesional",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic provident delectus debitis itaque quasi iure fugiat recusandae deleniti odio! Officia labore explicabo voluptates quia reiciendis perspiciatis nesciunt quisquam accusantium ut.",
    src: "/slide_gallery/cigar.jpg",
    href: "https://es.wikipedia.org/wiki/Betina_Gonz%C3%A1lez",
  },
  {
    name: "Betina Gonzalez",
    role: "Escritora profesional",
    text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic provident delectus debitis itaque quasi iure fugiat recusandae deleniti odio! Officia labore explicabo voluptates quia reiciendis perspiciatis nesciunt quisquam accusantium ut.",
    src: "/slide_gallery/betina.jpg",
    href: "https://es.wikipedia.org/wiki/Betina_Gonz%C3%A1lez",
  },
  {
    name: "José Doroteo Arango Arámbula",
    role: "Icono popular",
    text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic provident delectus debitis itaque quasi iure fugiat recusandae deleniti odio! Officia labore explicabo voluptates quia reiciendis perspiciatis nesciunt quisquam accusantium ut.",
    src: "/slide_gallery/don.jpg",
    href: "https://es.wikipedia.org/wiki/Pancho_Villa",
  },
  {
    name: "Héctor Campos",
    role: "Esclavo digital",
    text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic provident delectus debitis itaque quasi iure fugiat recusandae deleniti odio! Officia labore explicabo voluptates quia reiciendis perspiciatis nesciunt quisquam accusantium ut.",
    src: "/slide_gallery/office.jpg",
    href: "https://hectorbliss.com/offers/pong",
  },
  {
    name: "Caritina Piña",
    role: "Anarquista mexicana",
    text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic provident delectus debitis itaque quasi iure fugiat recusandae deleniti odio! Officia labore explicabo voluptates quia reiciendis perspiciatis nesciunt quisquam accusantium ut.",
    src: "/slide_gallery/tunel.jpg",
    href: "https://www.ojala.mx/es/ojala-es/recuperando-el-legado-de-mujeres-anarquistas-en-mexico",
  },
  {
    name: "Zeus",
    role: "El mejor perrito",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic provident delectus debitis itaque quasi iure fugiat recusandae deleniti odio! Officia labore explicabo voluptates quia reiciendis perspiciatis nesciunt quisquam accusantium ut.",
    src: "/slide_gallery/zeus.jpg",
    href: "https:fixtergeek.com",
  },
  {
    name: "José Vasconcelos Calderón",
    role: "Filosofo y Pedagogo",
    text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic provident delectus debitis itaque quasi iure fugiat recusandae deleniti odio! Officia labore explicabo voluptates quia reiciendis perspiciatis nesciunt quisquam accusantium ut.",
    src: "/slide_gallery/vasconcelos.jpg",
    href: "https://es.wikipedia.org/wiki/Jos%C3%A9_Vasconcelos",
  },
];

export default function Page() {
  return (
    <article className="bg-gray-200 h-screen">
      <ImageSlider items={people} />
    </article>
  );
}
