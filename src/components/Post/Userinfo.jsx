import moment from "moment";
import { MdEdit } from "react-icons/md";

const Userinfo = ({ tweet }) => {
  //Tarih verisine erişme
  let date = tweet.createdAt?.toDate();
  //Moment yardımıyla şu anki tarihten ne kadar uzak olduğunu hesaplar
  date = moment(date).fromNow();

  return (
    <div className="flex gap-3 items-center whitespace-nowrap">
      <p>{tweet.user.name}</p>
      <p className="text-gray-400 text-sm">
        @{tweet.user.name.toLowerCase().split(" ").join("_")}
      </p>

      <p className="text-gray-400 text-sm">{date}</p>

      {tweet.isEdited && (
        <p className="text-gray-400 text-xs">
          <span className="max-md:hidden">*düzenlendi</span>
          <MdEdit className="md:hidden" />
        </p>
      )}
    </div>
  );
};

export default Userinfo;
