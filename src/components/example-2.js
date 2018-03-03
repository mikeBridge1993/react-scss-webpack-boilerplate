import React from 'react';

const Options = (props) => {
  return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button onClick={props.handleDeleteOptions} className="button button--link">Remove All</button>
            </div>
            {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
            {
                    props.options.map((el, index) => {
                        return <Option key={el} count={index + 1} handleDeleteOption={props.handleDeleteOption} optionText={el}/>;
                    })
            }
        </div>
  );
}

export default Options;
