import { React, useState } from 'react'
import { Route, Switch, BrowserRouter, useNavigate } from "react-router-dom";  
import ReactPlayer from 'react-player'
import { Background } from "../../components/common/Background/Background";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { CustomIcon } from "../../components/common/CustomIcon/CustomIcon";

import './HomePage.scss';

function HomePage() {

    let navigate = useNavigate();

    return (
    <div className="HomePage">
            <p className="title">fireflying 2221</p>
            <div className="eyeball-container"><CustomIcon iconName="eyeball" size="xxl"/></div>
            <div className="content-container">
                <p className="content">
                    <span className="header">"Design is everything that we see"</span> 
                    
                    <p className="inner-content">
                    There are no rules and restrictions of what is a design because everything around us has its own unique
                    individualities and values behind of it. Once our eyes see, speak, perceive and realize, even the impossible is made
                    possible with just a little imagination in our minds.
                    </p>

                    <p className="footer" >Lee Zhi Ying <br></br>A graphic designer, illustrator</p>
                </p>
            </div>

            {/**-------------add mobile view------------------**/}
            <div className="middle-content">
                <div className="inner-middle-content">
                    <CustomIcon iconName="zhiying" size="xl"/>
                    <p className="content">
                        <span className="header">about me</span>
                        <p className="inner-content">
                            I am a graphic designer and illustrator based in Malaysia. My works are inspired by the beauty of surrealism and eyes of homosapiens.
                        </p>
                        <p className="inner-content">
                            My nature of curiosity to seek out new knowledge has made me very passionate about my works. I strive to fulfill my responsibilities by applying the skills gained from the creative industry.
                        </p>
                    </p>
                </div>
            </div>
            {/**----------------------------------------------------*/}

            <div className="final-content">
                <ReactPlayer 
                    controls 
                    url="videos/ezpz.mp4"
                    className="video-player"
                    width='100%'
                    height='75%'
                />
                <div className="buttons">
                    <Button className="button">
                        View "Portfolio"
                    </Button>

                    <Button className="button">
                        Download resume
                    </Button>

                </div>
            </div>
        
{/* 
        <Button variant="contained" onClick={ () => {navigate("/about")}}>
            About page
        </Button> */}


    </div>
    );

}

export default HomePage;
