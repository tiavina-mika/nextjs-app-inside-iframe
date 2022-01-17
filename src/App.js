import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <iframe
         src="http://localhost:3000?param1=value1"
         height="100%"
         width="100%"
         scrolling="no"
         frameBorder='0'
         title="nextJs"
        >
      </iframe>
    </div>
  );
};

export default App;
