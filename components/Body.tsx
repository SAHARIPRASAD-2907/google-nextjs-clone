import { SearchIcon } from "@heroicons/react/outline"
import { MicrophoneIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router";
import { useRef } from "react";


function Body() {
    const router = useRouter()
    const searchInputRef = useRef(null);
    const btn = "tex-sm rounded-md bg-[#f8f9fa] p-3 text-gray-800 ring-gray-200 hover:ring-1 focus:outline-none active:ring-gray-300 hover:shadow-md";
    const search = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const term: any = searchInputRef.current;
        console.log(term.value);
        if (!term.value) return;
        router.push(`/search?term=${term.value}`)
    }
    return (
        <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIN7bHMpaAD_RpHSWxMQwBF3jQDDDdF3IfzhRM4TKygk-ASnfRVgBehCKYEiEv9tXG8DA&usqp=CAU'} height={100} width={300} />
            <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
                <SearchIcon className="h-5 mr-3 text-grey-500" />
                <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none" />
                <MicrophoneIcon className="h-5 " />
            </div>
            <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
                <button onClick={search} className={btn}>Google Search</button>
                <button onClick={search} className={btn}>I am feeling lucky</button>
            </div>
        </form>
    )
}

export default Body