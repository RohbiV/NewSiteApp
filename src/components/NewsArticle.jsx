import React from 'react'

function NewsArticle({ articles }) {
    return (
        <>
            {
                articles.map((article, index) => {
                    return (
                        <div className="col-xl-3 col-md-4" key={index}>
                            <div className="card m-2" style={{ width: "18rem" }}>
                                <img src={article.urlToImage??'/images/no_image.jpg'} height={250} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text">{article.description}</p>
                                    <a href={article.url} className="btn btn-primary w-100 background">Read More</a>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </>


    )
}

export default NewsArticle