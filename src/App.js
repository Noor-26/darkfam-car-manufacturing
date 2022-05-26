import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Navber from './components/Shared/Navber/Navber';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import Requireauth from './components/Shared/Requireauth/Requireauth';
import Blog from './components/Blog/Blog';
import Purchase from './components/Purchase/Purchase';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard/Dashboard';
import Myorder from './components/Dashboard/Myorder';
import Addreview from './components/Dashboard/Addreview';
import Myprofile from './components/Dashboard/Myprofile';
import UpdateProfile from './components/Dashboard/UpdateProfile';
import Manageallproducts from './components/Dashboard/Manageallproducts';
import Addproduct from './components/Dashboard/Addproduct';
import Manageorders from './components/Dashboard/Manageorders';
import Makeadmin from './components/Dashboard/Makeadmin';
import Notfound from './components/Notfound/Notfound';
import Payment from './components/Dashboard/Payment';
import Portfollio from './components/Portfollio/Portfollio';
  

function App() {
  return (
    <div className="App">
      <Navber/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/portfolio' element={<Portfollio/>}/>
      <Route path='/purchase/:id' element={<Requireauth>
          <Purchase/>
      </Requireauth>}/>
      <Route path="/dashboard" element={<Requireauth>
      <Dashboard/>
     </Requireauth>}>
      <Route index element={<Myprofile/>} />
       <Route path="addreview" element={<Addreview/>} />
       <Route path="myorder" element={<Myorder/>} />
       <Route path="payment/:_id" element={<Payment/>} />
       <Route path="updateprofile" element={<UpdateProfile/>} />
       <Route path="manageproduct" element={<Manageallproducts/>} />
       <Route path="addproduct" element={<Addproduct/>} />
       <Route path="manageallorder" element={<Manageorders/>} />
      <Route path="makeadmin" element={<Makeadmin/>} />
      </Route>
       
      <Route path="*" element={<Notfound/>} />
    </Routes>
    <Footer/>
    
    <ToastContainer />
  
    </div>
  );
}

export default App;
