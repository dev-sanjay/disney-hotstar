import { CSSObject } from 'styled-components';
import Image, { StaticImageData } from 'next/image';

import StyledWrapper, { VideoContainer, WrapperStylesProps } from './styles';

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
    <VideoContainer>
      {/* <Image src={backgroundImage} alt="" priority /> */}
      <video muted loop autoPlay>
        <source src="/assets/gaslight.mp4" />
      </video>
    </VideoContainer>

    {children}
  </StyledWrapper>
);

export default Wrapper;
