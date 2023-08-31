import React from 'react';


const ItemNota = ({ items }) => {
    return (
      <div className="list-group">
        {items.map((item, index) => (
          <a key={index} href={item.url} className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{item.heading}</h5>
              <small className="text-body-secondary">{item.date}</small>
            </div>
            <p className="mb-1">{item.content}</p>
            <small className="text-body-secondary">{item.smallPrint}</small>
          </a>
        ))}
      </div>
    );
  };

  ItemNota.label = {
    en: "Item Nota",
    es: "Item de  nota",
};

export default ItemNota;
