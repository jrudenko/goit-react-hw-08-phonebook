import { Oval } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer role="alert">
      <Oval
        height={80}
        width={80}
        color="grey"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="yellow"
        strokeWidth={2}
        strokeWidthSecondary={2} />
    </LoaderContainer>
  );
};

export default Loader;