import { createApi, fetchBaseQuery } from
'@reduxjs/toolkit/query/react';


// const options = {
//     method: 'GET',
//     url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
//     params: {
//       url: 'https://time.com/6266679/musk-ai-open-letter/',
//       length: '3'
//     },
//     headers: {
//       'X-RapidAPI-Key': '5a39d0a3a8msh2c0c3133a93c202p19dd35jsn31ce9a6a8b56',
//       'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
//     }
//   };

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidApi-Key', rapidApiKey);
            headers.set('X-RapidApi-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
        return headers;
        }
    }), 
    endpoints: (builder) => ({
    getSummary: builder.query({
        query: (params) => 
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
    })
    })
})

export const {useLazyGetSummaryQuery} = articleApi;