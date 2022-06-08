import React from 'react';

type YMapProps = {};

const YMap: React.FC<YMapProps> = () => {
  return (
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A572845bd5e1d461787acae441d563c418a3d6e58bafb2c47fae2317d54eff50c&amp;source=constructor"
      width="100%"
      height="100%"
      frameBorder="0"
    />
  );
};

export default YMap;
