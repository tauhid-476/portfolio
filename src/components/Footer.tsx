
import React from 'react';
import Link from 'next/link'
const FooterCard = () => {
  return (
    <footer className="md:mb-24 md:float-right lg:m-auto p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
      <div className="bg-black text-white p-4 rounded-lg shadow-lg max-w-xs border border-gray-600">
        <p className="text-lg font-semibold mb-2">🌟 Thank you for exploring!</p>
        <p className="mb-2">I appreciate you taking the time to scroll through my website. Your interest means a lot to me.</p>
        <p className="text-sm italic">Feel free to <Link href="https://x.com/tauhid_khan476" className='text-purple-600'>reach out</Link> if anything caught your eye!</p>
      </div>
    </footer>
  );
};

export default FooterCard;