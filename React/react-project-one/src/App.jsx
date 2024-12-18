import React, { useState } from 'react';
import UserCard from './components/user_card';
import myImage from './assets/myimage.jpeg';
import Portfolio from './components/portfolio';
import './App.css';

function Button({ onSmash, children }) {
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <Button onSmash={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onSmash={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}
