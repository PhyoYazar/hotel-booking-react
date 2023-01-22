import { useTheme } from "styled-components";
import { Image, Title, Text } from "../../LV1";
import RotateCard from "../../LV2/Card/RotateCard";

const HotelCard = () => {
  const theme = useTheme();

  const HotelData = (
    <div className="max-w-[500px]">
      <div className="">
        <Image
          iconType="image"
          src="https://tinypng.com/images/social/website.jpg"
          alt="Panda is sitting and eatting bamboo"
          width={500}
        />
      </div>

      <div className="p-3 space-y-3">
        <div className="flex-between">
          <Title as="h2" size="xl" mb="0">
            Hotel Name
          </Title>

          <Text>Rating...</Text>
        </div>

        <Text size="md" color={theme.colors.neutral400}>
          Description...
        </Text>

        <div className="h-96">
          <Text>Location</Text>
          <Text>Phone Number</Text>
        </div>
      </div>
    </div>
  );

  const Booking = (
    <div className="w-full h-full flex-center">
      <button>Booking</button>
    </div>
  );

  return (
    <article>
      <RotateCard
        frontData={() => HotelData}
        backData={() => Booking}
        width={500}
        height={500}
      />
    </article>
  );
};

export default HotelCard;
