import firebase from "firebase";
import React, { useEffect, useState } from "react";
import "./dashboardCard.css";

export default function DashBoardCards() {
  const adminRef = firebase
    .firestore()
    .collection("admin")
    .doc("PXToN4KwoyUcMZFpFyCRBOQhvXj1");
  const [orderQty, setOrderQty] = useState(0);
  const [sales, setSales] = useState(0);
  const [qty, setQty] = useState(0);
  const [profit, setProfit] = useState(0);

  useEffect(() => {
    adminRef.get().then((res) => {
      const data = res.data();
      setOrderQty(data.orderCount);
      setQty(data.productSalesCount);
      setSales(data.totalSales);
      setProfit((data.totalSales * 0.08).toFixed(2));
    });
  }, []);

  return (
    <div>
      <div class="cards shadow-lg p-3 mb-5 bg-white rounded">
        <div class=" cardss [ is-collapsed ] shadow-lg p-3 mb-5 bg-white rounded ">
          <div class="card__inner [ js-expander ]">
            <span>
              {" "}
              <h1> {orderQty} </h1>
            </span>
            <i class="fa fa-folder-o"></i>
          </div>
          <div class="card__expander">Total Orders</div>
        </div>
        <div class=" cardss [ is-collapsed ] shadow-lg p-3 mb-5 bg-white rounded">
          <div class="card__inner [ js-expander ]">
            <span>
              {" "}
              <h1>₹{sales}</h1>
            </span>
            <i class="fa fa-folder-o"></i>
          </div>
          <div class="card__expander">Total Sales</div>
        </div>
        <div class=" cardss [ is-collapsed ] shadow-lg p-3 mb-5 bg-white rounded">
          <div class="card__inner [ js-expander ]">
            <span>
              <h1> 7</h1>
            </span>
            <i class="fa fa-folder-o"></i>
          </div>
          <div class="card__expander">Restaurants</div>
        </div>

        <div class=" cardss [ is-collapsed ] shadow-lg p-3 mb-5 bg-white rounded">
          <div class="card__inner [ js-expander ]">
            <span>
              <h1>{qty}</h1>
            </span>
            <i class="fa fa-folder-o"></i>
          </div>
          <div class="card__expander">Items Sold</div>
        </div>

        <div class=" cardss [ is-collapsed ] shadow-lg p-3 mb-5 bg-white rounded">
          <div class="card__inner [ js-expander ]">
            <span>
              <h1>{profit}</h1>
            </span>
            <i class="fa fa-folder-o"></i>
          </div>
          <div class="card__expander">Profit 8%</div>
        </div>

        <div class=" cardss [ is-collapsed ] shadow-lg p-3 mb-5 bg-white rounded">
          <div class="card__inner [ js-expander ]">
            <span>
              <h1>{"45"}</h1>
            </span>
            <i class="fa fa-folder-o"></i>
          </div>
          <div class="card__expander">Customers</div>
        </div>
      </div>
    </div>
  );
}
