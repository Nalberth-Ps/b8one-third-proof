import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthenticationContextProvider from "./context/AuthenticationContext";
import { client } from "./graphql/client";
import { AuthPage } from "./pages/auth";
import { Dashboard } from "./pages/dashboard";

import './styles/global.scss'

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AuthenticationContextProvider>
          <Switch>
            <Route exact path="/">
              <AuthPage />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </AuthenticationContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
