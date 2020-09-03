import React from "react";
import { Modal } from "react-bootstrap";

const EditBook = ({activeItemDesc, activeItemName, handleClose, open}) => {
  return (
    <Modal show={open} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton className="bg-modal">
            <Modal.Title className="title-modal">{activeItemName}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-modal">{activeItemDesc}</Modal.Body>
    </Modal>
  );
};

export default EditBook;