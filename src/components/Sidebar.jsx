import { BsPlus,BsGearFill, BsLightningFill} from 'react-icons/bs'
import { FaFire,FaPoo } from 'react-icons/fa';
const Sidebar = () => {
    return (
        <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-discord-side text-discord-side-font shadow-lg'>
            <div>
                <SideIcons icon={<FaFire size='28'/>}/>
                <div className='bg-gray-600 h-0.5 rounded-2xl mr-2 ml-2'></div>
                <SideIcons icon={<BsPlus size='28'/>}/>
                <SideIcons icon={<BsLightningFill size='28'/>}/>
                <SideIcons icon={<FaPoo size='28'/>}/>
            </div>
            <div className='bg-gray-600 h-0.5 rounded-2xl mr-2 ml-2'></div>
            <div>
                <SideIcons icon={<BsGearFill size='28' className='text-white'/>}/>
            </div>
        </div>
    );
}

const SideIcons=({icon , text='tooltip'})=>(
    <div className="sidebar-icon group">
        {icon}
        <span className='sidebar-tooltip'>
            {text}
        </span>
    </div>
);

export default Sidebar;
