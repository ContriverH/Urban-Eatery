import React from "react";

export default function RestaurantListTile(props) {
  return (
    <div class="card border-0 mb-4 mt-4">
      <div class="d-flex">
        <div class="horizontal-card-bg-img"></div>
        <div class="flex-fill">
          <div class="card-body">
            <div class="font-weight-bold mt-3">{props.name}</div>
            <div class="mb-3">{props.address}</div>
            <div class="mb-3">{props.phoneNumber}</div>
          </div>
        </div>
        <div class="horizontal-card-btn-container d-flex justify-content-center align-items-center">
          <button class="btn-primary">Button</button>
        </div>
      </div>
    </div>
  );
}
