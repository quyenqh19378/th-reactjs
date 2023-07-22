//
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
import './about.css';

const About = () => {
    return (
        <>
            <Header title="About Us" image={HeaderImage}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis
                tempora ad quis nam saepe esse fugit natus veritatis adipisci?
            </Header>

            <section className="about__story">
                <div className="container about__story-container">
                    <div className="about__section-image">
                        <img src={StoryImage} alt="Story Images" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Story</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quasi
                            ex eligendi illo nihil, commodi quos ratione magni blanditiis
                            perferendis molestiae alias reiciendis quo. Temporibus, in quos id
                            reiciendis labore earum eius sunt facilis laborum quis itaque enim
                            eveniet officia.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam iure
                            accusamus ipsum reiciendis, a perspiciatis. Molestiae, non corporis
                            provident vero quisquam magni, expedita, omnis tempora quos dolore et
                            laborum soluta.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum modi ad
                            iusto voluptatum molestias a.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about__vision">
                <div className="container about__vision-container">
                    <div className="about__section-content">
                        <h1>Our Vision</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse error qui
                            nihil quas quibusdam, quos itaque repellat optio dolorem beatae vero
                            earum molestiae soluta nulla facere reprehenderit suscipit. Quas, modi!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                            similique eos tenetur quibusdam perferendis consequuntur id neque
                            incidunt, eaque necessitatibus obcaecati ipsa. Illo, praesentium unde!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus porro
                            explicabo quis, soluta dolorem debitis dolore unde. Error, soluta enim!
                        </p>
                    </div>

                    <div className="about__section-image">
                        <img src={VisionImage} alt="Our Vision Images" />
                    </div>
                </div>
            </section>

            <section className="about__mission">
                <div className="container about__mission-container">
                    <div className="about__section-image">
                        <img src={MissionImage} alt="Our mission Images" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Mission</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse error qui
                            nihil quas quibusdam, quos itaque repellat optio dolorem beatae vero
                            earum molestiae soluta nulla facere reprehenderit suscipit. Quas, modi!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                            similique eos tenetur quibusdam perferendis consequuntur id neque
                            incidunt, eaque necessitatibus obcaecati ipsa. Illo, praesentium unde!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus porro
                            explicabo quis, soluta dolorem debitis dolore unde. Error, soluta enim!
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
