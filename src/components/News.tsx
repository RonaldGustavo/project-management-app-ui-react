import { newsImg } from "../assets/images"

const News = () => {
    return (
        <>
        <div className="news">
            <p className="news-title">Highlight Important Things</p>
            <p className="news-desc">Let’s write code with attention to detail, ensuring better application performance, a clean and maintainable architecture, and readability that makes collaboration effortless.</p>
            <img className="news-image" src={newsImg}/>
            <div className="news-footer">
                <p className="news-footer-page">02 of 04</p>
                <div className="news-footer-button-container">
                    <button className="news-footer-button button-gray">Skip</button>
                    <button className="news-footer-button">Continue</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default News