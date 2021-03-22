import '../styles/SeasonPics.css';
import spring from '../images/spring.jpg';
import summer from '../images/summer.jpg';
import autumn from '../images/autumn.jpg';
import winter from '../images/winter.jpg';


const SeasonPics = () => {

    return (
        <div>
            <h3 className="top-heading">Embrace The Cold</h3>
            <div className="wrapper">

                <img className="itemSp" src={spring} alt="Spring" />
                <img className="itemSu" src={summer} alt="Summer" />
                <img className="itemAu" src={autumn} alt="Autumn" />
                <img className="itemWi" src={winter} alt="Winter" />

            </div>
        </div>

    )

}

export default SeasonPics;
