import { ApolloProvider, InMemoryCache, ApolloClient, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Books from "./components/Books/Books";
import Navbar from "./components/UI/Navbar/Navbar";
import Hello from "./components/Hello/Hello";
import { Route, Routes } from "react-router-dom";
import CreateBook from "./components/CreateBook/CreateBook";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import "./App.css";

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/books" element={<Books />} />
          <Route path="/create" element={<CreateBook />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
