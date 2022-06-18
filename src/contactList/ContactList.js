import React from 'react';
import PropTypes from 'prop-types';
import {v4 as uuid} from 'uuid';
import ContactListItem from '../components/contactListItem/ContactListItem';
import { ContactListCnt } from '../components/contactListItem/ContactListItemStyles';


const ContactList = ({contacts, deleteContact}) => {
  return (
    <ContactListCnt>
      {contacts.map(contact => (
        <ContactListItem
          name={contact.name}
          number={contact.number}
          key={uuid()}
          deleteContact={() => deleteContact(contact.id)}
        />
      ))}
    </ContactListCnt>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  )
};


export default ContactList;