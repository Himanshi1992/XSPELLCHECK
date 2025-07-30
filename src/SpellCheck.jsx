import React, { useState, useEffect } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

function XSpellCheck() {
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  useEffect(() => {
    if (text.trim() === '') {
      setSuggestion('');
      return;
    }

    const words = text.split(/\s+/); 
    for (let word of words) {
      const lowerWord = word.toLowerCase();
      if (customDictionary[lowerWord]) {
        setSuggestion(`Did you mean: ${customDictionary[lowerWord]}?`);
        return;
      }
    }
    setSuggestion('');
  }, [text]);

  return (
    <div style={{ width: '400px', margin: '50px auto', fontFamily: 'Arial' }}>
      <h2>Spell Checker</h2>
      <textarea
        rows="5"
        cols="50"
        placeholder="Type something here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      {suggestion && (
        <p style={{ color: 'red', marginTop: '10px' }}>{suggestion}</p>
      )}
    </div>
  );
}
export default XSpellCheck;
