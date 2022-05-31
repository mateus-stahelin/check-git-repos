// import React from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';

// import Home from './pages/Home';
// import Repositories from './pages/Repositories';

// export default function RoutesApp() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path='/' element={<Home/>} />
//                 <Route path='/repositories' element={<Repositories/>} />
//             </Routes>
//         </BrowserRouter>
//     );
// }

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Repositories from './pages/Repositories';
import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/repositories' component={Repositories} />
      </Switch>
    </BrowserRouter>
  )
}