import React, { useState } from 'react';
import app_style from '../styles/Home.module.css';

export default function Home() {
  const [ test, setTest ] = useState(0);
  return (
    <div className={app_style.test}>
      <h1 className={app_style.test_h1}>This is your test number :</h1>
      <h3 className={app_style.test_num}>{ test }</h3>
      <div className={app_style.da_button_list}>
        <button onClick={() => setTest(test + 1)}>Add 1</button>
        <button onClick={() => {
          if (test > 0) {
            setTest(test - 1)
          }
        }}>Remove 1</button>
        <button onClick={() => setTest(0)}>Reset</button>
      </div>
    </div>
  )
}
