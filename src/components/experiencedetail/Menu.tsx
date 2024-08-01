import React, { useState, useEffect, useRef } from 'react';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <button className="text-gray-600 focus:outline-none" onClick={toggleMenu}>
        <img src="/image/menu.svg" alt="menu icon" className="w-6 h-6" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
          <ul className="py-1">
            <li>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                수정하기
              </button>
            </li>
            <li>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                삭제하기
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
