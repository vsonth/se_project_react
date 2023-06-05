import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link })
  };

  return (
    <ModalWithForm
      title="New Garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label>
        Name
        <input
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Image
        <input
          type="text"
          name="link"
          minLength="1"
          maxLength="30"
          value={link}
          onChange={handleUrlChange}
        />
      </label>
      <p>Select the weather type:</p>
      <div>
        <div>
          <input type="radio" id="hot" value="hot" />
          <label> Hot</label>
        </div>
        <div>
          <input type="radio" id="warm" value="warm" />
          <label> Warm</label>
        </div>
        <div>
          <input type="radio" id="cold" value="cold" />
          <label> Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
