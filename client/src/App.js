import React from 'react';

//router 
import {Switch, Route} from 'react-router-dom'

//components
import {SongList} from './components/SongList'
import {SongCreator} from './components/SongCreator'
import {SongDetails} from './components/SongDetails'

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/songs/creator" component={SongCreator} />
        <Route path="/songs/:id" component={SongDetails}/>
        <Route path="/" component={SongList} />
      </Switch>
    </div>
  )
}

export default App;
