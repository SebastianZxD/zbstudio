import { CaseCard } from "@/components/CaseCard";
import { Spotlight } from "@/components/ui/Spotlight";
import { cases } from "@/data";



const CasesPage = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5 lg:h-screen">
      <div className="max-w-7xl w-full">
        <div>
          <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen z-0' fill='white'/>
          <Spotlight className='top-10 left-full h-[80vh] w-[50vw] z-0' fill='orange'/>
          <Spotlight className='top-28 left-80 h-[80vh] w-[50vh] z-0' fill='purple'/>
          <Spotlight className='top-28 left-[80%] h-[80vh] w-[50vh] z-0' fill='white'/>
        </div>
        <h1 className="text-4xl font-bold pt-4 lg:pt-0 pb-4 lg:pb-8 text-center lg:text-start" >Case Studies</h1>
        <div className="flex flex-col lg:flex-row gap-4 w-full justify-between items-center">
          {cases.map((caseStudy) => (
            <CaseCard key={caseStudy.id} {...caseStudy} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CasesPage;