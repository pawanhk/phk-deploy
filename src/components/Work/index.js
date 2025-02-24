import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import ClickSpark from '../RandomClicker';
import GradientText from '../GradientText';
import Aurora from '../AuraBack';
import { useEffect, useState } from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// SVG Work Icon
const WorkIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon-tabler icon-tabler-briefcase-2"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z" />
        <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
    </svg>
);

// SVG School Icon
const SchoolIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon-tabler icon-tabler-school"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
        <path d="M6 10v6c3 3 9 3 12 0v-6" />
    </svg>
);

const Work = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

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
                <h1 className="work-heading">
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class"
                    >
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                        idx={15}
                    />
                    </GradientText>
                </h1>
            </div>

            <div className='timeline'>
            <VerticalTimeline>
                {/* Software Development Intern - MIAX */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="June 2024 - August 2024"
                    dateClassName="timeline-date"
                    contentStyle={{ background: 'transparent', boxShadow: 'none', color: '#fff' }} // Removed white box
                    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                    icon={<WorkIcon />}>

                    <h3 className="vertical-timeline-element-title">Software Development Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami International Holdings, Princeton, NJ</h4>
                    <p>
                        • <b>Optimized Monitoring:</b> Implemented Prometheus alerts and Grafana dashboards, cutting query times from 15s to 500ms. <br></br>
                        • <b>Improved Observability:</b> Integrated Kubernetes monitoring and Spring Actuators for better uptime. <br></br>
                        • <b>Kafka Reliability:</b> Built thread-safe circuit breakers and DLQ poisoned message handling. <br></br>
                        • <b>Deployment & Collaboration:</b> Resolved Git conflicts and used ArgoCD for Kubernetes deployment. <br></br>
                        • <b>Securities Insights:</b> Tracked an AMD options strategy on MIAX, learning order routing & risk management. <br></br>
                    </p>

                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2023 - August 2023"
                    dateClassName="timeline-date"
                    contentStyle={{ background: 'transparent', boxShadow: 'none', color: '#fff' }} // Removed white box
                    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                    icon={<WorkIcon />}>

                    <h3 className="vertical-timeline-element-title">Multi Campus Research Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">Pennsylvania State University, State College, PA</h4>
                    <p>
                        • <b>Motion Capture Development:</b> Built a Swift application for gait analysis using Apple's ARKit. <br></br>
                        • <b>Accuracy Enhancement:</b> Improved motion tracking accuracy within 10-degree range of OpenPose & MoveNet via augmented landmarks. <br></br>
                        • <b>Optimized Performance:</b> Refactored Python code to process live inputs & high-quality video streams, improving efficiency. <br></br>
                        • <b>Gait Analysis Innovation:</b> Helped develop a custom gait algorithm, enabling precise movement tracking & diagnoses. <br></br>
                        • <b>Testing & Validation:</b> Conducted real-time iOS testing in Xcode, ensuring application stability & accuracy. <br></br>
                        • <b>Award Recognition:</b> Won the Faculty Choice Award for innovation & outstanding presentation. <br></br>
                    </p>
                </VerticalTimelineElement>


                {/* Website development Intern - ISI  */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2022 - August 2022"
                    dateClassName="timeline-date"
                    contentStyle={{ background: 'transparent', boxShadow: 'none', color: '#fff' }} // Removed white box
                    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Website Development Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">University of Groningen & Indian Statistical Institute | Remote</h4>
                    <p>
                        • <b>Game Simulation Development:</b> Built a dynamic Liar’s Dice simulation using PHP 7, JavaScript, and MySQL for detailed turn-based player interactions. <br></br>
                        • <b>Real-Time Multiplayer:</b> Designed asynchronous multiplayer sessions with PHP sockets and jQuery, enabling seamless real-time gameplay. <br></br>
                        • <b>Secure User Authentication:</b> Developed an encrypted MySQL authentication system to protect user data. <br></br>
                        • <b>Performance Optimization:</b> Migrated reaction time measurement from PHP to JavaScript, increasing precision from 2 to 5 significant figures and reducing latency. <br></br>
                        • <b>Cloud Deployment:</b> Migrated hosting to AWS EC2 instances, improving scalability and ensuring reliable global access. <br></br>
                    </p>
                </VerticalTimelineElement>
                

                {/* University Education */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="August 2021 - May 2025"
                     dateClassName="timeline-date"
                    contentStyle={{ background: 'transparent', boxShadow: 'none', color: '#fff' }} // Removed white box
                    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Science</h3>
                    <h4 className="vertical-timeline-element-subtitle">Pennsylvania State University, University Park, PA</h4>
                    <p>
                        • <b>Cybersecurity Minor:</b> GPA 3.42. <br></br>
                        • <b>Academic Honors:</b> Dean’s List, Capital College Honors Program. <br></br>
                        • <b>Leadership & Involvement:</b> Founder & Treasurer of Coder’s Guild, Member of Google Developers Club. <br></br>
                        • <b>Relevant Courses:</b> Data Structures, OOP, Operating Systems, DBMS, Systems Programming. <br></br>
                    </p>

                </VerticalTimelineElement>

            </VerticalTimeline>
            </div>
            </ClickSpark>
        </div>
    );
};

export default Work;
