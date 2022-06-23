import CardItem from "../components/CardItem"





const Card = () => {
  return (
    <div className="h-screen w-screen bg-theWhite  fixed top-10">
      <div className=" bg-red h-14 w-full">dlljdfjldjf</div>
      <div className=" flex flex-wrap justify-around  items-start gap-4 pb-44  pr-2 pl-2 pt-4  w-screen h-screen overflow-y-scroll">
      <CardItem/>
      <CardItem/>
      <CardItem/>
      <CardItem/>
      </div>
      <div className="bg-orange h-16 w-screen fixed bottom-0">dfdfdf</div>
    </div>
  )
}

export default Card