import '../style.scss';
import bot from '../assets/bot.png'
export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Private Chat.</span>
      <div className="user">
        <img src={bot} alt=""/>
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}
