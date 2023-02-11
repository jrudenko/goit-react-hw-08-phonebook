import { NavLink } from 'react-router-dom';
import { Auth } from './AuthForm.styled';

function AuthForm() {
  return (
    <Auth>
      <NavLink
        to="/login"
        // style={({ isActive }) => {
        //   isActive ? [BtnForm, Active].join(' ') : BtnForm;
        // }}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        // style={({ isActive }) => {
        //   isActive ? [BtnForm, Active].join(' ') : styles.button;
        // }}
      >
        Register
      </NavLink>
    </Auth>
  );
}
export default AuthForm;
