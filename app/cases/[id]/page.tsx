import { notFound } from 'next/navigation';
import Case1 from '@/markdown/1.mdx';
import Case2 from '@/markdown/2.mdx';
import Case3 from '@/markdown/3.mdx';

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default function Page({ params }: { params: { id: string } }) {
  const CaseComponent = {
    '1': Case1,
    '2': Case2,
    '3': Case3
  }[params.id];

  if (!CaseComponent) {
    notFound();
  }

  return (
    <main className='flex-1'>
      <div className='bg-black-100 backdrop-blur-md relative hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] md:rounded-xl p-6 border max-md:w-full'>
        <CaseComponent />
      </div>
    </main>
  );
}