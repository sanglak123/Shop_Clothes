import React from "react";
import { Modal } from "react-bootstrap";

interface modalProps {
  show: boolean;
  setShow: any;
}

const Modal_Search = ({ show, setShow }: modalProps) => {
  return (
    <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>Modal body content</Modal.Body>
    </Modal>
  );
};

export default Modal_Search;
