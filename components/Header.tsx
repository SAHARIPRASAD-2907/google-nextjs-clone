import Avatar from "./Avatar"
import { ViewGridIcon } from "@heroicons/react/solid"

function Header() {
    return (
        <header className="flex w-full p-5 justify-between text-sm text-gray-700">
            {/* Left */}
            <div className="flex space-x-4 items-center">
                <p className="link">About</p>
                <p className="link">Store</p>
            </div>
            {/* Right */}
            <div className="flex space-x-4 items-center">
                <p className="link">Gmail</p>
                <p className="link">Images</p>
                {/* Icon */}
                <ViewGridIcon className="h-10 w-10 p-2 
                rounded-full hover:bg-gray-100 cursor-pointer" />
                {/* Avatar */}
                <Avatar url="https://english.cdn.zeenews.com/sites/default/files/2017/10/24/633686-mersal.jpg" className="" />
            </div>
        </header>
    )
}

export default Header