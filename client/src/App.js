import React from 'react';

//router 
import {Switch, Route} from 'react-router-dom'

//components
import {SongList} from './components/SongList'
import {SongCreator} from './components/SongCrator'

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/song/create" component={SongCreator} />
        <Route path="/" component={SongList} />
      </Switch>
    </div>
  )
}

export default App;
