import { Fragment } from "react";

import { apiRoutes } from "../../../controllers";
import useAxios from "../../../hooks/useAxios";
import { AllHotelsI } from "../../../lib/interface/hotels";
import HotelCard from "./HotelCard";

const Hotels = () => {
  const { data, isLoading, error } = useAxios<AllHotelsI>({
    endpoint: apiRoutes.getAllHotels,
  });

  if (isLoading) return <div className="flex-center py-32">Loading...</div>;
  if (error)
    return <div className="flex-center py-32">Something went wrong.</div>;

  return (
    <section className="my-10">
      <div className="space-y-5">
        {data?.data.map((hotel, index) => (
          <Fragment key={index}>
            <HotelCard hotel={hotel} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Hotels;
