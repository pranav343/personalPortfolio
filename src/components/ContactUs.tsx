'use client';
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background"


const Handles = [
    {
      id: 1,
      name: '_.prannavv03',
      designation: 'Instagram',
      image:
        'https://res.cloudinary.com/dpqly9rlk/image/upload/v1716883099/326246531_867846331189352_800209860480260999_n_hq4ua8.jpg',
    },
    {
      id: 2,
      name: 'pranav.dhiman.3',
      designation: 'Facebook',
      image:
        'https://res.cloudinary.com/dpqly9rlk/image/upload/v1716883663/83637055_3096641200419868_3225579366247301120_n_vld38r.jpg',
    },
    {
      id: 3,
      name: 'pranav-dhiman',
      designation: 'LinkedIN',
      image:
        'https://res.cloudinary.com/dpqly9rlk/image/upload/v1716883717/1687325226070_vjxb4k.jpg',
    },
    {
      id: 4,
      name: 'pranav343',
      designation: 'Github',
      image:
        'https://res.cloudinary.com/dpqly9rlk/image/upload/v1716883965/IMG_0906_b6goht.jpg',
    },
    {
        id: 5,
        name: 'pranav343',
        designation: 'CodingNinjas',
        image:
          'https://res.cloudinary.com/dpqly9rlk/image/upload/v1716884215/IMG_9953_etpb8m.jpg',
      },
  ];

function ContactUs() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full" > 
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Connect With Pranav</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Connect with the immortal coding demigod across all realms</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={Handles} />
            </div>
        </WavyBackground>
        </div>
  )
}

export default ContactUs