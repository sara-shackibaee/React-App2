import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const Starred = (props) => {
    return (
        <div>
           <ArrowBackIcon onClick={props.history.goBack}/>

        </div>
    )
}

export default Starred;