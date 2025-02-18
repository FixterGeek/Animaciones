import { RotaryGallery } from "~/components/RotaryGallery";

export default function Page() {
  return (
    <article>
      <section className="h-[50vh] bg-slate-500" />
      <RotaryGallery
        srcset={[
          "https://dl.dropboxusercontent.com/s/e7fsnz9e8g5ngwqvk0y8h/24632438_z7AqYnq4.mp4?rlkey=czo2p7d3v35fndfjongci6yqy&st=zoe1fcb1&dl=0",
          "https://dl.dropboxusercontent.com/s/4kle801qkjkz0lw9qpjkt/24632437_cFlqNVLO.mp4?rlkey=ub4hte7ktze5658v66ci6axj8&st=5exnlo0e&dl=0",
          "https://dl.dropboxusercontent.com/s/4r1qys3nvzx3y6q3qwewb/24632436_69jCgczl.mp4?rlkey=4va5qw8xmxil8tak52de7fu7e&st=nw71j49v&dl=0",
          "https://dl.dropboxusercontent.com/s/qx0rp5f5h5bcoopp2b0d0/24632435_IdhNXXql.mp4?rlkey=bmthdyn0huc71pro38wa1twcw&st=wqm79hpd&dl=0",
        ]}
      />
      <section className="h-[50vh] bg-pink-500" />
    </article>
  );
}
