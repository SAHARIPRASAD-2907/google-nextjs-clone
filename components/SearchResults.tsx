import PaginationButtons from "./PaginationButtons"

function SearchResults(props: { results: any }) {
    const { results } = props
    const data = results
    const { searchInformation } = data;
    const { formattedTotalResults, formattedSearchTime } = searchInformation;


    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-gray-600 text-md mb-5 mt-3">About {formattedTotalResults} results {formattedSearchTime} seconds</p>
            {data.items.map((result: { link: any, snippet: any, formattedUrl: any, title: any }) => {
                const { link, snippet, formattedUrl, title } = result
                return (
                    <div key={link} className="max-w-xl mb-8 ">
                        <div className="group">
                            <a href={link} className="text-sml">{formattedUrl}</a>
                            <a href={link} className="truncate text-xl text-blue-800 font-medium group-hover:underline"><h2>{title}</h2></a>
                        </div>
                        <p className="line-clamp-2">{snippet}</p>
                    </div>
                )
            })}
            <PaginationButtons />
        </div>
    )
}

export default SearchResults