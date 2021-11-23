import React from 'react';
import SelectEmployee from './components/select-employee/SelectEmployee';
import DatePicker from './components/datepicker/DatePicker';

const App = () => {
  return (
    <div className='App'>
      <SelectEmployee />
      <DatePicker />
    </div>
  );
};

export default App;
