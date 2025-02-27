import { ScrollGallery } from "~/components/ScrollGallery";

export default function Page() {
  return (
    <article className="h-max bg-indigo-200">
      <div className="h-20 rounded-full max-w-2xl" />
      <section className="h-[50vh]" />
      <ScrollGallery />
      <section className="h-[50vh]" />
    </article>
  );
}
