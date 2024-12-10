import React, { useState } from 'react';
import './App.css';

const generatePassword = (length, includeLetters, includeNumbers, includeSymbols) => {
  let charset = '';
  if (includeLetters) {
    charset += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (includeNumbers) {
    charset += '0123456789';
  }
  if (includeSymbols) {
    charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
  }
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

function App() {
  const [length, setLength] = useState(12);
  const [includeLetters, setIncludeLetters] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(length, includeLetters, includeNumbers, includeSymbols);
    setPassword(newPassword);
  };

  const handleLengthChange = (e) => {
    setLength(parseInt(e.target.value));
  };

  return (
    <div className="App">
      <div className="card">
        <h1>Hoşgeldiniz, Şifre Oluşturucusu</h1>
        <div>
          <label>Şifre Uzunluğu:
            <input
              type="number"
              value={length}
              onChange={handleLengthChange}
              min="4"
              max="20"
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeLetters}
              onChange={(e) => setIncludeLetters(e.target.checked)}
            />
            Alfabe
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            Sayılar
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
            Semboller
          </label>
        </div>
        {password ? (
          <div>
            <input type="text" value={password} readOnly />
            <button onClick={handleGeneratePassword}>Tekrar Oluştur</button>
          </div>
        ) : (
          <button onClick={handleGeneratePassword}>Oluştur</button>
        )}
      </div>
    </div>
  );
}

export default App;
