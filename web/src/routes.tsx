import react from 'react';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

import{BrowserRouter, Switch, Route}from 'react-router-dom';


function Routes(){

return(
    <BrowserRouter>
    <Route path="/" component = {Landing}/>
    <Route path="/app" component = {OrphanagesMap}/>
    </BrowserRouter>
);
}

export default Routes;