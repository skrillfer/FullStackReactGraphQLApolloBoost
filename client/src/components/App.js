import React from 'react';
import { Query } from 'react-apollo';

import { GET_ALL_RECIPIES } from '../queries';

import './App.css';

const App = () => (
  <div className='App'>
    <h1>Home</h1>
    <Query query={GET_ALL_RECIPIES}>
      {({ data, loading, error }) =>{
        if(loading) return <div>Loading</div>
        if(error) return <div>Error</div>
        console.log(data);
        return (
          <React.Fragment>

          <p>Recipes</p>
          {data.getAllRecipes.map(({name,description})=>
            <div>
              <span>{name}</span>
              <span>{description}</span>
            </div>
          )}
          </React.Fragment>
        )
      }}
    </Query>
  </div>
);

export default App;
