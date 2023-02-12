import { Oval } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer role="alert">
      <Oval
        height={80}
        width={80}
        color="blue"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="blue"
        strokeWidth={2}
        strokeWidthSecondary={2} />
    </LoaderContainer>
  );
};

export default Loader;