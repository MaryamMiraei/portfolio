
const Menu = () => {
  return (
    <div>
      <div className="fixed top-3.5 right-6 z-50 lg:hidden">
        <button
          aria-label="Open Menu"
          className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-100 shadow-lg border border-gray-700/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Menu
