import Wrapper from '@components/wrapper';
import coverImage from '@assets/images/cover.jpeg';
import Information from '@components/information';
import Brands from '@components/brands';
import { Container } from '@components/common/styles';

const Home: React.FC = () => (
  <Wrapper backgroundImage={coverImage}>
    <Information />

    <Container>
      <Brands />
    </Container>
  </Wrapper>
);

export default Home;
