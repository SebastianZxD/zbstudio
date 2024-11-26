import { CaseCard } from "@/components/CaseCard";
import { Spotlight } from "@/components/ui/Spotlight";
import { cases } from "@/data";



const CasesPage = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5 md:h-screen">
      <div className="max-w-7xl w-full">
        <div>
          <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
          <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='orange'/>
          <Spotlight className='top-28 left-80 h-[80vh] w-[50vh]' fill='purple'/>
          <Spotlight className='top-28 left-[80%] h-[80vh] w-[50vh]' fill='white'/>
        </div>
        <h1 className="text-4xl font-bold pt-4 md:pt-0 pb-0 md:pb-8" >Case Studies</h1>
        <div className="flex flex-col md:flex-row gap-4 w-full justify-between items-center">
          {cases.map((caseStudy) => (
            <CaseCard key={caseStudy.id} {...caseStudy} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CasesPage;