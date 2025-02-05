import { BasicGallery } from "~/components/BasicGallery";

export default function Page() {
  return (
    <article className="text-white min-h-[95vh] flex flex-col justify-center">
      <main className="pt-20">
        <h1 className="text-3xl font-bold text-center mb-8">Basic Gallery</h1>
        <BasicGallery
          className="bg-yellow-600"
          items={[
            {
              name: "Blissmo",
              src: "/public/slide_gallery/zeus.jpg",
              text: "Lorem ipsum mm mitologos soziculucus morbius dignitas hominis.",
            },
            {
              name: "Juancho",
              src: "/public/robot-hat.png",
              text: "Lorem ipsum mitologos soziculucus ñ morbius dignitas hominis.",
            },
            {
              name: "Pelusa",
              src: "/public/js.svg",
              text: "Lorem ipsum mitologos lo soziculucus morbius dignitas hominis.",
            },
          ]}
        />
      </main>
    </article>
  );
}
