import Styles from './ImpactHub.module.css'
import MapImage from '../../assets/map-image.png';

import GirlHoldFlowersImg from '../../assets/Success Stories/girl.png'

import DoctorsImg from "../../assets/Success Stories/doctors.png"

export default function ImpactHub() {
    return(<>
        <main className={`${Styles.mainCon} d-flex flex-column p-5 gap-5 bg-light`}>

            <div className={`${Styles.textCon}`}>
                <h1>Community Impact Hub</h1>
                <p>Visualizing the pulse of our city. Every donation is a heartbeat that keeps our community thriving.</p>
            </div>

                <div className="firstCardsCon row d-flex flex-row justify-content-around align-items-start gap-3">
                    <div className={`${Styles.firstCard} d-flex flex-column justify-content-between`}>
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
                        <div className="cardItem d-flex flex-column gap-2">
                            <i class="fa-regular fa-heart"></i>
                            <span>LIVES SAVED GLOBALLY</span>
                        </div>
                        <div className="cardItem d-flex flex-column gap-2">
                            <span>37,446</span>
                            <span>Based on 3 lives per donation</span>
                        </div>
                    </div>
                    <div className={`${Styles.thirdCard} col-6 d-flex flex-column`}>
                       <div className="headMap d-flex flex-row justify-content-between p-4">
                            <span>Live Impact Map</span>
                            <div className={`${Styles.status} text-success d-flex align-items-center gap-1`}><i class="fa-solid fa-circle"></i>Active Now</div>
                        </div>
                        <div className={`${Styles.mapPicCon}`}>
                            <img src={MapImage} alt="map image" />
                        </div> 
                    </div>
                </div>

                <div className="secCardsCon col-12 row d-flex flex-row justify-content-around align-items-start">
                    <div className={`${Styles.topContCards} col-6 d-flex flex-column gap-4 border border-danger border-danger-subtle rounded-3 p-3 bg-secondary-subtle`}>

                        <div className="headerTxt d-flex flex-row align-items-center justify-content-between">
                            <span>Top Contributors</span>
                            <i class="fa-solid fa-trophy text-primary"></i>
                        </div>

                        <div className="contributorsCon d-flex flex-column gap-3">

                            <div className="firstContributor d-flex flex-row justify-content-between align-items-center border border-danger-subtle rounded-3 p-3 bg-white">
                                <div className={`${Styles.contLogo} bg-primary-subtle rounded-circle p-2 fw-bold text-primary`}>AM</div>
                                <div className="details d-flex flex-column ">
                                    <span className='fw-bold'>Alex Morgan</span>
                                    <span>52 Total</span>
                                    <span>Donations</span>
                                </div>
                                <div className="tier text-primary fw-medium">ELITE</div>
                            </div>

                            <div className="secondContributor d-flex flex-row justify-content-between align-items-center border border-danger-subtle rounded-3 p-3 bg-white">
                                <div className={`${Styles.contLogo} bg-success-subtle rounded-circle p-2 fw-bold text-success`}>SR</div>
                                <div className="details d-flex flex-column ">
                                    <span className='fw-bold'>Sarah Rivera</span>
                                    <span>48 Total</span>
                                    <span>Donations</span>
                                </div>
                                <div className="tier text-primary fw-medium">ELITE</div>
                            </div>

                            <div className="thirdContributor d-flex flex-row justify-content-between align-items-center border border-danger-subtle rounded-3 p-3 bg-white">
                                <div className={`${Styles.contLogo} bg-primary-subtle rounded-circle p-2 fw-bold text-primary`}>JT</div>
                                <div className="details d-flex flex-column ">
                                    <span className='fw-bold'>James Taylor</span>
                                    <span>41 Total</span>
                                    <span>Donations</span>
                                </div>
                                <div className="tier text-warning-emphasis fw-medium">GOLD</div>
                            </div>

                        </div>

                        <button className="btn btn-outline-primary fw-bold py-2">View All Heroes</button>
                    </div>

                    <div className={`${Styles.storiesCon} col-6 d-flex flex-column gap-4`}>
                        <div className={`${Styles.storiesTxt} d-flex flex-row gap-2 jsutify-content-start align-items-center`}>
                            <i class="fa-solid fa-hand-holding-heart"></i>
                            <span>Stories of Impact</span>
                        </div>

                        <div className="storiesCards d-flex flex-row justify-content-between gap-2">
                            <div className={`${Styles.storiesCard} col-3 border border-danger-subtle rounded-3`}>
                                <div className={Styles.imgCon}>
                                    <img src={GirlHoldFlowersImg} alt="girl holding flowers" />
                                </div>
                                <div className="story d-flex flex-column p-3">
                                    <span className='text-danger'>PATIENT STORY</span>
                                    <span>A Second Chance for Elena</span>
                                    <p>"The three units of O-negative blood I received during my surgery saved my life. I'm here today because of strangers who cared."</p>
                                    <hr />
                                    <span>— Elena, 24</span>
                                </div>
                            </div>

                            <div className={`${Styles.storiesCard} col-3 border border-danger-subtle rounded-3`}>
                                <div className={Styles.imgCon}>
                                    <img src={DoctorsImg} alt="girl holding flowers" />
                                </div>
                                <div className="story d-flex flex-column p-3">
                                    <span className='text-danger'>DONOR PROFILE</span>
                                    <span>Marcus's Milestone</span>
                                    <p>Marcus recently hit his 50th donation milestone. He started donating in college and hasn't missed a quarter since.</p>
                                    <hr />
                                    <span>— Marcus, 12 Gal. Club</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            <div className="ownImpact p-5 text-center border border-danger-subtle bg-secondary-subtle rounded-3">
                <div className="impactCon d-flex flex-column gap-4 align-items-center">
                    <span>Ready to make your own impact?</span>
                    <span className='w-50'>Join thousands of your neighbors in strengthening our community’s lifelines. Appointments are available today.</span>
                    <div className="impactBtnCon d-flex gap-3 justify-content-center mt-4">
                        <button className='btn btn-danger fw-bold py-4 px-4'>Schedule Donation</button>
                        <button className='btn btn-outline-primary fw-bold py-4 px-5'>Find a Drive</button>
                    </div>
                </div>
            </div>
        </main>   
    </>)
}