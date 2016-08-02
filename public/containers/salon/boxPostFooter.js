import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../actions'

var ENTER_KEY_CODE = 13;

let BoxPostFooter = ({ dispatch }) => {
    let input

    return (
        <div className="box-footer">
            <form action="javascript:void(0);" method="post">
                <img className="img-responsive img-circle img-sm" src="http://placehold.it/128x128/DD4B39/ffffff" alt="Alt Text" />
                <div className="img-push">
                    <input
                        type="text" 
                        className="form-control input-sm" 
                        placeholder="Press enter to post comment" 
                        ref={node => {
                            input = node
                        }}
                        onKeyDown={(event) => {
                            if (event.keyCode == ENTER_KEY_CODE) {
                                dispatch(addComment(input.value));
                            }
                        }}
                    />
                </div>
            </form>
        </div>
    );
}

BoxPostFooter = connect()(BoxPostFooter)

export default BoxPostFooter
