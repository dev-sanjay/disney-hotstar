import Image from 'next/image';

import disnepImage from '@assets/images/temp/disnep.png';

import { CSSObject } from 'styled-components';
import { ImageWrapper, StyledVideoCard, VideoWrapper } from './styles';

interface VideoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  style?: CSSObject;
}

const VideoCard: React.FC<VideoCardProps> = ({ style }) => (
  <StyledVideoCard $style={style}>
    <ImageWrapper mainAxis crossAxis>
      <Image src={disnepImage} alt="" />
    </ImageWrapper>

    <VideoWrapper>
      <video autoPlay muted loop>
        <source src="/videos/disney-video.mp4" />
      </video>
    </VideoWrapper>
  </StyledVideoCard>
);

export default VideoCard;
