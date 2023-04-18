import Image from 'next/image';

import logoImage from '@assets/images/temp/icon.png';
import Typography from '@typography';
import { ImageWrapper, StyledDetails } from './styles';

const Details: React.FC = () => (
  <StyledDetails>
    <ImageWrapper>
      <Image src={logoImage} alt="logo" priority />
    </ImageWrapper>

    <Typography typography="Montserrat/Normal/20px">
      The Disney and Pixar film &quot;Luca&quot; is set in a town in the Italian
      coast and tells the story of a teenager who spends a summer unforgettable
      full of adventures together with his new friend Alberto.
    </Typography>
  </StyledDetails>
);

export default Details;
