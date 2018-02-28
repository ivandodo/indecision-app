import React from 'react';
import Option from './Option'

const Options = (props) => {
    return (            
    <div>
        <button onClick={props.handleRemoveAll}>Remove all</button>
        {props.options.length === 0 && <p>Please enter options.</p>}
        {
            props.options.map( (option) =>
                <Option 
                    key={option} 
                    optionText={option} 
                    handleRemove={props.handleRemove}
                />
            )
        }
    </div>
    )
}

export default Options;