import "../style.scss";
import bot from "../assets/bot.png";

export const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={bot} alt="" srcset="" />
        <div className="userChatInfo">
          <span>John Doe</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={bot} alt="" srcset="" />
        <div className="userChatInfo">
          <span>John Doe</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={bot} alt="" srcset="" />
        <div className="userChatInfo">
          <span>John Doe</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={bot} alt="" srcset="" />
        <div className="userChatInfo">
          <span>John Doe</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};
