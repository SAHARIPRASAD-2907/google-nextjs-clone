import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import router, { useRouter } from 'next/router'
import { useRef } from 'react'
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function HeaderSearch() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const term: any = searchInputRef.current.value;
        if (!term) return;
        router.push(`/search?term=${term}`)
    }
    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex w-full p-6 items-center'>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIN7bHMpaAD_RpHSWxMQwBF3jQDDDdF3IfzhRM4TKygk-ASnfRVgBehCKYEiEv9tXG8DA&usqp=CAU'}
                    height={40}
                    width={120}
                    className="cursor-pointer" onClick={() => router.push('/')} />
                <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
                    <input className='flex-grow w-full focus:outline-none' ref={searchInputRef} type="text" />
                    <XIcon className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125' onClick={() => (searchInputRef.current.value = "")} />
                    <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
                    <SearchIcon className='h-6 hidden sm:inline-flex text-blue-500' />
                    <button hidden onClick={search}>search</button>
                </form>
                <Avatar className="ml-auto" url={"https://english.cdn.zeenews.com/sites/default/files/2017/10/24/633686-mersal.jpg"} />
            </div>
            {/* Header Options */}

            <HeaderOptions />
        </header>
    )
}

export default HeaderSearch