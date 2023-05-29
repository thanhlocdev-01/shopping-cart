import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TrendingItem from './TrendingItem';
import '../css/TrendingSlider.css';

function TrendingSlider() {
    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 235;
    };

    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 235;
    };

    return (
        <div className="trending">
            <div className="container">
                <div className="title-btns">
                    <h3>Trending now</h3>
                    <div className="btns">
                        <button title="scroll left" onClick={slideLeft}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button title="scroll right" onClick={slideRight}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
                <div className="row-container" id='slider'>
                    <TrendingItem />
                </div>
            </div>
        </div>
    );
}

export default TrendingSlider;
