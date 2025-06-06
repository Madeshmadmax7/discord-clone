import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';

const ChannelBar = () => {
return (
    <div className="ml-16 bg-channel h-screen w-50 text-white p-4">
        <p className="text-lg font-bold text-white">Channels</p>
        <div className='flex items-center space-x-2 mt-3 justify-between'>
            <div className="flex items-center space-x-2 mt-3 hover:text-blue-400 font-small">
                <FaChevronRight className="text-sm mt-1 ml-1"/>
                <p>Topics</p>
            </div>
            <FaPlus className='text-sm mt-3'/>
        </div>
        <div className='flex items-center space-x-2 mt-0 justify-between' >
            <div className="flex items-center space-x-2 mt-1 hover:text-blue-400 font-small">
                <FaChevronRight className="text-sm mt-1 ml-1"/>
                <p>Questions</p>
            </div>
            <FaPlus className='text-sm mt-1'/>
        </div>
        <div className='flex items-center space-x-2 mt-0 justify-between'>
            <div className="flex items-center space-x-2 mt-1 hover:text-blue-400 font-small ">
                <FaChevronRight className="text-sm mt-1 ml-1"/>
                <p>Answers</p>
            </div>
            <FaPlus className='text-sm mt-1'/>
        </div>
        
    </div>
);
};

export default ChannelBar;
