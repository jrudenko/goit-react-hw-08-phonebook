import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Container, Section, TitleH1, TitleH2 } from './App.styled';


function App() { 
  return (
      <Container>
        <Section title="Phonebook">
        <TitleH1>Phonebook</TitleH1>
        <p>You can add new contacts below:</p>
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <TitleH2>Contacts</TitleH2>
          <Filter  />
          <ContactList />
        </Section>
      </Container>
    );
};

export default App;