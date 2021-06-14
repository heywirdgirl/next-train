

const Header = () => {
  return (
    <>
{/* Section 1 */}
<section className="w-full px-3 antialiased lg:px-6 bg-center bg-cover" style={{backgroundImage: 'url("https://cdn.devdojo.com/images/november2020/hero-image.jpeg")'}}>
  <div className="mx-auto max-w-7xl">
    <nav className="flex items-center w-full h-24 select-none" x-data="{ showMenu: false }">
      <div className="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">
        <a href="#_" className="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0">
          <span className="p-1 text-xl font-black leading-none text-white select-none"><span className>tails</span><span className="text-indigo-300">.</span></span>
        </a>
        <div className="fixed top-0 left-0 z-40 items-center hidden w-full h-full p-3 text-xl bg-gray-900 bg-opacity-50 md:text-sm lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative md:flex">
          <div className="flex-col w-full h-auto h-full overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
            <div className="flex flex-col items-center justify-center w-full h-full mt-12 text-center text-indigo-700 md:text-indigo-200 md:w-2/3 md:mt-0 md:flex-row md:items-center">
              <a href="#" className="inline-block px-4 py-2 mx-2 font-medium text-left text-indigo-700 md:text-white md:px-0 lg:mx-3 md:text-center">Home</a>
              <a href="#" className="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center">Features</a>
              <a href="#" className="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center">Blog</a>
              <a href="#" className="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center">Contact</a>
            </div>
            <div className="flex flex-col items-center justify-end w-full h-full pt-4 md:w-1/3 md:flex-row md:py-0">
              <a href="#_" className="w-full pl-6 mr-0 text-indigo-200 hover:text-white md:pl-0 md:mr-3 lg:mr-5 md:w-auto">Sign In</a>
              <a href="#_" className="inline-flex items-center justify-center px-4 py-2 mr-1 text-base font-medium leading-6 text-indigo-600 whitespace-no-wrap transition duration-150 ease-in-out bg-white border border-transparent hover:bg-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 rounded-full">Sign Up</a>
            </div>
          </div>
        </div>
        
      </div>
    </nav>
    <div className="container py-32 mx-auto text-center sm:px-4">
      <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"><span className="block">Simplify the way you</span> <span className="relative inline-block mt-3 text-transparent text-white">design websites</span></h1>
      <div className="max-w-lg mx-auto mt-6 text-sm text-center text-indigo-200 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">If you are ready to change the way you design websites, then you'll want to use our block builder to make it fun and easy!</div>
      <div className="relative flex items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-full">
        <input type="text" name="email" placeholder="Email Address" className="w-full h-12 px-6 py-2 font-medium text-indigo-800 focus:outline-none" />
        <span className="relative top-0 right-0 block">
          <button type="button" className="inline-flex items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-400 border border-transparent hover:bg-indigo-700 focus:outline-none active:bg-indigo-700">
            Sign Up
          </button>
        </span>
      </div>
      <div className="mt-8 text-sm text-indigo-300">By signing up, you agree to our terms and services.</div>
    </div>
  </div>
</section>
</>
  )
}

export default Header
