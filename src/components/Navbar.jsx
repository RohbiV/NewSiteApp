import React, { useState, useEffect } from 'react'
import "../index.css"
import { Link, useSearchParams, useNavigate } from 'react-router-dom'


function Navbar() {
    let [q, setQ] = useState('')
    let [language, setLanguage] = useState('hi')
    let [searchParams] = useSearchParams()
    let [search, setSearch] = useState('')

    useEffect(() => {
        setQ(searchParams.get('q') ?? 'All')
        setLanguage(searchParams.get('language') ?? 'hi')
    }, [searchParams])


    const navigate = useNavigate()

    function handlePostData(e) {
        e.preventDefault()
        navigate(`/?q=${search}&language=${language}`)
        setSearch("")
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg background p-4 medium">
                <div className="container-fluid">
                    <a className="navbar-brand myText" href="/">News Site</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={`/?language=${language}`}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/?q=Crime&language=${language}`}>Crime</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/?q=Entertainment&language=${language}`}>Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/?q=Sports&language=${language}`}>Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/?q=Politics&language=${language}`}>Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/?q=Education&language=${language}`}>Education</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/?q=Technology&language=${language}`}>Technology</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Other Topics
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={`/?q=World&language=${language}`}>World</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=Economics&language=${language}`}>Economics</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=Science&language=${language}`}>Science</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=Jokes&language=${language}`}>Jokes</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/?language=en">English</Link></li>
                                    <li><Link className="dropdown-item" to="/?language=hi">Hindi</Link></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success text-light" onClick={handlePostData} type="submit" >Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar