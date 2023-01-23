import { useTheme } from "styled-components";
import { HotelI } from "../../../lib/interface/hotels";

import { getToken } from "../../../services/auth";
import { Image, Title, Text } from "../../LV1";
import Button from "../../LV2/Button/Button";
import RotateCard from "../../LV2/Card/RotateCard";

const HotelCard = ({ hotel }: { hotel: HotelI }) => {
  const token = getToken();
  const theme = useTheme();

  const HotelData = (
    <div className="max-w-[550px]">
      <Image
        iconType="image"
        src="https://tinypng.com/images/social/website.jpg"
        alt="Panda is sitting and eatting bamboo"
        width={550}
      />

      <div className="px-5 py-3 space-y-4">
        <div className="flex-between">
          <Title as="h2" size="xxl" mb="0">
            {hotel.name}
          </Title>
          <Text>Rating...</Text>
        </div>

        <Text size="md" color={theme.colors.neutral500}>
          {hotel.description}
        </Text>

        <div className="h-96 space-y-3">
          <div className="flex items-center gap-2">
            <Image
              iconType="phone"
              width={18}
              height={18}
              color={theme.colors.neutral700}
            />
            <Text>{hotel.phoneNumber}</Text>
          </div>

          <div className="flex items-center gap-2">
            <Image
              iconType="map"
              width={20}
              height={20}
              color={theme.colors.neutral700}
            />
            <Text>
              {hotel.address} {hotel.city}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );

  const Booking = (
    <div className="w-full h-full flex-center">
      <Button href={token ? `/auth/${hotel._id}` : `/login`}>Booking</Button>
    </div>
  );

  return (
    <article>
      <RotateCard
        frontData={() => HotelData}
        backData={() => Booking}
        width={550}
        height={500}
        frontBgColor={theme.colors.emerald200}
        backBgColor={theme.colors.emerald200}
      />
    </article>
  );
};

export default HotelCard;
