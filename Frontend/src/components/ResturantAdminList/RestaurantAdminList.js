import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import RestaurantListTile from "../RestaurantCard/RestaurantListTile";
export default function RestaurantAdminList() {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  const baseurl = "http://localhost:3001/api/v1/restaurant/getAllRestaurant";
  const [list, setlist] = useState([]);
  useEffect(() => {
    console.log("started searching");
    const fetchdata = async () => {
      await axios
        .get(baseurl, config)
        .then((response) => {
          const l = response.data.data;
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
      {list.map((re, index) => {
        return (
          <div class="container overflow-auto">
            <div class="row">
              <div class="col-lg-12">
                <RestaurantListTile
                  name={re.name}
                  phoneNumber={re.phoneNumber}
                  address={re.address}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
