import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Time from './components/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [collaborators, setCollaborators] = useState([]);
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      favorite: false,
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: 'UX e Design',
      cor: '#DB6EBF',
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    },
  ]);

  const alterColorBackground = (color, id) => {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = color;
        }
        return time;
      })
    );
  };

  const deleteCollaborator = (id) => {
    setCollaborators(
      collaborators.filter((collaborators) => collaborators.id !== id)
    );
  };

  const registerTime = (newTime) => {
    setTimes([...times, { ...newTime, id: uuidv4() }]);
  };

  const handleFavorite = (id) => {
    setCollaborators(
      collaborators.map((collaborator) => {
        if (collaborator.id === id)
          collaborator.favorite = !collaborator.favorite;
        return collaborator;
      })
    );
  };

  return (
    <main>
      <Banner />
      <Form
        newCollaborator={(collaborator) =>
          setCollaborators([...collaborators, collaborator])
        }
        times={times.map((time) => time.nome)}
        registerTime={registerTime}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          name={time.nome}
          colorPrimary={time.cor}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.time === time.nome
          )}
          onChange={(e) => alterColorBackground(e.target.value, time.id)}
          handleDelete={() => deleteCollaborator(collaborators.id)}
          handleFavorite={handleFavorite}
        />
      ))}
    </main>
  );
}

export default App;
