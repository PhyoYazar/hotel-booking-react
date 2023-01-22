import { Image } from "../components/LV1";

const Example = () => {
  return (
    <section>
      <Image iconType="sun" width={40} height={40} />

      <Image
        iconType="image"
        src="https://tinypng.com/images/social/website.jpg"
        alt="Panda is sitting and eatting bamboo"
        width={400}
        // height={300}
      />
    </section>
  );
};

export default Example;
