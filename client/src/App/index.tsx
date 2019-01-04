import React, { Component } from 'react';
import GraphQLProvider from './subcomps/GraphQLProvider';
import TeacherList from '../components/TeacherList';

class App extends Component {
  public render() {
    return (
      <GraphQLProvider>
        <TeacherList />
      </GraphQLProvider>
    );
  }
}

export default App;
