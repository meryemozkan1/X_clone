import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { db } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import Modal from "../Modal";

const Dropdown = ({ tweet }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // input referansı
  const inputRef = useRef();

  // dropdownı kapat
  const close = () => {
    inputRef.current.checked = false;
  };

  // Silme işlemi
  const handleDelete = () => {
    // Silinecek dökümanın referansını alma
    const tweetRef = doc(db, "tweets", tweet.id);

    // Dökümanı kaldırma işlemi
    deleteDoc(tweetRef)
      .then(() => toast.info("Tweet akıştan kaldırıldı"))
      .catch(() => toast.error("Bir sorun oluştu"));

    close();
  };

  // Güncelleme işlemi
  const handleEdit = () => {
    setIsModalOpen(true);
    close();
  };

  //dropdownı kapat

  return (
    <>
      <label className="popup">
        <input ref={inputRef} type="checkbox" />
        <div className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="popup-window">
          <legend>Eylemler</legend>
          <ul>
            <li>
              <button onClick={handleEdit}>
                <MdEdit />
                <span>Düzenle</span>
              </button>
            </li>
            <hr />
            <li>
              <button onClick={handleDelete}>
                <FaTrashAlt className="text-red-500" />
                <span>Sil</span>
              </button>
            </li>
          </ul>
        </nav>
      </label>

      {/* Modal bileşeni */}
      {isModalOpen && (
        <Modal tweet={tweet} close={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default Dropdown;
