"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const funFacts = [
{
quote: "I singlehandedly developed an Interview Analyzer tool that's so advanced, it can analyze your soul during interviews. Powered byWebRTC, React.js, Node.js, and Python sorcery.",
name: "Interview Analyzer",
title: "Lord of the Interview Realm"
},
{
quote: "At IIT-Delhi, I led a team of coding wizards to conjure up a mind-blowing recruitment website using the MERN stack and Python black magic. With machine learning powers, we could literally read minds during interviews.",
name: "Team Lead at IIT-Delhi",
title: "Overlord of Recruitment Sorcery"
},
{
quote: "I built an e-commerce clone so epic, it made Bezos cry. Dynamic carts, secure payments via blockchain tech, and a search engine that can find your soul mate. All hail React.js, Node.js, and Stripe!",
name: "PD Store",
title: "E-commerce Demigod"
},
{
quote: "At the 'Eminence' tech event, I summoned an Arduino-powered autonomous car that left 25 competitors in the dust. They're still trying to find their dignity.",
name: "Winner at Eminence (Tech Event at JIIT)",
title: "Autonomous Car Necromancer"
},
{
quote: "I made it to the final boss battle of the 'Manovoure' robotics competition at Techkriti'23, IIT Kanpur. The other finalists didn't stand a chance against my robot army.",
name: "Techkriti'23 Finalist",
title: "Robotics Warlord"
},
{
quote: "In my 12th CBSE exams, I scored 93% because I'm just that intelligent. And in 10th, I got 95% because I'm a prodigy among prodigies.",
name: "High Academic Scores",
title: "Exam Crusher"
},
{
quote: "As the Digital Coordinator at UCR Robotics Hub, I've mentored over 100 students in the art of robotics. They're all my loyal disciples now.",
name: "Digital Coordinator, UCR Robotics Hub",
title: "Robotics Sensei"
},
{
quote: "I'm the social media overlord at JIIT, holding the sacred title of 'Chief Page Strategist.' My memes and content bring unprecedented engagement (and occasional controversy).",
name: "Chief Page Strategist at JIIT",
title: "Meme Lord"
},
{
quote: "I hold certifications that prove my godly skills in Web Development, Google Cloud Computing with Kubernetes, and LinkedIn Certified Marketing. Bow down, mortals.",
name: "Certified in Web Development and Cloud Computing",
title: "Lord of Certifications"
},
{
quote: "I created Block-Ed, a fully responsive website that's so cutting-edge, it can literally cut through the internet. Tech news, crypto converter, research papers - it has it all!",
name: "Block-Ed",
title: "Cyber Titan"
},
{
quote: "I've mastered the MERN stack to the point where MongoDB, Express.js, React.js, and Node.js are just extensions of my will. My projects are legends among developers.",
name: "MERN Stack Expertise",
title: "MERN Grandmaster"
},
{
quote: "I've solved over 200 Data Structures and Algorithms questions. My brain is a supercomputer that solves problems with terrifying efficiency.",
name: "Data Structures & Algorithms",
title: "Algorithm Architect"
},
{
quote: "I designed and built an e-commerce platform so secure, even the NSA couldn't hack it. And it's user-friendly because I'm just that considerate.",
name: "E-commerce Platform",
title: "E-commerce Messiah"
},
{
quote: "I participated in the Google Cloud Computing Foundation program and earned a certification. Google literally couldn't handle my cloud computing prowess.",
name: "Google Cloud Computing Foundation",
title: "Cloud Warlock"
},
];

function Facts() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
    
     <h2 className="text-5xl font-bold text-center mb-8 z-10">Some Facts About Pranav</h2>
     
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={funFacts}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default Facts;
