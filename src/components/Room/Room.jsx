import React, { useState } from 'react';

export function Room() {
  const [toggle, setToggle] = useState(true);
  const [paragraph, setCondition] = useState("The room is lit");
  const [buttonText, setButtonText] = useState("Licht aus");

  const toggleLightText = () => {
    setToggle(!toggle);
    if (toggle) {
      setCondition('The room is dark');
    } else {
      setCondition('The room is lit');
    }
    setToggle(!toggle);
    if (toggle) {
      setButtonText('Licht aus!');
    } else {
      setButtonText('Licht an!');
    }
  };

  return (
    <div className={ toggle ? 'lit' : 'dark'}>
      <div className='room'>
      <p>{paragraph}</p>
      <button onClick={toggleLightText}>{buttonText}</button>
      </div>
    </div>
  );
}
