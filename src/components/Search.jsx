import "../style.scss";
import bot from "../assets/bot.png";

export const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search here" />
      </div>
      <div className="userChat">
        <img src={bot} alt="" srcset="" />
        <div className="userChatInfo">
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};
