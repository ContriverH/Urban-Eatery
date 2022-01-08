import React from "react";
import ProductForm from "../Form/ProductForm";
import RestaurantForm from "../Form/restaurentForm";
import { useState } from "react";
import "./admin.css";
import RestaurantAdminList from "../ResturantAdminList/RestaurantAdminList";
import ProductAdminList from "../ProductAdmin/productAdminlist";
import OrdersList from "../OrdersAdmin/OrdersList";
import Dashboard from "../Dashboard/Dashboard";

export default function AdminPage() {
  const [currentComponent, setcurrentComponent] = useState("Dashboard");

  return (
    <div>
      <div class="sidebar">
        <div class="sidebar__sections">
          <ul>
            <ul>
              <div></div>
              <li
                className="nav-item"
                onClick={() => setcurrentComponent("Restaurant")}
              >
                <span
                  className={
                    currentComponent == "Restaurant"
                      ? "active nav-link"
                      : "nav-link"
                  }
                >
                  <a href="#">Restaurents</a>
                </span>
              </li>
              <li
                className="nav-item"
                onClick={() => setcurrentComponent("Add Restaurant")}
              >
                <span
                  className={
                    currentComponent == "Add Restaurant"
                      ? "active nav-link"
                      : "nav-link"
                  }
                >
                  <a href="#">Add Restaurents</a>
                </span>
              </li>

              <li
                className="nav-item"
                onClick={() => setcurrentComponent("Products")}
              >
                <span
                  className={
                    currentComponent == "Products"
                      ? "active nav-link"
                      : "nav-link"
                  }
                >
                  <a href="#">Products</a>
                </span>
              </li>

              <li
                className="nav-item"
                onClick={() => setcurrentComponent("Add Products")}
              >
                <span
                  className={
                    currentComponent == "Add Products"
                      ? "active nav-link"
                      : "nav-link"
                  }
                >
                  <a href="#">Add Products</a>
                </span>
              </li>
            </ul>
          </ul>
        </div>
        <div class="sidebar__subsections">
          <div class="sidebar__subsections-brand">
            <h1>Admin</h1>
          </div>
          <ul>
            <li
              className="nav-item"
              onClick={() => setcurrentComponent("Dashboard")}
            >
              <span
                className={
                  currentComponent == "Dashboard"
                    ? "active nav-link"
                    : "nav-link"
                }
              >
                <a href="#">Dashboard</a>
              </span>
            </li>

            <li
              className="nav-item"
              onClick={() => setcurrentComponent("Orders")}
            >
              <span
                to="resturantPage"
                className={
                  currentComponent == "Orders" ? "active nav-link" : "nav-link"
                }
              >
                <a href="#">Orders</a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="page">
        <div class="header">
          <div class="header__date">
            <span id="date"></span>
          </div>
          <div class="header__user">Urban Eatery</div>
        </div>

        <div class="content">
          <div class="title" id="title-bar">
            <div class="title__text">
              <h1>{currentComponent}</h1>
            </div>
            <div class="title__extras"></div>
          </div>

          {currentComponent === "Restaurant" ? (
            <RestaurantAdminList />
          ) : (
            <div />
          )}

          {currentComponent === "Add Restaurant" ? <RestaurantForm /> : <div />}

          {currentComponent === "Products" ? <ProductAdminList /> : <div />}

          {currentComponent === "Add Products" ? <ProductForm /> : <div />}

          {currentComponent == "Dashboard" ? <Dashboard /> : <div />}
          {currentComponent === "Orders" ? <OrdersList /> : <div />}

          {/* <ProductForm/> */}
        </div>
      </div>
    </div>
  );
}