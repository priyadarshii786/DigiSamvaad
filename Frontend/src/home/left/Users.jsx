import React from "react";
import User from "./User";

function Users() {
  return (
    <div style={{ maxHeight: "calc(92vh)" }} className="overflow-y-auto">
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
