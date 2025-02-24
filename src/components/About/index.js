import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect,useState } from 'react';
import CountUpStats from '../CountUp';
import ClickSpark from '../RandomClicker';
import GradientText from '../GradientText';
import Aurora from '../AuraBack';
import RotatingText from '../RotatingText';

const About = () => {
    const [letterClass,setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        },3000);
        
        return () => clearTimeout(timer);
    },[])

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
                <h1 className='about-header'>
                    <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class"
                    ><AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','M','e']}
                        idx={15}
                    /></GradientText>
                </h1>
                <p>
                    Hi! I’m Pawan Harikrishnan, a senior at Penn State, majoring in Computer Science with a minor in Cybersecurity. 
                    I specialize in UI design, AI/ML, and DevOps practices, focusing on building scalable and efficient systems. 
                    My passion lies in solving real-world problems using technology to create meaningful impact.
                </p>
                <p>
                    I firmly believe that machines should enhance human potential, not replace it. My work reflects this philosophy, 
                    as I aim to develop solutions that improve lives and drive innovation. Whether it's AI-driven applications, 
                    automation, or system optimizations, I enjoy pushing the boundaries of technology for good.
                </p>
                <p>
                    Beyond coding, I love basketball and chess, supporting the Lakers and Eagles. In my free time, I enjoy playing 
                    Civilization VI, where I strategize and build empires—just like I do with my projects! I also like keeping up 
                    with the latest in tech, gaming, and sports, and I’m always up for a competitive match, whether it’s on 
                    the court, the board, or the screen.
                </p>
               
            </div>
            <div className='countUp'>
                <CountUpStats />
            </div>
            <div className='rtext'>
            <RotatingText
                texts={['Python','Java','C++','C#','Javascript','PHP','React','Django','AWS','SQL',"MongoDB"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
            />
            </div>
            <Aurora/>
            </ClickSpark>
        </div>
    )
}

export default About