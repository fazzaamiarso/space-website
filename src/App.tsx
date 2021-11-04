import { Switch, Route, Redirect } from "react-router-dom";
import Crew from "./Components/Crew/Crew";
import Destination from "./Components/Destination/Destination";
import ErrorBoundary from "./Components/ErrorBoundary";
import Header from "./Components/Header/Header";
import HomePage from "./Components/Home/HomePage";
import Tech from "./Components/Technology/Tech";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/destination">
            <Destination />
          </Route>
          <Route path="/crew">
            <Crew />
          </Route>
          <Route path="/technology">
            <Tech />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </ErrorBoundary>
    </>
  );
};

export default App;
