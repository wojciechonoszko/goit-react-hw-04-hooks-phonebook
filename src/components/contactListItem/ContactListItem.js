import React from 'react';
import {ButtonListItem} from '../contactForm/ContactFormStyles';
import {ContactListItemContainer} from './ContactListItemStyles';
import PropTypes from 'prop-types';


export default function ContactListItem({ contactName, contactNumber, delContact }) {
    return (
        <ContactListItemContainer>
            <p className="contactListItemText">
                {contactName}: {contactNumber}
            </p>
            <ButtonListItem type="button" onClick={delContact}>
            Delete
            </ButtonListItem>
            </ContactListItemContainer>
    )
}

ContactListItem.propTypes = {
    contactName: PropTypes.string.isRequired,
    contactNumber: PropTypes.string.isRequired,
    del: PropTypes.func.isRequired,
};


// const ContactListItem = ({name, number, deleteContact}) => {
//     return(
//             <ContactListItemContainer>
//             <p className="contactListItemText">
//                 {name}: {number}
//             </p>
//             <ButtonListItem type="button" onClick={deleteContact}>
//             Delete
//             </ButtonListItem>
//             </ContactListItemContainer>
        
//     );
// };

// ContactListItem.propTypes = {
//     deleteContact: PropTypes.func.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired
// };

// export default ContactListItem;