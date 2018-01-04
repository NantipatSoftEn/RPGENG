import React, { Component} from 'react';
import { connect } from 'react-redux';
import ContactList from '../components/contact-list';
import { fetchContacts, deleteContact } from '../actions/contact-actions';
import { Image } from 'semantic-ui-react';

class ContactListPage extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div>
      <Image src='http://localhost:3000/logho.jpg' />
        <h1>List of Contacts</h1>
        <ContactList contacts={this.props.contacts}
        loading={this.props.loading}
        errors={this.props.errors}
        deleteContact={this.props.deleteContact}/>
      </div>
    )
  }
}

// Make contacts  array available in  props
function mapStateToProps(state) {
  return {
      contacts : state.contactStore.contacts,
      loading: state.contactStore.loading,
      errors: state.contactStore.errors
  }
}

export default connect(mapStateToProps, {fetchContacts, deleteContact})(ContactListPage);
