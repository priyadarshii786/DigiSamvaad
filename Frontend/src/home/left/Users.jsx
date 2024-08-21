import React from "react";
import User from "./User";

function Users() {
  return (
    <div
      style={{ maxHeight: "calc(84vh - 1vh)" }}
      className="py-2 flex-chikku overflow-y-auto"
    >
      {" "}
      {/**this styling in div is introduced to make the scroll bar visible and to be able to use it. */}
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </div>
  );
}

export default Users;
