import { Link } from './AuthForm.styled';

function AuthForm() {
  return (
    <nav>
      <Link to="/register">Registration</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}
export default AuthForm;
