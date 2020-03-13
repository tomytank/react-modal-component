import React, { useState } from "react";
import ReactDOM from "react-dom";

//import App from "./App";

import Modal from "./Modal";

import "./styles.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {modalOpen ? <Modal toggleModal={toggleModal} /> : null}
      <button onClick={toggleModal}>Open Modal</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//Modal
//Modal Component x(done)
//toggle
//control if modal is open, close if it is
//state X (done)
//keep track of modal being open
