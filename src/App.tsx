import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from './Home/HomeMain'
import Account from './Account/Account'
import UserHome from './UserHome/UserHomeMain'
import CreateGroup from "./CreateGroup/CreateGroupMain";
import JoinGroup from "./JoinGroup/JoinGroupMain";
import ChatPage from "./ChatPage/ChatPageMain";
import WordSearch from "./WordSearch/WordSearchMain";
import SimpleSearch from "./SimpleSearch/SimpleSearchMain";
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
            <Switch>
              <Route exact path="/UserHome" component={UserHome}>
                <UserHome />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/CreateGroup" component={CreateGroup}>
                <CreateGroup />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/JoinGroup" component={JoinGroup}>
                <JoinGroup />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/ChatPage" component={ChatPage}>
                <ChatPage />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/WordSearch" component={WordSearch}>
                <WordSearch />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/SimpleSearch" component={SimpleSearch}>
                <SimpleSearch />
              </Route>
            </Switch>
          </BrowserRouter>
        </AccountProvider>
      </>
    );
};

export default App;