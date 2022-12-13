import React from 'react';

import GoalList from './components/GoalList/GoalList.js';
import NewGoal from './components/NewGoal/NewGoal.js';
import './App.css';

const App = () => {
  const courseGoals = [
    { id: 'cg1', text: 'Finish the course Ivan' },
    { id: 'cg2', text: 'Finish the course you will be more expert in React' },
    { id: 'cg3', text: 'Finish the course make you more expert ' },
  ];

  const addNewGoalHandler = (newGoal) => {
    courseGoals.push(newGoal);
  }


  return (
    // <h1 title="This work">Hallo Ivan</h1>  // React.createElement('h1', {}, 'Hallo von meine seite')
    <div className='course-goals'>
      
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals}/>
      
    </div>
  );
}

export default App;
