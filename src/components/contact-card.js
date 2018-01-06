import React from 'react';
import { Card, Button,Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


export default function ContactCard({contact, deleteContact}) {
  let rand = Math.floor(Math.random() * 121);
  return (
    <Card >
      <Card.Content>
          <div  style={{fontSize:25,marginBottom:"1em"}}>
                <Image src={"http://localhost:3000/randomitem/item ("+ rand +").gif"} width="25" height="25"/> {contact.words}
          </div>
        <Card.Description>
          <p> <Image src={"http://localhost:3000/611.gif"} width="25" height="25"/> &nbsp;{contact.des}</p>
          <p><Image src={"http://localhost:3000/15403698.png"} width="25" height="25"/> &nbsp;{contact.keyword}</p>
          <p><Image src={"http://localhost:3000/nv_basic.gif"} width="25" height="25"/> &nbsp;{contact.exam}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link to={`/contacts/edit/${contact._id}`} className="ui basic button green">﻿Ｅｄｉｔ</Link>
          <Button basic color="red" onClick={() => deleteContact(contact._id)} >﻿Ｄｅｌｅｔｅ</Button>
        </div>
      </Card.Content>
    </Card>
  )
}

ContactCard.propTypes = {
  contact: React.PropTypes.object.isRequired
}
