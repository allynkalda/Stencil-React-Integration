import React from 'react';
import './App.css';
import 'accordion-stencil-component';


function App() {

  const array = [
    {
      label: 'Accordion 1',
      description: 'Lorem ipsum',
      color: '#439ECA',
      width: '300px'
    },
    {
      label: 'Accordion 2',
      description: 'Lorem ipsum',
      color: '#7EC74A',
      width: '300px'
    },
    {
      label: 'Accordion 3',
      description: 'Lorem ipsum',
      color: '#F8CD41',
      width: '300px'
    }
  ]
  return (
    <div className="App">
      {
        array.map((array) => {
          return (
            <my-accordion 
            label={array.label}
            description={array.description}
            color={array.color}
            width={array.width}>
            </my-accordion>
          )
        })
      }
    </div>
  );
}

export default App;
