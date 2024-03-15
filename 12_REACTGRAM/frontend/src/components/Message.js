import "./Message.css";
const Message = ({ msg, type }) => {
  return (
    <div classname={`message ${type}`}>
      <p>{msg}</p>
    </div>
  );
};

export default Message;
