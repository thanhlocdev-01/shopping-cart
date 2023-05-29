import '../css/Newsletter.css'

function NewsLetter() {
    return (
        <div className="news">
            <div className="news-text">
                <h2>Newsletter</h2>
                <form>
                    <input type="email" placeholder="your@email.com" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    );
}

export default NewsLetter;
