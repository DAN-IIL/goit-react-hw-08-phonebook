import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Register from 'js/pages/Register/Register';
import Login from 'js/pages/Login/Login';
import Contacts from 'js/pages/Contacts/Contacts';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Layout />} />
      </Route>
    </Routes>
  );
}
