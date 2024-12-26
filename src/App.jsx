import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {

  return (
    <>
      <div className='w-full h-screen flex items-center flex-col my-auto'>
        <Header></Header>
          <div className='w-full'>
            <Outlet></Outlet>
          </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App