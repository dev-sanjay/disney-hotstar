import { useEffect, useState } from 'react';

import Api from '@api';
import { Brand } from '@api/types';
import VideoCard from '@components/video-card';

import StyledBrands from './styles';

const Brands: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    Api.getBrands({}).then((data) => {
      setBrands(data.brands);
    });
  }, []);

  return (
    <StyledBrands>
      {brands.map((brand) => (
        <VideoCard {...brand} />
      ))}
    </StyledBrands>
  );
};

export default Brands;
