
import { Oval } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer role="alert">
      <Oval strokeColor="#232323" />
    </LoaderContainer>
  );
};

export default Loader;