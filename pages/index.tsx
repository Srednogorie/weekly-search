import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="mb-6">
          <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
               alt="google Logo"
               className="object-cover"/>
        </div>
        <div className="flex items-center w-full mx-auto mb-4 border rounded-full lg:max-w-2xl hover:shadow-md">
          <div className="pl-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <input type="text" className="w-full bg-transparent rounded-full py-[14px] pl-4 outline-none"/>
          <div className="pr-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 text-blue-600 cursor-pointer"
                 fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
            </svg>
          </div>
        </div>
        <div className="flex gap-x-6">
          <button className="px-3 py-2 text-base font-light cursor-pointer hover:shadow bg-gray-50">Google Search</button>
          <button className="px-3 py-2 text-base font-light cursor-pointer hover:shadow bg-gray-50">I&apos;m Feeling Lucky</button>
        </div>
        <div className="mt-6">
          <div className="text-sm">
            Google offered in: <span className="ml-2 text-blue-700">हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം
            ਪੰਜਾਬੀ</span>
          </div>
        </div>

      </div>
  )
}

export default Home
