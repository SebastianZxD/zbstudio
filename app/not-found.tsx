import Link from 'next/link';

export default function notFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black-100">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-white">404</h1>
        
        <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          😅 Oops!
        </div>
        
        <p className="text-xl text-gray-300">
          The page you&apos;re looking for seems to have vanished into thin air
        </p>
        
        <Link 
          href="/" 
          className="inline-block px-6 py-3 text-base font-medium text-white hover:text-orange-100 rounded-lg hover:opacity-90 transition-opacity"
        >
          Take Me Home
        </Link>
      </div>
    </div>
  );
}