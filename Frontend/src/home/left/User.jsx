import React from "react";

function User() {
  return (
    <div>
      <div className="flex space-x-4 px-8 py-7 hover:bg-slate-600 duration-300 cursor-pointer">
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://media.licdn.com/dms/image/v2/D5603AQGURumGLhJycQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718257383395?e=1729728000&v=beta&t=AxrsZvrOZ4yixCCsMO4jHZfJL2o3TRyTA-Xe1PNBkJ0" />
            {"Linkedin profile image address "}
          </div>
        </div>

        <div>
          <h1 className="font-bold">Tathagat Priyadarshi</h1>
          <span>priyadarshi1131@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default User;
