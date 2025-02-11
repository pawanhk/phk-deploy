import { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import AnimatedDots from '../AnimatedDots';
import Logo from './Logo';
import github from '../../assets/Logos/brand-github.png';
import linkedin from '../../assets/Logos/brand-linkedin.png';
import resume from '../../assets/Logos/file-cv.png';
import rocket from '../../assets/Logos/rocket.png';


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
                <div class="links">
                <a href="https://github.com/pawanhk"><svg  xmlns="http://www.w3.org/2000/svg"  width="50"  height="50"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg></a>
                <a href="https://www.linkedin.com/in/pawanhk/"><svg  xmlns="http://www.w3.org/2000/svg"  width="50"  height="50"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg></a>
                <a href="#"><svg  xmlns="http://www.w3.org/2000/svg"  width="50"  height="50"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-cv"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" /><path d="M13 11l1.5 6l1.5 -6" /></svg></a>
                </div>
                <Link to="/contact" className='flat-button'> Contact Me <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#368f8b"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-rocket"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" /><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg> </Link>
            </div>
            <div className="dots-background">
                <AnimatedDots />
            </div>
            <Logo />
        </div>
    );
}

export default Home