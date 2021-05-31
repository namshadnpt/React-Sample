import React, { useState } from 'react'
import Basics from './pages/Basics'
import Page from './pages/Page'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
/* For Use Button -> Import Roter in Parent js, Import useHistory and define a const history = useHistory(), Then <button onClick='history.push('/page')'> */
import {AppContext} from './AppContext'
/* Context API -> useContext  Ref:- "Medium" Websited*/
function App() {
  const [state, setstate] = useState(10)
  return (
    <div>
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/basics'>Basics</Link>
        <Link to='/page'>Page</Link>
      <AppContext.Provider value={{data:state}}>
        <Route component={Basics} path='/basics'></Route>
        <Route path='/page'>
          <Page></Page>
        </Route>
        <Route render={() => <h1>Teest</h1>} path='/test1'></Route>
        </AppContext.Provider>
      </Router>
    </div>
  )
}

export default App
