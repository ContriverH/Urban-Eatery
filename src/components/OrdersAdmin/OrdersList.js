import firebase from "firebase";
import React from "react";
import OrdersListTile from "./OrdersListTile";
import { useState, useEffect } from "react";

export default function OrdersList() {
  const [list, setlist] = useState([]);
  const ordersRef = firebase.firestore().collection("orders");
  useEffect(() => {
    const fetch = async () => {
      const res = await ordersRef.get();
      console.log(res.docs);

      res.docs.forEach((item) => {
        setlist((list) => [...list, item.data()]);
      });
    };
    fetch();
  }, []);

  console.log(list);
  return (
    <div>
      {list &&
        list.map((order) => {
          console.log(order.products);
          return (
            <OrdersListTile
              name={order.products[0].name}
              quantity={order.products[0].quantity}
              restaurant={order.products[0].restaurant}
            />
          );
        })}
    </div>
  );
}
