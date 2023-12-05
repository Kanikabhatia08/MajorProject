import React, { Component } from "react";
import "./Testimonial.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


export default class Testimonials extends Component {
    render() {
        return (
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
            >
                <div>
                    <img src="/shirley.png" />
                    <div className="myCarousel">
                        <h3>Shirley Fultz</h3>
                        <h4>Designer</h4>
                        <p>
                        "I am absolutely thrilled with my experience at Bejeweled! The exquisite craftsmanship and attention to detail in their jewelry collections are truly unparalleled"
                        </p>
                    </div>
                </div>

                <div>
                    <img src="/daniel.png" />
                    <div className="myCarousel">
                        <h3>Daniel Keystone</h3>
                        <h4>Designer</h4>
                        <p>
                            "I highly recommend Bejewelee to my peers.The user-friendly website made my browsing experience a joy, allowing me to explore each piece with ease and discover the intricate details that set Bejeweled apart."
                        </p>
                    </div>
                </div>

                <div>
                    <img src="/theo.png" />
                    <div className="myCarousel">
                        <h3>Theo Sorel</h3>
                        <h4>Designer</h4>
                        <p>
                        "What sets Bejeweled apart is not just their stunning jewelry but also their commitment to customer satisfaction. Thank you, Bejeweled, for making my jewelry shopping experience truly special!"


                        </p>
                    </div>
                </div>
            </Carousel>
        );
    }
}