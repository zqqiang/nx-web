import React from 'react'
import { connect } from 'react-redux'
import { postMessage } from '../../actions'

let ENTER_KEY_CODE = 13;

let BoxFooterChat = ({ dispatch }) => {
    let input;

    return (
        <div className="box-footer">
            <div className="input-group">
                <input 
                    type="text" 
                    name="message" 
                    placeholder="Type Message ..." 
                    className="form-control"
                    ref={node => { input = node }}
                    onKeyDown={(event) => {
                        if (event.keyCode == ENTER_KEY_CODE) {
                            dispatch(postMessage(input.value, 'ADD_MESSAGE'));
                        }
                    }} />
                <span className="input-group-btn">
                    <button 
                    type="button" 
                    className="btn btn-warning btn-flat" 
                    onClick={(event) => {dispatch(postMessage(input.value, 'POST_MESSAGE'));}} >
                    Send
                </button>&nbsp;
                </span>
            </div>
        </div>
    )
}

BoxFooterChat = connect()(BoxFooterChat)

export default BoxFooterChat;
