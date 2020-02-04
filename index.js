import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
const htmlParser = require('html-react-parser');
export const BasicModal = ({ visibility, customClass, size, onHide, closeButton, title, body, buttons }) => {
    return <Modal show={visibility} className={customClass} size={size ? size : 'lg'} onHide={() => { if (typeof onHide === 'function') onHide(); }} scrollable>
        <ModalHeader closeButton={typeof closeButton === "boolean" ? closeButton : true}>
            <ModalTitle>{typeof title === 'string' ? htmlParser(title) : title}</ModalTitle>
        </ModalHeader>
        <ModalBody>
            {typeof body === 'string' ? htmlParser(body) : body}
        </ModalBody>
        <ModalFooter>
            {
                buttons.map((btn, index) => {
                    return <Button key={index} variant={btn.variant} onClick={btn.handler}>{btn.label}</Button>
                })
            }
        </ModalFooter>
    </Modal>
}
export const ConfirmationModal = (props) => <BasicModal  {...{ ...props, "closeButton": false }} />