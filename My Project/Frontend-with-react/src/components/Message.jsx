import { useSelector } from "react-redux";

function Message() {
    const data = useSelector(state=>state.message)
  return (
        <div className="message">
            {data}
        </div>
    );
}

export default Message;

    