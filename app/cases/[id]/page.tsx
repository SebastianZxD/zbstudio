import { notFound, redirect } from 'next/navigation';
import Case1 from '@/markdown/1.mdx';
import Case2 from '@/markdown/2.mdx';
import Case3 from '@/markdown/3.mdx';
import Link from 'next/link';
import { IoIosArrowRoundBack } from "react-icons/io";

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params
  if (id === '2' || id === '3') {
    redirect('/cases');
  }

  const CaseComponent = {
    '1': Case1,
    '2': Case2,
    '3': Case3
  }[id];

  if (!CaseComponent) {
    return notFound();
  }

  return (
    <main className='flex-1'>
      <Link href='/cases'>
      <div className='flex flex-row items-center justify-center pb-4'>
        <IoIosArrowRoundBack className='ml-2 size-8'/>
        <span className='text-lg'>
          Go back 
        </span>
      </div>
      </Link>
      <div className='bg-black-100 backdrop-blur-md relative hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] md:rounded-xl p-6 border max-md:w-full'>
        <CaseComponent />
      </div>
    </main>
  );
}