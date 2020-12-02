import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const Allmail = (props) => {
    return (
        <div>
            Allmail
            <ArrowBackIcon onClick={props.history.goBack}/>
        </div>
    )
}

export default Allmail;