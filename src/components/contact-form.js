import React, { Component } from 'react';
import { Form, Grid, Button,Image } from 'semantic-ui-react';
import { Field, reduxForm} from 'redux-form';
import classnames from 'classnames';
import './contact-form';

const validate = (values) => {
  const errors = {name:{}};
  if(!values.words || !values.words) {
    errors.words = {
      message: 'You need to provide Word'
    }
  }
  if(!values.phone) {
    errors.phone = {
      message: 'You need to provide Explain'
    }
  }

  if(!values.email) {
    errors.email = {
      message: 'You need to provide Keyword'
    }
  }
  return errors;
}

class ContactForm extends Component {

  componentWillReceiveProps = (nextProps) => { // Load Contact Asynchronously
    const { contact } = nextProps;
    if(contact._id !== this.props.contact._id) { // Initialize form only once
      this.props.initialize(contact)
    }
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )

  render() {
    const { handleSubmit, pristine, submitting, loading, contact } = this.props;
    return (

      <Grid centered columns={2}>
        <Grid.Column>
        <Image  className='ui fluid image'src='http://localhost:3000/Roe_roe_stats.jpg' />
          <div style={{marginTop:"1em",fontSize:25,marginBottom:"1em"}}>{contact._id ? 'Edit Contact' : 'Add New Contact'}</div>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Form.Group widths='equal'>
                <Field name="words" type="text" component={this.renderField} label="Words"/>
            </Form.Group>
            <Form.Group widths='equal'>
                <Field  name="des" type="text"  component={this.renderField}label="Explain"/>
            </Form.Group>
            <Form.Group widths='equal'>
                <Field name="keyword" type="text" component={this.renderField} label="Keyword"/>
            </Form.Group>
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'contact', validate})(ContactForm);
