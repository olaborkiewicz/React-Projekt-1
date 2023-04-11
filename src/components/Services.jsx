import services from "../data/offers";
import Service from "./Service";

const Services = () => {
  return (
    <section id="offer">
      <div className="container">
        <h2 className="header4">Czym zajmuje się nasza firma?</h2>

        <div className="box_container">
          {services.map((item, index) => (
            <Service item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
