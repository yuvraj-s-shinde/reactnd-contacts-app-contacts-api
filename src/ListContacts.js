import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ListContacts extends React.Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onClick: PropTypes.func.isRequired
    }
    
    state = {
        query: ''
    }

    onClick = (contact) => {
        this.props.onClick(contact)
    }

    updateQuery = (text) => {
        this.setState({
            query: text.trim()
        })
    }

    clearQuery = () => {
        this.setState({
            query: ''
        })
    }

    render() {
        const contacts = this.props.contacts;
        const query = this.state.query;
        const filteredContacts = (query === '') ? contacts:
        contacts.filter((contact) => (contact.name.toLowerCase().includes(query.toLowerCase())));

        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input
                    className='contacts-input'
                    type='text'
                    placeholder='Search Contacts'
                    value={query}
                    onChange={event => this.updateQuery(event.target.value)}    
                    />
                </div>
                {filteredContacts.length !== contacts.length && 
                <div>
                    <span>{filteredContacts.length} of {contacts.length} contacts displayed</span>
                    <button onClick={this.clearQuery}>Show all</button>
                </div>}
                <ol className='contact-list'>
                    {filteredContacts.map(contact => (
                        <li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar'
                                style={{
                                    backgroundImage: `url(${contact.avatarURL})`
                                }}
                            ></div>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button className='contact-remove' onClick={()=> this.onClick(contact)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
  };


  export default ListContacts;

  class FavouriteMovies extends Component {
    render() {
       return (
       <ol>
             {this.props.profiles.map(profile => (
         <li key={profile.id}>{`${this.props.users[parseInt(profile.userID)].name}'s favorite movie is ${this.props.movies[parseInt(profile.favoriteMovieID)].name}`}
         </li>
       ))}
       </ol>
       )
   }
};
