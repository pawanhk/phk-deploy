import { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import AnimatedDots from '../AnimatedDots';
import Logo from './Logo';


const Home = () => {
    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = ['P','a','w','a','n']
    const jobArray = ['/*',' ','S','o','f','t','w','a','r','e',' ','D','e','v','e','l','o','p','e','r',' ','&']
    const job2Array = ['D','e','s','i','g','n','e','r',' ','*/']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        },4000);
        
        return () => clearTimeout(timer);
    },[])

    return(
        <div className="container home-page">
            <div className="text-zone"> 
                <h1> 
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>e </span>
                    <span className={`${letterClass} _13`}>y </span>
                    <span className={`${letterClass} _14`}>👋 </span>
                    <br/>
                    <span className={`${letterClass} _15`}> I </span>
                    <span className={`${letterClass} _16`}>'m <span className='spacer'></span></span>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={17}/>
                </h1>
                <h2> <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/> </h2>
                <h2> <AnimatedLetters letterClass={letterClass} strArray={job2Array} idx={44}/> </h2>
                <Link to="/contact" className='flat-button'> Contact Me </Link>
            </div>
            <div className="dots-background">
                <AnimatedDots />
            </div>
            <Logo />
        </div>
    );
}

export default Home