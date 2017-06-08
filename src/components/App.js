import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {addReminder,deleteReminder} from '../actions';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text : ''
      ,dueDate : ''
    }
  }

  addReminder() {
    this.props.addReminder(this.state.text , this.state.dueDate);
    this.setState( {text : ''  });
  }

  deleteReminder (id) {
  //  console.log('this.props' , this.props);
    this.props.deleteReminder(id);
  }

  renderList() {
  //  console.log('renderList',this.props.reminders);

    return this.props.reminders.map( (reminder) => {
      return (<li key={reminder.id} className='list-group-item'>
      <div className='list-item'>
          <div>{reminder.text}</div>
          <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
      </div>

        <div className='list-item delete-button' onClick={() => this.deleteReminder(reminder.id)}>&#x2715;</div>
      </li>);
    }) ;
  }

  render() {
    //console.log('props' , this.props);
    return (
      <div className=" App">
        <div className=" title">
          Reminder Pro
        </div>
        <div className='form-inline'>
            <div className='form-group' >
            <input
              className='form-control'
              placeholder="I have to..."
              onChange={event => this.setState({text : event.target.value})}
                value={this.state.text}
              />
              <input
                className='form-control'
                 type='datetime-local'
                 onChange={event => this.setState({dueDate : event.target.value})}
                   value={this.state.dueDate}
                />
           </div>
           <button type='button' disabled={!this.state.text} className="btn btn-success" onClick={this.addReminder.bind(this)} >Add Reminder </button>

        </div>
        <hr/>
        <ul className='list-group col-sm-4'>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state) {
  console.log('state' , state);
  return {
     reminders : state
  };
}


export default connect(mapStateToProps , {addReminder,deleteReminder})(App);
