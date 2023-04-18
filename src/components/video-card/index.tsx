import Image from 'next/image';

import { CSSObject } from 'styled-components';
import { Brand } from '@api/types';
import { ImageWrapper, StyledVideoCard, VideoWrapper } from './styles';

interface VideoCardProps extends Brand {
  style?: CSSObject;
}

const VideoCard: React.FC<VideoCardProps> = ({ style, media }) => (
  <StyledVideoCard $style={style}>
    <ImageWrapper mainAxis crossAxis>
      <Image
        src={media.desktop.image as string}
        alt=""
        width={240}
        height={136}
      />
    </ImageWrapper>

    <VideoWrapper>
      <video autoPlay muted loop>
        <source src={media.desktop.video as string} />
      </video>
    </VideoWrapper>
  </StyledVideoCard>
);

export default VideoCard;
