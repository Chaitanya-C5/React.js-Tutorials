import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Home from './components/Home';
//import About from './components/About';
import Navbar from './components/Navbar';
import NavLinkBar from './components/NavLinkBar';
import Contact from './components/Contact';
import Email from './components/Email';
import NoMatchFound from './components/NoMatchFound';
import Products from './components/Products';
import Featured from './components/Featured';
import New from './components/New';
import Feedback from './components/Feedback';
import Users from './components/Users';
import Details from './components/Details';
import Admin from './components/Admin';
import Profile from './components/Profile';
import AuthProvider from './components/Auth';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';
const LazyAbout = lazy(() => import('./components/About'));

function App() {
  return (
      <div>
        <AuthProvider>
          <NavLinkBar />
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/about' element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyAbout />
              </Suspense>
            } />
            <Route path='/email-confirm' element={<Email />} />
            <Route path='*' element={<NoMatchFound />} />
            <Route path='/products' element={<Products />}>
              <Route index element={<Feedback />} />
              <Route path='feedback' element={<Feedback />} />
              <Route path='featured' element={<Featured />} />
              <Route path='new' element={<New />} />
            </Route>

            <Route path='/users' element={<Users />}>
              <Route path=':userId' element={<Details />} />
              <Route path='admin' element={<Admin />} />  
            </Route>

            <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path='/login' element={<Login />} />
            
          </Routes>
          {/* <Navbar /> */}
          
          {/* <Contact /> */}

        </AuthProvider>
      </div>    

  )
}

export default App