import { Link } from './AuthForm.styled';

function AuthForm() {
  return (
    <nav>
      <Link to="/register" exact>
        Sign up
      </Link>
      <Link to="/login" exact>
        Log in
      </Link>
    </nav>
  );
}
export default AuthForm;
