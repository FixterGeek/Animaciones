import { NewRotaryGallery } from "~/components/NewRotaryGallery";

export default function Page() {
  return (
    <article>
      <section className="h-[50vh] bg-indigo-500" />
      <NewRotaryGallery
        titles={[
          "Ponte chido con el ejercicio",
          "Ponte mamado con el ejercicio",
          "Ponte bueno con el ejercicio",
          "Ponte sabrosa con el ejercicio",
        ]}
        emojis={["🤓", "🍟", "🪄", "🌀"]}
        videos={[
          "https://dl.dropboxusercontent.com/s/e7fsnz9e8g5ngwqvk0y8h/24632438_z7AqYnq4.mp4?rlkey=czo2p7d3v35fndfjongci6yqy&st=zoe1fcb1&dl=0",
          "https://dl.dropboxusercontent.com/s/4kle801qkjkz0lw9qpjkt/24632437_cFlqNVLO.mp4?rlkey=ub4hte7ktze5658v66ci6axj8&st=5exnlo0e&dl=0",
          "https://dl.dropboxusercontent.com/s/4r1qys3nvzx3y6q3qwewb/24632436_69jCgczl.mp4?rlkey=4va5qw8xmxil8tak52de7fu7e&st=nw71j49v&dl=0",
          "https://dl.dropboxusercontent.com/s/qx0rp5f5h5bcoopp2b0d0/24632435_IdhNXXql.mp4?rlkey=bmthdyn0huc71pro38wa1twcw&st=wqm79hpd&dl=0",
        ]}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          neque? Rem expeditdfsdfa non a praesentium. Suscipit nesciunt officiis
          eaque facere quas quidem deserunt ipsam sint neque aspernatur. Quae,
          consectetur alias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          neque? Rem expedita nasdfsafon a praesentium. Suscipit nesciunt
          officiis eaque facere quas quidem deserunt ipsam sint neque
          aspernatur. Quae, consectetur alias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          neque? Rem expedita nasfsadfn a praesentium. Suscipit nesciunt
          officiis eaque facere quas quidem deserunt ipsam sint neque
          aspernatur. Quae, consectetur alias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          neque? Rem expedasfdsfdsafita non a praesentium. Suscipit nesciunt
          officiis eaque facere quas quidem deserunt ipsam sint neque
          aspernatur. Quae, consectetur alias.
        </p>
      </NewRotaryGallery>
      <section className="h-[50vh] bg-indigo-500" />
    </article>
  );
}
