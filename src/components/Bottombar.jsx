import { FaPlus } from "react-icons/fa";

const Bottombar = () => {
return (
    <div className="absolute bottom-4 left-4 right-4 bg-top-search z-10 rounded-xl flex items-center px-4 py-2 shadow-lg cursor-pointer">
        <FaPlus className="text-green-400 text-xl mr-4 cursor-pointer" />
        <input
            type="text"
            placeholder="Enter message..."
            className="flex-grow bg-top-search text-white placeholder-gray-400 px-4 py-2 rounded-lg outline-none"
        />
    </div>
);
};
export default Bottombar;
