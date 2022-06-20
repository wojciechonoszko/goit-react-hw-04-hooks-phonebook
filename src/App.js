import React, { Component } from 'react';

import { useState, useEffect } from "react";
import ContactForm from './components/contactForm/ContactForm';
import Filter from './components/filter/Filter';
import ContactList from './contactList/ContactList';
import {v4 as uuid} from 'uuid';
import { PhonebookContainer, ContactsContainer } from './components/contactForm/ContactFormStyles';


export default function App() {
    const [contacts, setContacts] = useState([
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    ]);

    const [filter, setFilter] = useState("");

    useEffect(() => {
        console.log("use");
        const contact = localStorage.getItem("contact");
        const contactsParsed = JSON.parse(contact);
        if (contactsParsed) {
            setContacts(contactsParsed);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("contact", JSON.stringify(contacts));
    });

    const formSubmitHandler = (data) => {
        const { name, number } = data;
        const newContact = {
            name,
            number,
            id: uuid(),
        };
        if (
            contacts.find(
                (contact) =>
                contact.name.toLowerCase() === newContact.name.toLowerCase()
            )
        ) {
            return alert(`${newContact.name} is already in contacts.`)
        }
        setContacts([newContact, ...contacts]);
    };

    const filterInput = (e) => {
        setFilter(e.currentTarget.value);
    };

    const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const deleteButton = (contactId) => {
        setContacts((prevState) =>
            prevState.filter((contact) => contact.id !== contactId)
        );
    };

        return (
            <div>
                <PhonebookContainer>
                    <h1>Phonebook</h1>
                    <ContactForm onSubmit={formSubmitHandler}/>
                </PhonebookContainer>
                <ContactsContainer>
                    <h2>Contacts</h2>
                    <Filter data={filterInput}/>
                    <ContactList
                    data={filterContacts}
                    deleteButton={deleteButton}
                    />
                </ContactsContainer>
                
            </div>
        );
      
    
    
}


// class App extends Component {

// state = {
//     contacts: [
//       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//       {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
//     ],
//     filter: ''
// };

// addNewContact = ({name,number}) => {
//     if (this.state.contacts.some(contact => contact.name === name)) {
//         alert(`${name} is already in contacts.`);
//         return;
//     }

//     this.setState(prevState => {
//         const newContacts = [
//             ...prevState.contacts,
//             {id: uuid(), name: name, number: number}
//         ];
//         return {contacts: newContacts};
//     });
// };

// getFilteredContacts = () =>
//     this.state.contacts.filter(contact =>
//         contact.name
//         .toLowerCase()
//         .includes(this.state.filter.toLowerCase().trim())
//     );

// handleChange = event => {
//     this.setState({[event.target.name]: event.target.value});
// };

// deleteContact = id => {
//     this.setState(prevState => ({
//         contacts: prevState.contacts.filter(contact => contact.id !== id)
//     }))
// };

// render() {
//     return (
//         <div>
//             <PhonebookContainer>
//                 <h1>Phonebook</h1>
//                 <ContactForm addNewContact={this.addNewContact}/>
//             </PhonebookContainer>
//             <ContactsContainer>
//                 <h2>Contacts</h2>
//                 <Filter filter={this.state.filter} handleChange={this.handleChange}/>
//                 <ContactList
//                 contacts={this.getFilteredContacts()}
//                 deleteContact={this.deleteContact}
//                 />
//             </ContactsContainer>
            
//         </div>
//     );
// }
// }

// export default App