import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const ResetButton = ({ email }) => {
  // Şifre sıfırlama e-postası gönderme
  const handleReset = () => {
    sendPasswordResetEmail(auth, email).then(() =>
      toast
        .info("Şifre sıfırlama e-postası gönderildi. Mailinizi kontrol ediniz.")
        .catch((err) => toast.error("Bir hata Oluştu:" + err.code))
    );
  };
  return (
    <button onClick={handleReset} className="text-red-500">
      Şifrenizi mi Unuttunuz?
    </button>
  );
};

export default ResetButton;
