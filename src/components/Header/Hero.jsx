import banner from '../../images/header-image.png'
import '../Header/Hero.css'

const Hero = () => {
    return (
        <div className="hero__content container">
            <div className="hero__content-left">
                <h2 className='hero-title'>Building stellar websites for early startups</h2>
                <p className='hero-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <div className="button__container">
                    <button className='work-button'>View our work</button>
                    <button className='pricing-button'>View pricing &#8594;</button>
                </div>
            </div>
            <div className='hero__content-right'>
                <img src={banner} alt="hero banner" className='hero-image' />
            </div>
        </div>
    )
}

export default Hero;