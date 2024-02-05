/* eslint-disable react/prop-types */
import { useState } from 'react';
import FieldText from '../FieldText';
import Button from '../Button';
import SuspenseList from '../SuspenseList';
import './Form.css';

const Form = ({ newCollaborator, times }) => {
  const [name, setName] = useState('');
  const [office, setOffice] = useState('');
  const [image, setImage] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    newCollaborator({
      name,
      office,
      image,
      time,
    });

    setName('');
    setOffice('');
    setImage('');
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <FieldText
          name={'Nome'}
          placeholder={'Digite seu nome'}
          onChange={(e) => setName(e.target.value)}
          value={name}
          required={true}
        />
        <FieldText
          name={'Cargo'}
          placeholder={'Digite seu cargo'}
          onChange={(e) => setOffice(e.target.value)}
          value={office}
          required={true}
        />
        <FieldText
          name={'Imagem'}
          placeholder={'Digite o endereço da imagem'}
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <SuspenseList
          name={'Time'}
          option={times}
          required
          onChange={(e) => setTime(e.target.value)}
          time={time}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
