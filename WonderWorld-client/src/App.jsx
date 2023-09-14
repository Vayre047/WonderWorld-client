import React from 'react';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import SignUp from './Pages/Signup/signup';
import Homepage from './Pages/Homepage/homepage';
import IsPrivate from './Components/IsPrivate/isPrivate';
import WonderCard from './Pages/WonderCard/wonderCard';
import UpdateReview from './Pages/UpdateReview/updateReview';
import LogIn from './Pages/Login/login';
import WonderDetail from './Pages/WonderDetail/wonderDetail';
import CreateReview from './Pages/CreateReview/createReview';
import MainTitle from './Components/MainTitle';
import EditReview from './Pages/EditReview/editReview'; // Add/EditReview import
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/review/update/:reviewId/:wonderId' element={<IsPrivate><UpdateReview /></IsPrivate>} />
        <Route path='/review/create/:wonderId' element={<IsPrivate><CreateReview /></IsPrivate>} />
        <Route path='/wonder/card' element={<WonderCard />} />
        <Route path='/wonder/:wonderId' element={<WonderDetail />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/mainTitle' element={<MainTitle />} />
        <Route path='/wonder/:wonderId/edit/:reviewId' element={<IsPrivate><EditReview /></IsPrivate>} /> {/* Add/EditReview route */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
