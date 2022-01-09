import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function ProductAdminList() {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  const baseurl = "http://localhost:3001/api/v1/food/getAllFoods";
  const [list, setlist] = useState([]);
  useEffect(() => {
    console.log("started searching");
    const fetchdata = async () => {
      await axios
        .get(baseurl, config)
        .then((response) => {
          const l = response.data.data;
          console.log(l);
          setlist((list) => [...l, list]);
        })
        .catch((errr) => {
          console.log(errr);
        });
    };
    fetchdata();
  }, []);

  console.log(list);

  return (
    <div>
      {list.map((restaurant, index) => {
        return (
          <div class="container overflow-auto">
            <div class="row">
              <div class="col-lg-12">
                <div class="card border-0 mb-4 mt-4 shadow bg-white rounded">
                  <div class="d-flex p-4">
                    <div class="horizontal-card-bg-img">
                      <img className="card-img" src={restaurant.img} />
                    </div>
                    <div class="flex-fill ml-5">
                      <div class="card-body">
                        <div class="font-weight-bold mt-3">
                          {restaurant.name}
                        </div>
                        <div class="mb-3">{restaurant.price}</div>
                        <div class="mb-3">{restaurant.category}</div>
                      </div>
                    </div>
                    <div class="horizontal-card-btn-container d-flex justify-content-center align-items-center">
                      <div className="p-3 shadow bg-white circle">
                        <FontAwesomeIcon
                          className="edit-icon"
                          size="2x"
                          color="blue"
                          icon={faEdit}
                        />
                      </div>
                      <div className="p-3 ml-4 mr-2 shadow bg-white circle">
                        <FontAwesomeIcon
                          className="delete-icon"
                          size="2x"
                          color="red"
                          icon={faTrashAlt}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
