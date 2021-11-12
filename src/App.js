//apollo configuration
import ApolloClient from 'apollo-boost'
import { useState } from 'react';
import { ApolloProvider } from "react-apollo"
import AddBook from "./components/AddBook";


//components
import BookDetail from "./components/BookDetail";
import BookList from "./components/BookList"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  const [selected, setSelected] = useState()
  return (
    <ApolloProvider client={client}>
      <div className="container" id="main">
        <h1>Hello world</h1>
        <div className="row">

          <div className="col">
            <BookList setSelected={setSelected} />
            <AddBook selected={selected} />

          </div>
          <div className="col">
            <BookDetail selected={selected} />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
