import React from 'react';

const fiftyFifty = Math.random() < 0.5;
let phrase;
// New function component starts here
function TonightsPlan() {
  
    if (fiftyFifty===true) {
       phrase= <h1>Tonight I'm going out WOOO</h1>;
    } else {
        phrase= <h1>Tonight I'm going to bed WOOO</h1>;
    }

    return phrase;
}

export default TonightsPlan;