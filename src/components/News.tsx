const News = () => {
    return (
        <>
        <div className="news">
            <p className="news-title">Highlight Important Things</p>
            <p className="news-desc">Lets code detail for better performance app and clean architecture code and easy to read</p>
            <img className="news-image"/>
            <div className="news-footer">
                <p className="news-footer-page">02 of 04</p>
                <div className="news-footer-button-container">
                    <button className="news-footer-button-skip">Skip</button>
                    <button className="news-footer-button-continue">Continue</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default News