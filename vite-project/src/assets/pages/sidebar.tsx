const navData = [
  {
    name: "Home",
    path: "/",
    icon: "home",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "profile",
  },
  {
    name: "Groups",
    path: "/groups",
    icon: "groups",
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: "notifications",
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "dashboard",
  },
  {
    name: "Settings",
    path: "/settings",
    icon: "settings",
  },
];


const sidebar = () => {
  return (
    <div className="w-45 bg-white h-screen rounded-r-[30px]">
      <div className="flex items-center border border-b  justify-content h-16">
        <div className="flex">
          <img
            className="h-10 w-10 rounded-full object-cover mr-2 ml-2"
            alt="logo img"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          />
          <div className="flex flex-col">
            <h2 className="font-semibold">Jumbera Tkhabladzeli</h2>
            <p className="text-gray-400 text-sm">mentor</p>
          </div>
        </div>
      </div>
      <div className="flex py-5 justify-center align-middle items-center border-b">
        <div className=" mt-1">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 27C19.9706 27 24 22.9706 24 18C24 13.0294 19.9706 9 15 9C10.0294 9 6 13.0294 6 18C6 22.9706 10.0294 27 15 27Z"
              stroke="#515151"
              stroke-opacity="0.81"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27 29L22 24"
              stroke="#515151"
              stroke-opacity="0.81"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search"
          className=" p-2 bg-transparent border  border-gray-500 rounded-3xl mt-1 "
        />
      </div>
      <ul className="text-black">
        {navData.map((item, index) => (
          <li
            key={index}
            className="p-4 cursor-pointer hover:bg-bodyBg hover:rounded-3xl"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default sidebar;
