import { useEffect, useState } from "react";
import Form from "../../components/Form";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import Loader from "../../components/Loader";
import Post from "../../components/Post";

const Main = ({ user }) => {
  const [tweets, setTweets] = useState(null);
  useEffect(() => {
    // Abone olunancak koleksiyonun referansini al
    const ref = collection(db, "tweets");

    //abonelik ayarlarını tanımla
    const q = query(ref, orderBy("createdAt", "desc"));

    //Koleksiyona abone ol
    const unsub = onSnapshot(q, (snapshot) => {
      //tweetlerin gecici olarak tutlacağı dizi
      const temp = [];

      // doc şarın içerisindeki veriye erişip gecici dizi aktar
      snapshot.docs.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));
      //state i üncelle
      setTweets(temp);
    });
    //Bileşen ekrandan gidderse abonelii durdur
    return () => unsub();
  }, []);
  console.log(tweets);
  return (
    <main className="border border-zinc-600 overflow-y-auto">
      <header className="border-b border-zinc-600 p-4 font-bold">
        Anasayfa
      </header>

      <Form user={user} />

      {!tweets ? (
        <div className="flex justify-center my-20 scale-[1.5]">
          <Loader />
        </div>
      ) : (
        tweets.map((tweet) => <Post tweet={tweet} key={tweet.id} />)
      )}
    </main>
  );
};

export default Main;
