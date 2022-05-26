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

import Notfound from './components/Notfound/Notfound';
import Myprofile from './components/Dashboard/Profile/Myprofile';
import Myorder from './components/Dashboard/Orders/Myorder';
import UpdateProfile from './components/Dashboard/Profile/UpdateProfile';
import Payment from './components/Dashboard/Payment/Payment';
import Addreview from './components/Dashboard/Add/Addreview';
import Portfollio from './components/Portfollio/Portfollio';
import RequireAdmin from './components/Shared/RequireAdmin/RequireAdmin';
import Makeadmin from './components/Dashboard/Admin/Makeadmin';
import Addproduct from './components/Dashboard/Add/Addproduct';
import Manageorders from './components/Dashboard/Orders/Manageorders';
import Manageallproducts from './components/Dashboard/ManageProduct/Manageallproducts';

  

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
       <Route path="manageproduct" element={<RequireAdmin><Manageallproducts/></RequireAdmin>} />
       <Route path="addproduct" element={<RequireAdmin><Addproduct/></RequireAdmin>} />
       <Route path="manageallorder" element={<RequireAdmin><Manageorders/></RequireAdmin>} />
      <Route path="makeadmin" element={<RequireAdmin><Makeadmin/></RequireAdmin>} />
      </Route>
       
      <Route path="*" element={<Notfound/>} />
    </Routes>
    <Footer/>
    
    <ToastContainer />
  
    </div>
  );
}

export default App;
