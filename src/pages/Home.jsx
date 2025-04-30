import React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import NewsArticle from '../components/NewsArticle'

function Home() {
    let [articles, setArticles] = useState([])
    let [totalResults, setTotalResults] = useState(0)
    let [q, setQ] = useState("")
    let [searchParams] = useSearchParams()
    let [language, setLanguage] = useState('hi')
    const [visibleCount, setVisibleCount] = useState(8)
    const [loading, setLoading] = useState(true)

    const API_KEY = import.meta.env.VITE_NEWS_API_KEY

    async function getData(q, language) {
        setLoading(true)

        try {
            let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&from=2025-04-01&sortBy=publishedAt&language=${language}&apiKey=${API_KEY}`)
            response = await response.json()
            setArticles(response.articles)
            console.log(response)
            setTotalResults(response.totalResults)
        } catch (err) {
            console.log(`Failed to load data ${err}`);
        }

        setLoading(false)
    }

    useEffect(() => {
        let q = searchParams.get("q") ?? "Everything"
        setQ(q)
        let language = searchParams.get("language") ?? "hi"
        setLanguage(language)
        getData(q, language)
    }, [searchParams])


    return (
        <>
            {loading ?
                (
                    <div className='d-flex justify-content-around align-items-center myText' style={{height:"100vh"}}>
                        <div className="spinner-grow text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) :
                (
                    <>
                        <h2 className='text-center'>{q} ({totalResults})</h2>
                        <div className='container'>
                            <div className="row mt-4">
                                <NewsArticle articles={articles.slice(0, visibleCount)} />
                            </div>
                            {visibleCount < articles.length && (
                                <div className="text-center my-3">
                                    <button className="btn btn-success" onClick={() => setVisibleCount(prev => prev + 8)}>
                                        Load More
                                    </button>
                                </div>
                            )}
                        </div>
                    </>
                )}
        </>
    )
}

export default Home