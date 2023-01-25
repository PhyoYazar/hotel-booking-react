import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";

import { apiRoutes } from "../../../controllers";
import useAxios from "../../../hooks/useAxios";
import { HotelsDetailI } from "../../../lib/interface/hotels";
import { Image, Text, Title } from "../../LV1";

const HotelDetails = () => {
  const theme = useTheme();
  const { hotel_id } = useParams();

  const { data, isLoading, error } = useAxios<HotelsDetailI>({
    endpoint: apiRoutes.getAllHotels + `/${hotel_id}`,
  });

  if (isLoading) return <div className="flex-center py-32">Loading...</div>;
  if (error) return <div className="flex-center py-32">{error}</div>;

  let hotel = data?.data;

  return (
    <section className="w-full flex-between items-start gap-6 my-10">
      <div className="">
        <Image
          iconType="image"
          src="https://tinypng.com/images/social/website.jpg"
          alt="Panda is sitting and eatting bamboo"
          width={600}
          height={400}
        />
      </div>

      <div className="w-full px-5 py-3 space-y-4">
        <div className="flex-between">
          <Title as="h2" size="xxl" mb="0">
            {hotel?.name}
          </Title>
          <Text>Rating...</Text>
        </div>

        <Text size="md" color={theme.colors.neutral500}>
          {hotel?.description}
        </Text>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Image
              iconType="phone"
              width={18}
              height={18}
              color={theme.colors.neutral700}
            />
            <Text>{hotel?.phoneNumber}</Text>
          </div>

          <div className="flex items-center gap-2">
            <Image
              iconType="map"
              width={20}
              height={20}
              color={theme.colors.neutral700}
            />
            <Text>
              {hotel?.address} {hotel?.city}
            </Text>
          </div>
        </div>

        <div className="">Booking Here...</div>
      </div>
    </section>
  );
};

export default HotelDetails;
