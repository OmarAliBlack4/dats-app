import './App.css';
import { Container } from 'react-bootstrap';
import Title from './components/Tiltle';
import Content from './components/Contnt';
import Buttons from './components/Buttons';
import { personsData } from './components/data';
import {  useEffect, useState } from 'react';

function App() {
  
  const [perData , setPerData] = useState(personsData);

  
  const showData = () =>{
    setPerData(personsData);
  }

  const deleteData = () =>{
    setPerData([]);
  }

  useEffect(()=>{
    setPerData([]);
  },[])

  return (
    <div className="App">
      <Container>
        <Title person={perData}/>
        <Content perData={perData} />
        <Buttons showData={showData} deleteData={deleteData} />
      </Container>
    </div>
  );
}

export default App;
