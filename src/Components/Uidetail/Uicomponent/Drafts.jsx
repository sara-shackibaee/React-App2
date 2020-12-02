import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const Drafts = (props) => {
    return (
        <div>
            Drafts
            <ArrowBackIcon onClick={props.history.goBack}/>

        </div>
    )
}

export default Drafts