import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeTemplate from './templates/HomeTemplate';
import AdminTemplate from './templates/AdminTemplate';
import { Suspense, lazy } from 'react';
import HomeLoading from './pages/Loading/HomeLoading';
const Home = lazy(() => import('./pages/Home'))
const Films = lazy(() => import('./pages/Films'));
const Cinemas = lazy(() => import('./pages/Cinemas'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route path='' element={<Suspense fallback={<HomeLoading />}><Home /></Suspense>} />
          <Route path='/movies/:type' element={<Suspense fallback={<HomeLoading />}><Films /></Suspense>} />
          <Route path='/cinemas/:cinema' element={<Suspense fallback={<HomeLoading />}><Cinemas /></Suspense>} />
          <Route path='/about' element={<Suspense fallback={<HomeLoading />}><About /></Suspense>} />
          <Route path='/contact' element={<Suspense fallback={<HomeLoading />}><Contact /></Suspense>} />
        </Route>
        <Route path='/admin' element={<AdminTemplate />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
