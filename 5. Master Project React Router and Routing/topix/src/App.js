import './App.css';
import { Route, Routes, Link } from 'react-router-dom';


const HomePage = props => {
  console.log(props);
  return (
    <div>
      <h1>HOME PAGE</h1>
      <Link to="/topics"> Topics</Link>
    </div>
  );
};

const TopicsList = () => {
  return (
    <div>
      <h1>TOPICS LIST PAGE</h1>
      <Link to="/topics/details"> Go to Details</Link>
    </div>
  );
};

const TopicDetail = (props) => {
  return (
    <div>
      <p>
        <h3>Brief Details</h3>
        TOPIC DETAIL PAGE :{<br></br>}{<br></br>}
        Here are the details {<br></br>}
      </p>

    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/topics" element={<TopicsList />} />
        <Route exact path="/topics/:topicId" element={<TopicDetail />} />
      </Routes>

    </div>
  );
}

export default App;
