import Image from 'next/image';

import logoImage from '@assets/images/temp/icon.png';
import Typography from '@typography';
import { ImageWrapper, StyledDetails } from './styles';

const Details: React.FC = () => (
  <StyledDetails>
    <ImageWrapper>
      <Image src={logoImage} alt="logo " />
    </ImageWrapper>

    <Typography typography="Montserrat/Normal/20px">
      La película de Disney y Pixar “Luca” está ambientada en un pueblo de la
      costa italiana y cuenta la historia de un adolescente que pasa un verano
      inolvidable lleno de aventuras junto con su nuevo amigo Alberto.
    </Typography>
  </StyledDetails>
);

export default Details;
