import React from 'react';
import Store from './context/Store'
import Chart from "./views/Chart";


export default function App() {
  return (
    <Store>
      <Chart />
    </Store>
  );
}
