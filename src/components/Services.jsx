const services = [
  {
    key: 1,
    name: "Usługa 1",
    isNew: true,
  },
  {
    key: 2,
    name: "Usługa 2",
  },
  {
    key: 3,
    name: "Usługa 3",
  },
  {
    key: 4,
    name: "Usługa 4",
  },
  {
    key: 5,
    name: "Usługa 5",
  },
  {
    key: 6,
    name: "Usługa 6",
  },
];

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
