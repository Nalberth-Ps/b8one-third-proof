import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { client } from "./graphql/client";
import { AuthPage } from "./pages/auth";

import './styles/global.scss'

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
          <Switch>
            <Route path="/">
              <AuthPage />
            </Route>
          </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
