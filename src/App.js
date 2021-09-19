import React, { useState } from "react";

import Header from "./pages/Header";
import Modal from "./components/Modal";
import PageIndex from "./pages/PageIndex";
import Button from "./components/Button";
import Form from "./pages/Form";

import "./styles/App.scss";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <Header />
      <div className="button-wrapper">
        <Button handleModalOpen={() => setIsModalVisible(true)}>
          Solicite uma cotação
        </Button>
      </div>
      {isModalVisible ? (
        <Modal handleModalClose={() => setIsModalVisible(false)}>
          <Form />
        </Modal>
      ) : null}
      <PageIndex />
    </>
  );
}

export default App;
