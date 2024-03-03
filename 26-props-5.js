//Greeting.js
import React from 'react';

function Greeting(props) {
  if (props.signedIn == false) {
    return <h1>Please login.</h1>;
  } else {
    return (
      <>
        <h1>Welcome back, {props.name}!</h1>
        <article>
          Latest Movie: A Computer Bug's Life
        </article>
      </>
    )
  }
}

export default Greeting;

//App.js
import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <h1>
        MovieFlix
      </h1>
      <Greeting signedIn={false} name="Alison"/>
    </div>
  );
}

export default App;