import React from 'react';
import Option from './Option'

const Options = (props) => (            
    <div>
        <div className="widget-header">
            <h3>Your options</h3>
            <button 
                onClick={props.handleRemoveAll}
                className="button button--link"
            >
                Remove all
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please enter options.</p>}
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

export default Options;