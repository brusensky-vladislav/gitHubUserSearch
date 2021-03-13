import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './components/toolbar';
import Search from './components/search';
import './index.css';
import './components/app.css';

import { createStore } from 'redux'
import { Provider, connect } from 'react-redux';

const initialState = {
  searchStr: '',
}

const ACTION_CHANGE_SEARCH_STR = 'ACTION_CHANGE_SEARCH_STR';


const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_CHANGE_SEARCH_STR:
      return {...state, searchStr: action.payload};
  }
  return state;
};

const store = createStore(rootReducer);

class App extends React.Component {
  render () {
      return (
          <section id="page" className="container">
              <header>
                  <Toolbar text={'GitHub Search'} />
              </header>
              <main>
                  <Search searchStr={this.props.searchStr} dispatch={this.props.dispatch}/>
              </main>
          </section>);
  }
}

const mapStatetoProps = (state) => {
  return {
      searchStr: state.searchStr,
  }
}

const WrappedMainComponent = connect(mapStatetoProps)(App);

ReactDOM.render( 
  <Provider store={store}>
    <WrappedMainComponent />
  </Provider>,
  document.getElementById('root')
);