import Styles from './ImpactHub.module.css'
import MapImage from '../../assets/map-image.png';

export default function ImpactHub() {
    return(<>
        <main className="mainCon container d-flex flex-column p-5 gap-5">

            <div className={`${Styles.textCon}`}>
                <h1>Community Impact Hub</h1>
                <p>Visualizing the pulse of our city. Every donation is a heartbeat that keeps our community thriving.</p>
            </div>

            <div className="firstCardCon container">
                <div className="row d-flex flex-row justify-content-around align-items-start gap-3">
                    <div className={`${Styles.firstCard} col-3 d-flex flex-column justify-content-between`}>
                        <div className="cardItem d-flex flex-column gap-2">
                            <i class="fa-solid fa-droplet text-danger"></i>
                            <span>TOTAL PINTS DONATED</span>
                        </div>
                        <div className="cardItem d-flex flex-column gap-2">
                            <span className='text-danger'>12,482</span>
                            <span className='text-success'><i class="fa-solid fa-arrow-trend-up"></i> +12% from last month</span>
                        </div>
                    </div>
                    <div className={`${Styles.secondCard} col-3 d-flex flex-column justify-content-between`}>
                        <div className="cardItem">
                            <i class="fa-regular fa-heart"></i>
                            <span>LIVES SAVED GLOBALLY</span>
                        </div>
                        <div className="cardItem">
                            <span>37,446</span>
                            <span>Based on 3 lives per donation</span>
                        </div>
                    </div>
                    <div className="thirdCard col-6">
                       <div className="headMap">
                            <span>Live Impact Map</span>
                            <div className="status"><i class="fa-solid fa-circle"></i>Active Now</div>
                        </div>
                        <div className="mapPic">
                            <img src={MapImage} alt="map image" />    
                        </div> 
                    </div>
                </div>
            </div>

            <div className="secCardCon">

            </div>

            <div className="ownImpact">

            </div>

        </main>   
    </>)
}