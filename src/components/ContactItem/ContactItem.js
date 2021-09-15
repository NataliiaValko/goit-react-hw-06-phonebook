import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FiPhoneCall } from 'react-icons/fi';
import contactsActions from '../../redux/contacts/contacts-actions';

import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <a className={s.link} href="tel:{number}">
        <p className={s.name}>{name}</p>
        <div className={s.wrapper}>
          <FiPhoneCall className={s.icon} />
          <p className={s.number}>{number}</p>
        </div>
      </a>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(contactsActions.deleteContact(id))}
        aria-label="delete contact"
      >
        Delete
      </button>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
