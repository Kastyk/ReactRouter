import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Switch,
} from 'react-router-dom';

const Topic = () => {
  let { topicId } = useParams();
  return <h3>{topicId}</h3>;
};

const Topics = () => {
  let { url, path } = useRouteMatch();
  return (
    <Router>
      <div className="container">
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/:topicId`}>
            <Topic />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default Topics;
