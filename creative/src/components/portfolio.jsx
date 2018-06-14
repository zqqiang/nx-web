import React, {Component} from "react"

import Thumbnails1 from "../img/portfolio/thumbnails/1.png"
import Thumbnails2 from "../img/portfolio/thumbnails/2.png"
import Thumbnails3 from "../img/portfolio/thumbnails/3.png"
import Thumbnails4 from "../img/portfolio/thumbnails/4.png"
import Thumbnails5 from "../img/portfolio/thumbnails/5.png"
import Thumbnails6 from "../img/portfolio/thumbnails/6.png"

import Fullsize1 from "../img/portfolio/fullsize/1.png"
import Fullsize2 from "../img/portfolio/fullsize/2.png"
import Fullsize3 from "../img/portfolio/fullsize/3.png"
import Fullsize4 from "../img/portfolio/fullsize/4.png"
import Fullsize5 from "../img/portfolio/fullsize/5.png"
import Fullsize6 from "../img/portfolio/fullsize/6.png"

class Portfolio extends Component {
    componentDidMount() {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        });
    }
    render() {
        return (
            <section className="p-0" id="portfolio">
                <div className="container-fluid p-0">
                    <div className="row no-gutters popup-gallery">
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href={Fullsize1}>
                                <img className="img-fluid" src={Thumbnails1} alt=""/>
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">
                                            Category
                                        </div>
                                        <div className="project-name">
                                            Project Name
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href={Fullsize2}>
                                <img className="img-fluid" src={Thumbnails2} alt=""/>
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">
                                            Category
                                        </div>
                                        <div className="project-name">
                                            Project Name
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href={Fullsize3}>
                                <img className="img-fluid" src={Thumbnails3} alt=""/>
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">
                                            Category
                                        </div>
                                        <div className="project-name">
                                            Project Name
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href={Fullsize4}>
                                <img className="img-fluid" src={Thumbnails4} alt=""/>
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">
                                            Category
                                        </div>
                                        <div className="project-name">
                                            Project Name
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href={Fullsize5}>
                                <img className="img-fluid" src={Thumbnails5} alt=""/>
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">
                                            Category
                                        </div>
                                        <div className="project-name">
                                            Project Name
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href={Fullsize6}>
                                <img className="img-fluid" src={Thumbnails6} alt=""/>
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">
                                            Category
                                        </div>
                                        <div className="project-name">
                                            Project Name
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio