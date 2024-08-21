import React from "react";

export default function Chatuser() {
  return (
    <>
      <div className="pt-5 pb-3 pl-5 flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-300">
        <div>
          <div className="avatar online">
            <div className="w-14 rounded-full">
              <img src="https://media.licdn.com/dms/image/v2/D5603AQGURumGLhJycQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718257383395?e=1729728000&v=beta&t=AxrsZvrOZ4yixCCsMO4jHZfJL2o3TRyTA-Xe1PNBkJ0" />
              {"Linkedin profile image address "}
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl">Tathagat Priyadarshi</h1>
          <span className="text-sm">Online</span>
        </div>
      </div>
    </>
  );
}
