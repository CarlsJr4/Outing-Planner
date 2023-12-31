type BusinessType = {
  id: string;
  name: string;
  display_phone: string;
  location: {
    display_address: string[];
  };
  categories: { alias: string; title: string }[];
  url: string;
  is_closed: boolean;
  image_url: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
};

export default BusinessType;
