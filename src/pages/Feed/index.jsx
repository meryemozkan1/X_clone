import { useEffect, useState } from "react";
import Aside from "./Aside";
import Main from "./Main";
import Nav from "./Nav";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const Feed = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user_data) => {
      setUser(user_data);
    });

    // componenetwillwunmount tetiklendiğinde yani kullanıcı sayfadan ayrıldığında obeneliği  sonlanrırıyoru( performansı +)
    return () => unsub();
  }, []);

  console.log("render oldu");
  return (
    <div className="feed h-screen bg-black overflow-hidden text-white">
      <Nav user={user} />
      <Main user={user} />
      <Aside />
    </div>
  );
};

export default Feed;
