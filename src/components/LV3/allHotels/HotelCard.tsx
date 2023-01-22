import { useTheme } from "styled-components";
import { Image, Title, Text } from "../../LV1";

const HotelCard = () => {
  const theme = useTheme();

  return (
    <article>
      <div className="max-w-[500px] space-y-3">
        <div className="">
          <Image
            iconType="image"
            src="https://tinypng.com/images/social/website.jpg"
            alt="Panda is sitting and eatting bamboo"
            width={500}
          />
        </div>

        <div className="p-3">
          <div className="flex-between">
            <Title as="h2" size="xl" mb="0">
              Hotel Name
            </Title>

            <Text>Rating...</Text>
          </div>

          <div className="">
            <Text>Location</Text>
            <Text>Phone Number</Text>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HotelCard;
