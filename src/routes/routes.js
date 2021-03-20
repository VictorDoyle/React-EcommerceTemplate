import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* Pages */
import Homepage from '../pages/Homepage'
import NotFound from '../pages/NotFound'
import Shop from '../pages/Shop'
import Collections from '../pages/Collections'
export default (
    <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route path='/collections' component={Collections} />
        {/* 404 route */}
        <Route component={NotFound} />
    </Switch>
)

