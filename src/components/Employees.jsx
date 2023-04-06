import React from 'react';

let workers = [
  {
    key: 1,
    name: "Justyna Kowalska",
    position: "HR",
    description:  "Nunc pulvinar consectetur lacus sed vestibulum. Aliquam nec malesuada velit, ut auctor sapien. In auctor mauris felis, sit amet blandit mi lobortis eget. Mauris enim dui, laoreet eget gravida ac, pretium in magna. Sed pharetra, augue quis fermentum tincidunt, quam nisi sollicitudin nisl, a mattis risus lec vel quam. Vestibulum feugiat mi in feugiat facilisis. Praesent mattis ut enim vitae bibendum. Duis semper tincidunt tortor, nec eleifend felis varius sed. Suspendisse lobortis, est in vestibulum elementum, felis risus volutpat orci, eget accumsan eros tellus ac dolor. Nullam iaculis nisi rutrum nisl fermentum, quis pretium ligula sollicitudin."
  },
  {
    key: 2,
    name: "Dawid Malinowski",
    position:"Kadry",
    description: "Nunc pulvinar consectetur lacus sed vestibulum. Aliquam nec malesuada velit, ut auctor sapien. In auctor mauris felis, sit amet blandit mi lobortis eget. Mauris enim dui, laoreet eget gravida ac, pretium in magna. Sed pharetra, augue quis fermentum tincidunt, quam nisi sollicitudin nisl, a mattis risus lec vel quam. Vestibulum feugiat mi in feugiat facilisis. Praesent mattis ut enim vitae bibendum. Duis semper tincidunt tortor, nec eleifend felis varius sed. Suspendisse lobortis, est in vestibulum elementum, felis risus volutpat orci, eget accumsan eros tellus ac dolor. Nullam iaculis nisi rutrum nisl fermentum, quis pretium ligula sollicitudin."
  }
]

const Employees = () => {

    return (
<section id="about">
        <div className="container">
          <h2 className="header3">Nasi specjaliści</h2>
          <div className="container_workers">
            {workers.map(item=> (
              <>
            <div className="circle"></div>
            <div className={item.key === 1 ? "item2" : "item3"}>
              <p className="p1" key={item.key}>{item.name}, {item.position}</p>
              <p className="p2">{workers.description}</p>
            </div>
            </>))}
          </div>
        </div>
      </section>
    )
}
export default Employees;

/*
<div class="container">
          <h2 class="header3">Nasi specjaliści</h2>
          <div class="container_workers">
            <div class="circle"></div>
            <div class="item2">
              <p class="p1">Justyna Kowalska [HR]</p>
              <p class="p2">
                Nunc pulvinar consectetur lacus sed vestibulum. Aliquam nec
                malesuada velit, ut auctor sapien. In auctor mauris felis, sit
                amet blandit mi lobortis eget. Mauris enim dui, laoreet eget
                gravida ac, pretium in magna. Sed pharetra, augue quis fermentum
                tincidunt, quam nisi sollicitudin nisl, a mattis risus lectus
                vel quam. Vestibulum feugiat mi in feugiat facilisis. Praesent
                mattis ut enim vitae bibendum. Duis semper tincidunt tortor, nec
                eleifend felis varius sed. Suspendisse lobortis, est in
                vestibulum elementum, felis risus volutpat orci, eget accumsan
                eros tellus ac dolor. Nullam iaculis nisi rutrum nisl fermentum,
                quis pretium ligula sollicitudin.
              </p>
            </div>
            <div class="item3">
              <p class="p1">Dawid Malinowski [Kadry]</p>
              <p class="p2">
                Nunc pulvinar consectetur lacus sed vestibulum. Aliquam nec
                malesuada velit, ut auctor sapien. In auctor mauris felis, sit
                amet blandit mi lobortis eget. Mauris enim dui, laoreet eget
                gravida ac, pretium in magna. Sed pharetra, augue quis fermentum
                tincidunt, quam nisi sollicitudin nisl, a mattis risus lectus
                vel quam. Vestibulum feugiat mi in feugiat facilisis. Praesent
                mattis ut enim vitae bibendum. Duis semper tincidunt tortor, nec
                eleifend felis varius sed. Suspendisse lobortis, est in
                vestibulum elementum, felis risus volutpat orci, eget accumsan
                eros tellus ac dolor. Nullam iaculis nisi rutrum nisl fermentum,
                quis pretium ligula sollicitudin.
              </p>
            </div>
            <div class="circle"></div>
          </div>
        </div>
      </section>
*/