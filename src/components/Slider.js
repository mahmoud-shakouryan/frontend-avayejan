import { useEffect, useRef, useState } from "react";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
const images = [
  "/images/criticalthink.png",
  "/images/media.png",
  "/images/perfectionism.png",
  "/images/selfesteem.png",
  "/images/wronglove.png",
];
let count = 0;
let slideInterval;

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();

  const handleNextClick = () => {
    count = (count + 1) % images.length; //kari konim ke vaghti aghab jolo mizanim, indexe axi ke bayad neshoon bede az toole tedad axamoon nagzare'o bekhad masalan axe shomare 10 ro neshoon bede dar soorati ke faghat 5 ta darim.
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const handlePrevClick = () => {
    count = (currentIndex + images.length - 1) % images.length;
    console.log(count);
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const startSlider = () => {
    slideInterval = setInterval(() => {
      //assiging the id of setInterval to a variable (slideInterval)
      handleNextClick();
    }, 5000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);
    startSlider();

    return () => {
      pauseSlider();
    };
  }, []);

  return (
    <div ref={slideRef} className="relative w-full  h-[220px] sm:h-[280px] md:h-[345px] select-none my-0 mx-auto">
      <div className="flex flex-col items-center justify-center">
        <img className='h-46 w-full sm:w-auto sm:h-64 md:h-80 rounded-md shadow-md shadow-dark' src={images[currentIndex]} alt="topics"/>
      </div>
      <div className="absolute bottom-0 px-3 w-full flex justify-center items-center gap-2">
        <button onClick={handlePrevClick} className='flex flex-col justify-center'><NavigateBeforeOutlinedIcon className=" flex justify-center" style={{color:'#8DA9C4',}} /></button>
      { images.map((image, index) => <span key={index} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full border border-lightBlue shadow-sm ${ index == currentIndex ? 'bg-lightBlue': null} `}/>)}
        <button onClick={handleNextClick} className='flex flex-col justify-center'><NavigateNextOutlinedIcon style={{color:'#8DA9C4'}}/></button>
      </div>
    </div>
  );
};

export default Slider;
