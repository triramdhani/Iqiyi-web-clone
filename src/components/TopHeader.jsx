import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faDownload,faMagnifyingGlass , faMobileScreen, faTv, faLaptop , faGlobe, faTimes, faPerson , faCrown} from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const TopHeader = () => {
  const showModalBrowse = (e) => {
    console.log(e)
  }
  const showModalHistory = (e) => {
    console.log(e)
  }
  const showModalLanguage = (e) => {
    console.log(e)
  }
  const showModalAccount = (e) => {
    console.log(e)
  }
  const showModalVip = (e) => {
    console.log(e)
  }
  return (
    <div className='py-2 px-4 flex items-center gap-2 mb-0 md:px-12 md:py-1 '>
      <div className={"flex-none md:hidden md:flex-auto"}>
          <FontAwesomeIcon icon={faBars} color={"white"} size="lg"/>        
      </div>
      <div className={'flex-none'}>
        <h1 className=' text-[26px] font-bold text-green-500 md:text-[36px]'>iQIYI</h1>
      </div>
      {/* width 780px */}
      <div
        onMouseEnter={showModalBrowse}
        className={" hidden  md:flex gap-5 px-5 flex-1 justify-start text-slate-200 opacity-60"}>
        <div className="hidden lg:block">For You</div>
        <div className="hidden lg:block">SWEET ON</div>
        <div className="">Browse -</div>
      </div>

      {/*width 480px display */}
      <div className='flex-auto md:hidden'>
        <div className={'py-[3px] px-[10px] flex gap-3 rounded bg-slate-700'}>
          <input className={" w-[10px] flex-auto bg-slate-700 placeholder:text-slate-400 placeholder:overflow-hidden "} placeholder="Thousand Years for You" />
            <div className={"flex-none opacity-80"}>
              <span className={"mr-3 text-[15px] font-extralight text-white "}>|</span>
              <FontAwesomeIcon icon={faMagnifyingGlass} color="white" />
          </div>
        </div>
      </div>
      <div className={"flex-none md:hidden"}>
          <div className={"px-[7px] py-[3px] rounded bg-yellow-500"}>
            <FontAwesomeIcon icon={faDownload} color="white"/> <span className={"ml-[1px] text-slate-200"}>APP</span>
          </div>
      </div>

      {/* 780px display */}
      <div className='hidden md:flex flex-0 gap-6 lg:gap-8'>
        <div className={'px-[10px] items-center flex gap-3 rounded bg-slate-700 lg:py-0 lg:min-w-[250px]'}>
          <input className={"w-[100px] m-0 outline-none bg-slate-700 placeholder:text-slate-400 lg:flex-1 text-slate-200"} placeholder="search" />
          <div className={" opacity-80"}>
              <span className={"mr-3 font-extralight text-white "}>|</span>
              <FontAwesomeIcon icon={faMagnifyingGlass} color="white" />
          </div>
        </div>

        <div className={"flex  items-center gap-6 bg-black"}>
          <div className='text-center' onMouseEnter={showModalHistory}>
            <FontAwesomeIcon icon={faClock} size="xl" color='white'/>
            <div className='hidden text-slate-200 lg:block'>History</div>
          </div>
          <div className='text-center' onMouseEnter={showModalLanguage}>
            <FontAwesomeIcon icon={faGlobe} size="xl" color='white'/>            
            <div className='hidden text-slate-200 lg:block'>Language</div>
          </div>
          <div className='text-center' onMouseEnter={showModalAccount}>
            <FontAwesomeIcon icon={faPerson} size="xl" color='white' />
            <div className='hidden text-slate-200 lg:block'>Account</div>
          </div>
          <div className={"hidden lg:block bg-transparent border px-2 py-2 rounded-lg"}>
            <FontAwesomeIcon icon={faDownload} size="xl" color='white' />
            <span className='ml-1 font-medium text-white'>APP</span>
          </div>
          <div className={"bg-green-500 px-3 py-2 rounded-lg"} onMouseEnter={showModalVip}>
            <FontAwesomeIcon icon={faCrown} size="xl" color='black' />
            <span className='ml-1 font-medium'>VIP</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader