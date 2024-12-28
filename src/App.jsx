import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {

  // hooks declare here ---->
  const location = useLocation();

  return (
    <>
      <div className='w-full h-screen flex items-center flex-col my-auto'>
        {
          location.pathname === '/auth/sign_up' || location.pathname === '/auth/sign_in'
          ?
            ''
          :
          <Header></Header>
        }
          <div className='w-full'>
            <Outlet></Outlet>
          </div>
        {
          location?.pathname === '/auth/sign_up' || location.pathname === '/auth/sign_in'
          ?
            ''
          :
          <Footer></Footer>
        }  
      </div>
    </>
  )
}

export default App