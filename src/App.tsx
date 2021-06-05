import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from './Home/HomeMain'
import Account from './Account/Account'
import { AccountProvider } from "./Context/AccountContext";

const App:React.FC = () => {
    return (
      <>
        <AccountProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home}>
                <Home />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/Account" component={Account}>
                <Account />
              </Route>
            </Switch>
          </BrowserRouter>
        </AccountProvider>
      </>
    );
};

export default App;