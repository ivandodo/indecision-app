import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected option"
        onRequestClose={props.clearSelected}
        ariaHideApp={false}
    >
        <h3>Selected option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.clearSelected}>OK</button>
    </Modal>
);

export default OptionModal