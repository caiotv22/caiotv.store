import { useEffect, useContext } from 'react';
import Home from 'pages/dashboard/home';
import LoginPage from './login';
import { AuthContext } from '@/global/providers';
import { ToastContainer } from 'react-toastify';

export default function DashBoard() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    async function getStorage() {
      const storage = {
        name: localStorage.getItem('name'),
        token: localStorage.getItem('token'),
      };
      if (storage?.token !== 'null' && storage?.token !== null) {
        authContext.setUserAuthInfo('', storage);
      }
    }
    getStorage();
  });

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      {authContext.authState ? <Home /> : <LoginPage />}
    </>
  );
}
