const MenuButton = ({ onClick, isActive, children, title }) => {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`
        p-2 rounded-md border transition-all duration-200 hover:bg-gray-100
        ${isActive 
          ? 'bg-blue-100 border-blue-300 text-blue-700' 
          : 'bg-white border-gray-200 text-gray-600 hover:text-gray-800'
        }
      `}
    >
      {children}
    </button>
  );
};

export default MenuButton;