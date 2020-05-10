import React from 'react';
//import logo from './logo.svg';
import ListContacts from './ListContacts'
import './App.css';
import * as ContactsAPI from './utils/ContactsAPI'

class App extends React.Component {
  state = {
    contacts: []
  };
  
  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState(() => ({
        contacts
      }))
    })
  }

  deleteContact = (contactToDelete) => {
        this.setState((prevState) => ({
          contacts: prevState.contacts.filter(contact => contact.id !== contactToDelete.id)  
        }));
        ContactsAPI.remove(contactToDelete);
  }

  render() {
    return (
        <div>
        <ListContacts contacts={this.state.contacts} onClick={this.deleteContact}/>
      </div>
    );
  }
}

export default App;
