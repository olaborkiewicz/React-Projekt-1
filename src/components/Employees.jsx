import workers from "../data/workers";
import Employee from "./Employee";

const Employees = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="header3">Nasi specjaliści</h2>
        {workers.map((item, index) => (
          <Employee item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Employees;
