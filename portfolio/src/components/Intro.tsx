import { HERO_CONTENT } from '../constants/index.ts';
// import profilePic from '../assets/kevinRushProfile.png';

function Intro(): JSX.Element {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
                Laksh Krishna Sharma
              </h1>

              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                Software Developer
              </span>

              <p className="my-2 max-w-xl text-lg py-6 font-light tracking-tighter">
                {HERO_CONTENT}
              </p>
            </div>
          </div>
          {/* <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <img src={profilePic} alt="Profile" />
                    </div>
                </div> */}
        </div>
      </div>
    </>
  );
}

export default Intro;