

import React, { Component } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { MuiThemeProvider} from '@material-ui/core/styles';
import Findcomp from './Findcomp'
class Paginbutton extends Component {
  constructor(props) {
    super(props);

    this.state = {
        // selectedRowSize: 20,
        totalpage:20,
        number:1,
        selectpage:1
    }
}
clickpaginathon = (e)=>{
    console.log(e.target.innerText)
    this.setState({selectpage:e.target.innerText})
}
render() {
    

    return (
        <MuiThemeProvider>
            <div className="App">
                <Pagination  page={this.state.number} count={this.state.totalpage} onClick={this.clickpaginathon}/>
            </div>
            {/* <p>{this.state.number}</p>
            <p>{this.state.selectpage}</p> */}
            <Findcomp selectpage={this.state.selectpage}/>
        </MuiThemeProvider>
    );
}




}


export default Paginbutton;