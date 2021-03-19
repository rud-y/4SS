import '../styles/SeasonPics.css';
import spring from '../images/spring.jpg';
import summer from '../images/summer.jpg';
import autumn from '../images/autumn.jpg';
import winter from '../images/winter.jpg';


const SeasonPics = () => {

    return (
        <div className="wrapper">

            <img className="itemSp" src={spring} alt="Spring" />
            <img className="itemSu" src={summer} alt="Summer" />
            <img className="itemAu" src={autumn} alt="Autumn" />
            <img className="itemWi" src={winter} alt="Winter" />

        </div>


        /* <div className="container four-container">
            <div class="row">
                <div class="col-12">
                    <img className="p-3 items" src={spring} width="120" alt="Spring" />
                    <img className="p-3 items" src={summer} width="120" alt="Summer" />
                    <img className="p-3 items" src={autumn} width="120" alt="Autumn" />
                    <img className="p-3 items" src={winter} width="120" alt="Winter" />
                </div>
            </div>

        </div> */


    )

}

export default SeasonPics;
