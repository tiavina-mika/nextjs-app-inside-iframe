import { useRef } from "react";
import "./styles.css";

const APP_URL = "http://localhost:3000";
const App = () => {
  let Iref = useRef("");

  const sendMessage = () => {
    if (!Iref.current) return;
    Iref.current.contentWindow.postMessage(
      { message: window.location.host },
      APP_URL
    );
  };

  // useEffect(() => {
  //   if (!Iref.current) return;
  //   Iref.current.contentWindow.postMessage(
  //     { message: "test" }, APP_URL);
  // console.log('cool', Iref.current.contentWindow.postMessage)
  // }, [])
  return (
    <div className="App">
      <button onClick={sendMessage}>Send message to iframe</button>
      <iframe
        ref={Iref}
        src={APP_URL}
        height="100%"
        width="100%"
        scrolling="no"
        frameBorder="0"
        title="nextJs"
      ></iframe>
    </div>
  );
};

export default App;
