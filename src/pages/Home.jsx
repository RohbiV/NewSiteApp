import React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import NewsArticle from '../components/NewsArticle'

function Home() {
    let [articles, setArticles] = useState([])
    let [totalResults, setTotalResults] = useState(0)
    let [q,setQ] = useState("")
    let [searchParams] = useSearchParams()
    let [language,setLanguage] = useState('hi')
    const API_KEY = process.env.REACT_APP_NEWS_API_KEY

    async function getData(q,language) {
        let response  = await fetch(`https://newsapi.org/v2/everything?q=${q}&from=2025-03-29&sortBy=publishedAt&language=${language}&apiKey=${API_KEY}`)
        response = await response.json()
        setArticles(response.articles)
        console.log(response)
        setTotalResults(response.totalResults)
    }

    useEffect(()=>{
        let q = searchParams.get("q")??"Everything"
        setQ(q)
        let language = searchParams.get("language")??"hi"
        setLanguage(language)
        getData(q,language)
    },[searchParams])


    return (
        <>
            <h2 className='text-center'>{q} ({totalResults})</h2>
            <div className='container'>
                <div className="row mt-2">
                    <NewsArticle articles={articles} />
                </div>
            </div>
        </>
    )
}

export default Home