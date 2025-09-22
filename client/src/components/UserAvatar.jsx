import React, { useState } from "react";

function UserAvatar() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <button onClick={handleMenu} className="relative">
      <div className="w-11 rounded-full overflow-hidden border-2 border-primary">
        <img src="/images/avatars/avatar.png" alt="avatar" className="w-full" />
      </div>
      {menu ? (
        <div className="absolute bg-white drop-shadow-lg w-32 top-14 right-0 p-4 flex flex-col justify-around rounded-md h-52 duration-500">
          <button className="flex items-center gap-2 w-full border-b pb-4"><img src="/images/icons/user.png" width={22}/> Account</button>
          <button className="flex items-center gap-2 w-full border-b pb-4"><img src="/images/icons/settings.png" width={22}/> Settings</button>
          <button className="flex items-center gap-2 w-full"><img src="/images/icons/logout.png" width={22}/> Logout</button>
        </div>
      ) : (
        ""
      )}
    </button>
  );
}

export default UserAvatar;
