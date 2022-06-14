import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { useUserAuth } from "context/UserAuth";
import "./Chat.css";

const ChatMessage = (props) => {
    const { user } = useUserAuth();
    const {photoURL, text, userid, name} = props.message
    const messageClass = userid === user.uid ? 'sent' : 'received';
    return (<>
        <div className={`message ${messageClass}`}>
        <OverlayTrigger
        variant="secondary"
        overlay={
        <Tooltip id={`tooltip-top`}>
        <strong>{name}</strong>
        </Tooltip>
        }
        >
        <div>
        <img className="chatimg" src={photoURL || '/images/1.png'}/>
        </div>
        </OverlayTrigger>
        <span>{text}</span>
      </div>
      </>
    )
}
export {ChatMessage}