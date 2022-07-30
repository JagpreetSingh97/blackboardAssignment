import './App.css';
import ToggleChallenge from './components/ToggleChallenge';
import UserData from './components/UserData';
import UsersList from './components/UsersList';
import Parent from './components/Parent';
import Child from './components/Child';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Blackboard - React Assignment Questions</h1>
      <h3> Click on Answer link to see the respective answers.</h3>
      <Router>
        <ul>
          <li className='strong'> Question 1 :  Given below is a list of users. Display this list in the browser in the descending order of their salaries.<br />
            <Link to="/Answer1">Answer 1</Link>
          </li>
          <li className='strong'> Question 2 : Create a button which when clicked should toggle (show/hide) the string `Toggle Challenge` each time it is pressed.<br />
            <Link to="/Answer2">Answer 2</Link>
          </li>
          <li className='strong'> Question 3 : Complete the Code Challenge.<br />
            <Link to="/Answer3">Answer 3</Link>
          </li>
          <li className='strong'> Question 4 : Use the URL given below and GET data from the API. After the data is fetched, populate the data. <br />
            <Link to="/Answer4">Answer 4</Link>
          </li>
        </ul>
        <hr />
        <div className='align-center'>
          <Routes>
            <Route path="/Answer1" element={<UsersList />} />
            <Route path="/Answer2" element={<ToggleChallenge />} />
            <Route path="/Answer3" element={
              <Parent>
                <Child />
              </Parent>} />
            <Route path="/Answer4" element={<UserData />} />
          </Routes>
        </div>
      </Router>
    </div>
  );

}


export default App;
