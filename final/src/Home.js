import React, { Component } from 'react';
import './App.css'; 
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as tripActions from './actions/WinnerAction';
import api from './api'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
          winners: [],
         
        };
    }
    componentDidMount(){
       /* api.getWinners((winner) => {
          this.setState({
            winners: winner
          });
        });*/
        this.props.onGetWinners();

      }
    
   render() {
    var items = this.props.winners.map((comment, index) =>
    <li key={index}>
   
    <label>Player : {comment.name}</label><br/>
    <label> Time: {comment.created_at}</label>

    </li>
    );
      return (
      
       <div>

           <ul><p className="items">{items}</p>
           </ul>
       </div>
     
      );
   }
}


const mapStateToProps = state => ({
  winners: state.trips.items   
  
})

const mapDispatchToProps =  {
  onGetWinners: tripActions.getWinners
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home));