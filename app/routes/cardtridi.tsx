import { CardTriDi } from "~/components/CardTriDi";

export default function Route() {
  return (
    <>
      <main className="bg-black grid place-content-center h-screen">
        <CardTriDi>
          <p className="font-light text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            ratione vero ea nemo nihil hic corrupti quaerat mollitia ex, iure
            ipsa commodi atque iusto deserunt neque nostrum tempora quae
            sapiente.
          </p>
          <div className="flex gap-4 items-center px-4">
            <img
              className="rounded-full w-12 h-12 object-cover border"
              src="https://i.imgur.com/qqTYVSy.png"
              alt="ovni"
            />
            <div>
              <p className="font-bold font-sans">Pedro Ortega</p>
              <p className="text-xs text-gray-500">Diseñador UX</p>
            </div>
          </div>
        </CardTriDi>
      </main>
    </>
  );
}
