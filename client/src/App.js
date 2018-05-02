import React, { Component } from 'react';
import ApolloCient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'

//Components
import BookList from './components/BookList';
import AddBook from './components/addBook'

//Apollo Setup
const client = new ApolloCient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Reading List</h1>
          <BookList/>
          <AddBook/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
