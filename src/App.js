import React from 'react';
import { ApolloProvider} from "react-apollo";
import client from "./aplloClient";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App"/>
    </ApolloProvider>
  );
}

export default App;
