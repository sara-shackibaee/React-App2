import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const Trash = (props) => {
    return (
        <div>
            Trash
            <ArrowBackIcon onClick={props.history.goBack}/>

        </div>
    )
}

export default Trash;