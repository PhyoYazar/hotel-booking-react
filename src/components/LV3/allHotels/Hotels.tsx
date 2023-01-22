import { Fragment } from "react";
import HotelCard from "./HotelCard";

const Hotels = () => {
  return (
    <section className="my-10">
      <div className="space-y-5">
        {[1, 2, 3].map((el, index) => (
          <Fragment key={index}>
            <HotelCard />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Hotels;
