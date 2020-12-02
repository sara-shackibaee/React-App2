import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const Inbox = (props) => {
    return (
        
        <ArrowBackIcon onClick={props.history.goBack}/>
           
        
    )
}

export default Inbox ;