import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Shop from './components/Shop'
import Landing from './components/Landing'
import Cart from './components/Cart'

export default (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/cart" component={Cart}/>
    </Switch>
)