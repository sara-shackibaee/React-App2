import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Sendemail = (props) => {
    return (
        <div>
            Sendemail
            <ArrowBackIcon onClick={props.history.goBack}/>

        </div>
    )
}

export default Sendemail;