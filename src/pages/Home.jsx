import HeaderSlider from "../components/HeaderSlider"
import TopHeader from "../components/TopHeader"
import TopSliderTab from "../components/TopSliderTab"
import MobileSlider from "../components/MobileSlider"
function Home() {
  return (
    <>
      <header className=" h-[100px] sticky top-0  bg-[#111319] md:bg-transparent">
        <TopHeader/>
        <TopSliderTab />
      </header>
      <div className={"hero   md:hidden lg:hidden"}>
          <MobileSlider/>
      </div>
    </>
  )
}

export default Home