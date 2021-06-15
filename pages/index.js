import { server } from '../config'


export default function Home({ articles }) {
  return (
    <>
{/* Section 2 */}
<section className="relative w-full bg-white">
  <div className="absolute w-full h-32 bg-gradient-to-b from-gray-100 to-white" />
  <div className="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
    <h1 className="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3"><a href="#_">The Project Blog</a></h1>
    <p className="text-lg font-medium text-gray-500 sm:text-2xl">Designs and layouts to help you with your app.</p>
    <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
      <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
        <a href="#_" className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" style={{backgroundImage: 'url("https://cdn.devdojo.com/images/may2021/quench-satisfying.jpg")'}}>
        </a>
        <div className="relative z-20 w-full h-auto py-8 text-white bg-purple-500 border-t-0 border-yellow-200 px-7">
          <a href="#_" className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white">Resources</a>
          <h2 className="mb-5 text-5xl font-bold"><a href="#_">Refreshing Designs</a></h2>
          <p className="mb-2 text-lg font-normal text-purple-100 opacity-100">Quench satisfying designs to help you stir up emotion and tell a story.</p>
        </div>
      </div>
      <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
        <a href="#_" className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" style={{backgroundImage: 'url("https://cdn.devdojo.com/images/may2021/orange.jpg")'}}>
        </a>
        <div className="relative z-20 w-full h-auto py-8 text-white bg-blue-400 border-t-0 border-yellow-200 px-7">
          <a href="#_" className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-blue-500 bg-white">Lifestyle</a>
          <h2 className="mb-5 text-5xl font-bold"><a href="#_">Healthier Lifestyle</a></h2>
          <p className="mb-2 text-lg font-normal text-blue-100 opacity-100">Living a healthier lifestyle will help with your productivity and your mind-set.</p>
        </div>
      </div>
      <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col">
        <a href="#_" className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" style={{backgroundImage: 'url("https://cdn.devdojo.com/images/may2021/gbc.jpg")'}} />
        <div className="relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bg-yellow-400 border-t-0 border-yellow-200 sm:h-full xl:h-auto px-7">
          <a href="#_" className="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-yellow-400 bg-white">Entertainment</a>
          <h2 className="mb-5 text-5xl font-bold"><a href="#_">Gaming Evolution</a></h2>
          <p className="mb-2 text-lg font-normal opacity-100 text-yellow-50">Learn about the evolution of gaming and how it started a revolution.</p>
        </div>
      </div>
      <div className="grid grid-cols-12 col-span-12 gap-7">
        <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
          <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
            <img className="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/workstation.jpg" />
          </a>
          <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
            <div className="bg-indigo-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
              <span>Inspiration</span>
            </div>
            <h2 className="text-base font-bold sm:text-lg md:text-xl"><a href="#_">Best Workstations of the Year</a></h2>
            <p className="mt-2 text-sm text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
          </div>
        </div>
        <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
          <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
            <img className="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/snacks.jpg" />
          </a>
          <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
            <div className="bg-red-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
              <span>Food</span>
            </div>
            <h2 className="text-base font-bold sm:text-lg md:text-xl"><a href="#_">Eating for Productivity</a></h2>
            <p className="mt-2 text-sm text-gray-500">Learn how to be more disciplined in your diet and how you can eat to maximize productivity.</p>
          </div>
        </div>
        <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
          <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
            <img className="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/book-design.jpg" />
          </a>
          <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
            <div className="bg-purple-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
              <span>Resources</span>
            </div>
            <h2 className="text-base font-bold sm:text-lg md:text-xl"><a href="#_">A Design Mind-set</a></h2>
            <p className="mt-2 text-sm text-gray-500">What does it mean to have a design mind-set? Learn how to improve your eye for design.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Section 3 */}
<section className="bg-white">
  <div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
    <div className="flex flex-col items-center sm:px-5 md:flex-row">
      <div className="w-full md:w-1/2">
        <a href="#_" className="block">
          <img className="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96" src="https://cdn.devdojo.com/images/may2021/cupcakes.jpg" />
        </a>
      </div>
      <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
        <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
          <div className="bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
            <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            <span>Featured</span>
          </div>
          <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl"><a href="#_">Savory Templates. Sweet Designs.</a></h1>
          <p className="pt-2 text-sm font-medium">by <a href="#_" className="mr-1 underline">John Doe</a> · <span className="mx-1">April 23rd, 2021</span> · <span className="mx-1 text-gray-600">5 min. read</span></p>
        </div>
      </div>
    </div>
    <div className="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
      <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <a href="#_" className="block">
          <img className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/fruit.jpg" />
        </a>
        <div className="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
          <span>Lifestyle</span>
        </div>
        <h2 className="text-lg font-bold sm:text-xl md:text-2xl"><a href="#_">Creating a Future Worth Living</a></h2>
        <p className="text-sm text-gray-500">Learn the attributes you need to gain in order to build a future and create a life that you are truly happy with.</p>
        <p className="pt-2 text-xs font-medium"><a href="#_" className="mr-1 underline">Mary Jane</a> · <span className="mx-1">April 17, 2021</span> · <span className="mx-1 text-gray-600">3 min. read</span></p>
      </div>
      <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <a href="#_" className="block">
          <img className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/workout.jpg" />
        </a>
        <div className="bg-pink-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
          <span>Health</span>
        </div>
        <h2 className="text-lg font-bold sm:text-xl md:text-2xl">The Healther Version of Yourself</h2>
        <p className="text-sm text-gray-500">If you want to excel in life and become a better version of yourself, you'll need to upgrade your life.</p>
        <p className="pt-2 text-xs font-medium"><a href="#_" className="mr-1 underline">Fred Jones</a> · <span className="mx-1">April 10, 2021</span> · <span className="mx-1 text-gray-600">3 min. read</span></p>
      </div>
      <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <a href="#_" className="block">
          <img className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/food.jpg" />
        </a>
        <div className="bg-red-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
          <span>Food</span>
        </div>
        <h2 className="text-lg font-bold sm:text-xl md:text-2xl">Enjoy the Meals of the Kings</h2>
        <p className="text-sm text-gray-500">Take the time to enjoy the life that you've created. It's totally fine to live like kings and eat like royalty.</p>
        <p className="pt-2 text-xs font-medium"><a href="#_" className="mr-1 underline">Mike Roberts</a> · <span className="mx-1">April 6, 2021</span> · <span className="mx-1 text-gray-600">3 min. read</span></p>
      </div>
      <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <a href="#_" className="block">
          <img className="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" src="https://cdn.devdojo.com/images/may2021/books.jpg" />
        </a>
        <div className="bg-blue-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
          <span>Motivation</span>
        </div>
        <h2 className="text-lg font-bold sm:text-xl md:text-2xl">Writing for Success</h2>
        <p className="text-sm text-gray-500">Writing about your plans for success is extremely helpful for yourself and it will allow you to share your story.</p>
        <p className="pt-2 text-xs font-medium"><a href="#_" className="mr-1 underline">Tom Johnson</a> · <span className="mx-1">May 25, 2021</span> · <span className="mx-1 text-gray-600">3 min. read</span></p>
      </div>
      <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <a href="#_" className="block">
          <img className="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" src="https://cdn.devdojo.com/images/may2021/clock.jpg" />
        </a>
        <div className="bg-gray-800 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
          <span>Business</span>
        </div>
        <h2 className="text-lg font-bold sm:text-xl md:text-2xl">Simple Time Management</h2>
        <p className="text-sm text-gray-500">Managing your time can make the difference between getting ahead in life or staying exactly where you are.</p>
        <p className="pt-2 text-xs font-medium"><a href="#_" className="mr-1 underline">Scott Reedman</a> · <span className="mx-1">May 18, 2021</span> · <span className="mx-1 text-gray-600">3 min. read</span></p>
      </div>
      <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <a href="#_" className="block">
          <img className="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" src="https://cdn.devdojo.com/images/may2021/lemons.jpg" />
        </a>
        <div className="bg-yellow-400 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
          <span>Nutrition</span>
        </div>
        <h2 className="text-lg font-bold sm:text-xl md:text-2xl">The Fruits Life</h2>
        <p className="text-sm text-gray-500">Take a moment and enjoy to enjoy the many fruits of life. Relaxation and a healthy diet can go a long way.</p>
        <p className="pt-2 text-xs font-medium"><a href="#_" className="mr-1 underline">Jake Caldwell</a> · <span className="mx-1">May 15, 2021</span> · <span className="mx-1 text-gray-600">3 min. read</span></p>
      </div>
    </div>
  </div>
</section>
{/* Section 4 */}
<section className="px-2 py-32 bg-white md:px-0">
  <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
    <div className="flex flex-wrap items-center sm:-mx-3">
      <div className="w-full md:w-1/2 md:px-3">
        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">Beautiful Pages to</span>
            <span className="block text-indigo-600 xl:inline">Tell Your Story!</span>
          </h1>
          <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">It's never been easier to build beautiful websites that convey your message and tell your story.</p>
          <div className="relative flex flex-col sm:flex-row sm:space-x-4">
            <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 sm:mb-0 hover:bg-indigo-700 sm:w-auto rounded-full">
              Try It Free
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
            <a href="#_" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 hover:bg-gray-200 hover:text-gray-600 rounded-full">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="w-full h-auto overflow-hidden shadow-xl rounded-3xl">
          <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" />
        </div>
      </div>
    </div>
  </div>
</section>
</>
  )
}
