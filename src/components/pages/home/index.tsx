import Wrapper from '@components/wrapper';
import coverImage from '@assets/images/cover.jpeg';
import Information from '@components/information';
import Brands from '@components/brands';

const Home: React.FC = () => (
  <Wrapper backgroundImage={coverImage}>
    <Information />

    <Brands />
  </Wrapper>
);

export default Home;
