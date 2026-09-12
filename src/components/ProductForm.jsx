import React from 'react'
import {Button, defaultTheme, Provider, TextField, Form, ButtonGroup} from '@adobe/react-spectrum'
import axios from 'axios'

export default function ProductForm() {
  let [name, setName] = React.useState('');
  let [price, setPrice] = React.useState(0);
  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:1234/products', {name, price})
    .then(res => {console.log(res.data);})
  }
  return (
    <Provider theme={defaultTheme}>
      <form onSubmit={onSubmit} maxWidth="size-3000">
        <TextField label="Name" value={name} onChange={setName} /> <br/>
        <TextField label="Price" value={price} onChange={setPrice} /> <br/>
        <Button variant="cta" type="submit">Submit</Button>
      </form>
    </Provider>
  )
}
