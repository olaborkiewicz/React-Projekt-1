const Service = ({ item }) => {
  return (
    <div className={item.isNew ? "box box_dif" : "box"} key={item.key}>
      <div className="text1">{item.name}</div>
      {item.isNew && <div className="text2">(nowość)</div>}
    </div>
  );
};
export default Service;
