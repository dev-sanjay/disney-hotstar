import VideoCard from '@components/video-card';
import StyledBrands from './styles';

const Brands: React.FC = () => (
  <StyledBrands>
    {[1, 2, 3, 4, 5, 6].map(() => (
      <VideoCard style={{ flexShrink: '0' }} />
    ))}
  </StyledBrands>
);

export default Brands;
