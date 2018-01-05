import React from 'react';
import { Card, Button, Icon,Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


export default function ContactCard({contact, deleteContact}) {
  let rand = Math.floor(Math.random() * 28); 
  return (
    <Card >
      <Card.Content>
          <div  style={{fontSize:25,marginBottom:"1em"}}>
                <Image src={"http://localhost:3000/randomitem/item ("+ rand +").gif"} width="25" height="25"/> {contact.words}
          </div>
        <Card.Description>
          <p><Icon name='comment'/> {contact.des}</p>
          <p><Icon name='tags'/> {contact.keyword}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link to={`/contacts/edit/${contact._id}`} className="ui basic button green">Edit</Link>
          <Button basic color="red" onClick={() => deleteContact(contact._id)} >Delete</Button>
        </div>
      </Card.Content>
    </Card>
  )
}

ContactCard.propTypes = {
  contact: React.PropTypes.object.isRequired
}
