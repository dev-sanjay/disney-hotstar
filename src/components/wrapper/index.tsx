import { CSSObject } from 'styled-components';
import Image, { StaticImageData } from 'next/image';

import StyledWrapper, {
  Content,
  ImageContainer,
  WrapperStylesProps,
} from './styles';

interface WrapperProps extends WrapperStylesProps {
  children?: React.ReactNode;

  /**
   * - Extra styling for the icon
   */
  style?: CSSObject;

  /**
   * - Background Image
   */
  backgroundImage: StaticImageData;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  backgroundImage,
  style,
  ...rest
}) => (
  <StyledWrapper {...rest} $style={style}>
    <ImageContainer>
      <Image src={backgroundImage} alt="" />
    </ImageContainer>

    <Content>{children}</Content>
  </StyledWrapper>
);

export default Wrapper;
