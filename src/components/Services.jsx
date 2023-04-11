import services from "../data/offers";

const Services = () => {
  return (
    <section id="offer">
      <div className="container">
        <h2 className="header4">Czym zajmuje się nasza firma?</h2>
        <div className="box_container">
          {services.map((item) => (
            <div className={item.isNew ? "box box_dif" : "box"} key={item.key}>
              <div className="text1">{item.name}</div>
              {item.isNew && <div className="text2">(nowość)</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
