import { BsSearch } from "react-icons/bs";
import { BsBell, BsFillSunFill, BsHash } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';

const Topbar = () => {
return (
    <div className='bg-top-bar h-14 flex items-center justify-between px-6 font-bold shadow-lg z-10'>
        <div className='flex items-center space-x-2 text-gray-400'>
            <BsHash className='text-lg' size={30}/>
            <p className='text-lg'>tailwind-css</p>
        </div>
        <div className='flex items-center space-x-4  text-lg'>
            <BsFillSunFill size={20} className='text-gray-400'/>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-top-search pl-5 pr-2 py-1 rounded outline-none text-gray-300 cursor-pointer font-semibold"
                />
                <BsSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <BsBell size={20} className='text-gray-400'/>
            <FaUserCircle size={22} className='text-gray-400 ml-1.5'/>
        </div>
    </div>
);
};

export default Topbar;
