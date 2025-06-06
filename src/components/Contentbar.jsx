import adrian from '../assets/adrian.svg'
import george from '../assets/george.svg'
import vivian from '../assets/vivian.svg'
import katherine from '../assets/katherine.svg'
import emery from '../assets/emery.svg'

const ContentBar = () => {
return (
    <div className="flex-grow bg-content-bar overflow-auto p-6 space-y-6 ">
        <div className="flex items-start space-x-4 ml-4">
            <img src={george} alt="avatar" className="h-12 w-12 rounded-full" />
            <div>
                <div className="flex items-center space-x-2">
                    <p className="text-white font-bold">George</p>
                    <p className="text-gray-400 text-sm">2 hours ago</p>
                </div>
                <p className="text-white font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nesciunt.
                </p>
            </div>
        </div>
        <div className="flex items-start space-x-4 ml-4">
            <img src={vivian} alt="avatar" className="h-12 w-12 rounded-full" />
            <div>
                <div className="flex items-center space-x-2">
                    <p className="text-white font-bold">Vivian</p>
                    <p className="text-gray-400 text-sm">1 day ago</p>
                </div>
                <p className="text-white font-semibold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non numquam laudantium quasi? Ipsum, fugit vero.
                </p>
            </div>
        </div>
        <div className="flex items-start space-x-4 ml-4">
            <img src={emery} alt="avatar" className="h-12 w-12 rounded-full" />
            <div>
                <div className="flex items-center space-x-2">
                    <p className="text-white font-bold">Emery</p>
                    <p className="text-gray-400 text-sm">3 days ago</p>
                </div>
                <p className="text-white font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nesciunt ducimus cumque perspiciatis nobis, voluptates temporibus accusantium quas.
                </p>
            </div>
        </div>
        <div className="flex items-start space-x-4 ml-4">
            <img src={katherine} alt="avatar" className="h-12 w-12 rounded-full" />
            <div>
                <div className="flex items-center space-x-2">
                    <p className="text-white font-bold">Katherine</p>
                    <p className="text-gray-400 text-sm">one week ago</p>
                </div>
                <p className="text-white font-semibold">
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>

        <div className="flex items-start space-x-4 ml-4">
            <img src={adrian} alt="avatar" className="h-12 w-12 rounded-full" />
            <div>
                <div className="flex items-center space-x-2">
                    <p className="text-white font-bold">Adrian</p>
                    <p className="text-gray-400 text-sm">a month back</p>
                </div>
                <p className="text-white font-semibold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima expedita nulla laboriosam eaque adipisci beatae blanditiis non veniam aperiam velit?
                </p>
            </div>
        </div>
    </div>
);
};

export default ContentBar;
