export interface Brand {
  id: string;
  name: string;
  redirectUrl: string;
  media: {
    desktop: {
      image: string;
      video: string;
    };
    mobile: {
      image: string;
      video: string;
    };
  };
}

export interface BrandReply {
  status: 'Success' | 'Failure';
  brands: Brand[];
}
