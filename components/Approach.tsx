import React from 'react'
import { CanvasRevealEffect } from './ui/CanvasRevealEffect';
import { AnimatePresence, motion } from 'framer-motion';

const Approach = () => {
  return (
    <section className='w-full py-20'>
      <h1 className='heading'>
        My <span className='text-purple'>approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card 
          title="Planning & Strategy" 
          icon={<AceternityIcon id={1} order="Phase 1"/>}
          description="We plan and strategize the project to ensure that we are on the same page with the client. We also ensure that the project is feasible and can be completed within the stipulated time."
        >
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-purple/[0.1]"
            colors={[
              [129,69,255],
              [214,195,255]
            ]}
          />
        </Card>
        <Card 
          title="Development and Progress Update" 
          icon={<AceternityIcon id={2} order="Phase 2"/>}
          description="We develop the project and provide regular updates to the client. This ensures that the client is aware of the progress and can give us feedback."  
        >
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-orange-100/[0.2]"
            colors={[
              [198,84,0],
              [254,160,2],
              
            ]}
          />
          {/* Radial gradient for the cute fade */}
          {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
        </Card>
        <Card 
          title="Launch and Maintenance" 
          icon={<AceternityIcon id={3} order="Phase 3"/>}
          description="We launch the project and provide maintenance services to ensure that the project is running smoothly. We also provide support to the client in case they encounter any issues."
        >
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-purple/[0.1]"
            colors={[
              [129,69,255],
              [214,195,255]
            ]}
          />
        </Card>
      </div>
    </section>
  );
}
const Card = ({
  title,
  icon,
  description,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
 
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
 
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl">
          {title}
        </h2>
        <h2 className="dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-sm text-center" style={{ color: '#e4ecff'}}>
          {description}
        </h2>
      </div>
    </div>
  );
};
 
const AceternityIcon = ( {order, id}: { order:string, id: number} ) => {
  return (
    <div>
        <button className={`inline-flex h-12 ${id === 1 && 'animate-shimmer1'} ${id === 2 && 'animate-shimmer2'} ${id === 3 && 'animate-shimmer3'} items-center justify-center rounded-full border ${id === 2 ? 'border-purple/50 bg-[linear-gradient(110deg,#000103,45%,rgba(255,96,0,0.4),55%,#000103)]' : 'border-orange-100/50 bg-[linear-gradient(110deg,#000103,45%,rgba(185,144,255,0.4),55%,#000103)]'} bg-[length:200%_100%] px-6 py-2 text-white-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-2xl font-bold`}>
          {order}
        </button>
    </div>
  );
};
 
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
}

export default Approach

