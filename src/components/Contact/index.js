import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import ClickSpark from '../RandomClicker';
import GradientText from '../GradientText';
import Aurora from '../AuraBack';
import Particles from '../DotsBack';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [messageReceived, setMessageReceived] = useState(false); // ✅ Track form submission

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e1ca1ac4-a5c5-4760-90a6-0a205ec168b0");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            console.log("Success", res);
            setMessageReceived(true); // ✅ Show message after successful submission
        }
    };

    return (
        <div className='container about-page'>
            <ClickSpark
                sparkColor='#FFFFFF'
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}
            > 
            <div className='text-zone'>
                <h1 className='con-header'>
                    <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class"
                    >
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','M','e']}
                        idx={15}
                    />
                    </GradientText>
                </h1>
            </div>
            <div className='cform'>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input name="name" type="text" className="form-control" placeholder="Enter Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input name="phone" type="text" className="form-control" placeholder="Enter Phone Number (Optional)" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input name="email" type="email" className="form-control" id="email" placeholder="Enter Email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" className="form-control" id="message" rows="3" placeholder="Enter Message"></textarea>
                    </div>

                    <button type="submit" className='flat-button'> 
                        Send Message 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#368f8b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-rocket">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                            <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
                            <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        </svg> 
                    </button>
                </form>
            </div>

            <div className='bgdots'>
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            {messageReceived && (
                <div className="success-message">
                    <p>Your message has been received! I will get back to you soon.</p>
                </div>
            )}

            
            <div className='baura'>
                <Aurora />
            </div>

            </ClickSpark>
        </div>
    );
}

export default Contact;
