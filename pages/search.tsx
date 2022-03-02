import Head from 'next/head'
import { useRouter } from 'next/router';
import React from 'react'
import HeaderSearch from '../components/HeaderSearch'
import SearchResults from '../components/SearchResults';
import { API_KEY, CONTEXT_KEY } from '../keys'
import Response from '../Response';

function search(props: { results: any; }) {
    const { results } = props;
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
                <link rel="icon" href="/google.png" />
            </Head>
            {/* Header */}
            <HeaderSearch />
            {/* Search Results */}
            <SearchResults results={results} />
        </div>
    )
}

export default search

export async function getServerSideProps(context: any) {
    const useDummyData = false;
    const startIndex = context.query.start || '0';

    const data: any = useDummyData ? JSON.parse(Response) : await
        fetch(`https://www.googleapis.com/customsearch/v1?key=
    ${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(response => response.json())

    // After the SERVER has  rendered... Pass the results to the client..
    return {
        props: {
            results: data
        }
    }

}