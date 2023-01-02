import '../style.scss'
import cam from '../assets/cam.png'
import add from '../assets/add.png'
import more from '../assets/more.png'
import { Messages } from './Messages'
import { Input } from './Input'
export const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
        <Messages/>
        <Input/>
    </div>
  )
}
