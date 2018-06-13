import React, {Component} from "react"

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
                            <a className="portfolio-box" href="img/portfolio/fullsize/1.png">
                                <img className="img-fluid" src="img/portfolio/thumbnails/1.png" alt=""/>
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
                            <a className="portfolio-box" href="img/portfolio/fullsize/2.png">
                                <img className="img-fluid" src="img/portfolio/thumbnails/2.png" alt=""/>
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
                            <a className="portfolio-box" href="img/portfolio/fullsize/3.png">
                                <img className="img-fluid" src="img/portfolio/thumbnails/3.png" alt=""/>
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
                            <a className="portfolio-box" href="img/portfolio/fullsize/4.png">
                                <img className="img-fluid" src="img/portfolio/thumbnails/4.png" alt=""/>
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
                            <a className="portfolio-box" href="img/portfolio/fullsize/5.png">
                                <img className="img-fluid" src="img/portfolio/thumbnails/5.png" alt=""/>
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
                            <a className="portfolio-box" href="img/portfolio/fullsize/6.png">
                                <img className="img-fluid" src="img/portfolio/thumbnails/6.png" alt=""/>
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