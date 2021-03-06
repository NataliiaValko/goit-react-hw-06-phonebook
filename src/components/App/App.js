import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { useSelector } from 'react-redux';
import { getVisibleItems } from '../../redux/contacts/contacts-selector';
import Section from '../Section';
import Container from '../Container';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

import s from './App.module.css';

const App = () => {
  const visibleItems = useSelector(getVisibleItems);

  return (
    <>
      <ReactNotification />
      <header className={s.header}>
        <Container>
          <h1 className={s.title}>My phonebook</h1>
        </Container>
      </header>
      <Section nameForClass={'section'}>
        <div className={s.newContactWrapper}>
          <h2 className={s.newContactTitle}>A new contact</h2>
          <ContactForm />
        </div>
      </Section>
      <Section nameForClass={'sectionList'}>
        <h2 className={s.titleContacts}>Contacts</h2>
        <Filter />
        {visibleItems[0] ? (
          <ContactList />
        ) : (
          <p className={s.text}>There’s nothing here yet...</p>
        )}
      </Section>
    </>
  );
};

export default App;
