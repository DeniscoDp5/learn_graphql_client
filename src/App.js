// const { default: BookList } = require("./components/BookList");
import BookList from "./components/BookList"

//apollo configuration
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from "react-apollo"
import AddBook from "./components/AddBook";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Hello world</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
