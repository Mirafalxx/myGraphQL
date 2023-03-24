import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import Books from "./components/Books/Books";
import Navbar from "./components/UI/Navbar/Navbar";
import Hello from "./components/Hello/Hello";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateBook from "./components/CreateBook/CreateBook";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

const client = new ApolloClient({
  uri: "http://localhost:4000",
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
