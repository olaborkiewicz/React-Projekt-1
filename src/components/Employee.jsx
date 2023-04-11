const Employee = ({ item }) => {
  return (
    <div className="container_workers">
      <div
        className="circle"
        key={item.key}
        style={{ backgroundImage: `url(${item.url})` }}
      ></div>
      <div className={item.key === 1 ? "item2" : "item3"}>
        <p className="p1" key={item.key}>
          {item.name}, {item.position}
        </p>
        <p className="p2" key={item.key}>
          {item.description}
        </p>
      </div>
    </div>
  );
};
export default Employee;
