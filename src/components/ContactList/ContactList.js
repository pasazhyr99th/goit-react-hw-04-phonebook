import React from 'react';
import PropTypes from 'prop-types';
import { ListContainer, ListItem, ListDeleteBtn } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ListContainer>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>
            {name}: {number}
          </p>
          <ListDeleteBtn onClick={() => onDeleteContact(id)}>Delete</ListDeleteBtn>
        </ListItem>
      ))}
    </ListContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;