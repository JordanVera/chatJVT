import { useState } from 'react';

const SidebarButton = ({ toggleDrawer }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      onClick={toggleDrawer}
      className="fixed top-[42%] transform translate-y-1/2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? (
        <span className="" data-state="closed">
          {/* Hovered button */}
          <div className="flex h-[72px] w-8 items-center justify-center">
            <div className="flex h-6 w-6 flex-col items-center">
              <div className="h-3 w-1 rounded-full sidebar-button-3"></div>
              <div className="h-3 w-1 rounded-full sidebar-button-4"></div>
            </div>
          </div>
        </span>
      ) : (
        <span className="" data-state="closed">
          {/* Normal button */}
          <div className="flex h-[72px] w-8 items-center justify-center">
            <div className="flex h-6 w-6 flex-col items-center">
              <div className="h-3 w-1 rounded-full sidebar-button-1"></div>
              <div className="h-3 w-1 rounded-full sidebar-button-2"></div>
            </div>
          </div>
        </span>
      )}
    </button>
  );
};

export default SidebarButton;
