import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Spam = (props) => {
    return (
        <div>
            <ArrowBackIcon onClick={props.history.goBack}/>
        </div>
    )
}

export default Spam;