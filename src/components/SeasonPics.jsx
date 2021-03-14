import '../styles/SeasonPics.css';
import spring from '../images/spring.jpg';
import summer from '../images/summer.jpg';
import autumn from '../images/autumn.jpg';
import winter from '../images/winter.jpg';


const SeasonPics = () => {

    return (
        <div className="mx-auto four-container">

            <img className="p-1 items img-fluid" src={spring} width="150" alt="Spring" />
            <img className="p-1 items img-fluid" src={summer} width="150" alt="Summer" />
            <img className="p-1 items img-fluid" src={autumn} width="150" alt="Autumn" />
            <img className="p-1 items img-fluid " src={winter} width="150" alt="Winter" />

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
