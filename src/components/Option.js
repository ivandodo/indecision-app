import React from 'react';

const Option = (props) => (            
    <div className="option">
        <p className="option__text">
            {props.count}. {props.optionText}
        </p>
        <button 
            onClick={(e) => {
                props.handleRemove(props.optionText)
            }}
            className="buton button--link"
        >
            Remove
        </button>
    </div>
);

export default Option;