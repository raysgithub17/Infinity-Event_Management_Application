import CardData from "./CardData";

function Card() {
  const images = CardData;

  return (
    <div >
        <div className="  w-full mt-10 grid place-content-center">
        <div className='flex flex-col items-center justify-center space-y-10'>
    <span className='text-6xl font-bold'>Our Conference Hall</span>
    <div className='flex space-x-8'>
      {
        images.map(CardData => (
          <div className='flex items-end w-80 h-[28rem] rounded-2xl relative overflow-hidden group'>
            <img src={`${CardData.src}`} className='absolute top-0 left-0 -z-10 brightness-[60%] group-hover:scale-125 group-hover:brightness-90 duration-200'/>
            <div className='p-5 flex flex-col'>
              <span className='text-3xl font-bold text-white'>{CardData.name}</span>
              <span className='text-justify text-neutral-100 text-sm'>Location: {CardData.location}</span>
              <span className='text-justify text-neutral-100 text-sm'>Price: {CardData.price}</span>
              <span className='text-justify text-neutral-100 text-sm'>Infinity Review: {Array.from({ length: CardData.rating }, (_, i) => (
                <span key={i}>&#9733;</span> // Unicode for star symbol
              ))}</span>
              <button className='w-fit px-4 py-2 border-2 border-white mt-2 text-white hover:bg-white hover:text-black duration-200'>
                Explore
              </button>
            </div>
          </div>
        ))
      }
    </div>
  </div>
</div>

<div className="  w-full mt-10 grid place-content-center">
        <div className='flex flex-col items-center justify-center space-y-10'>
    <span className='text-6xl font-bold'>Our Conference Hall</span>
    <div className='flex space-x-8'>
      {
        images.map(CardData => (
          <div className='flex items-end w-80 h-[28rem] rounded-2xl relative overflow-hidden group'>
            <img src={`${CardData.src}`} className='absolute top-0 left-0 -z-10 brightness-[60%] group-hover:scale-125 group-hover:brightness-90 duration-200'/>
            <div className='p-5 flex flex-col'>
              <span className='text-3xl font-bold text-white'>{CardData.name}</span>
              <span className='text-justify text-neutral-100 text-sm'>Location: {CardData.location}</span>
              <span className='text-justify text-neutral-100 text-sm'>Price: {CardData.price}</span>
              <span className='text-justify text-neutral-100 text-sm'>Infinity Review: {Array.from({ length: CardData.rating }, (_, i) => (
                <span key={i}>&#9733;</span> // Unicode for star symbol
              ))}</span>
              <button className='w-fit px-4 py-2 border-2 border-white mt-2 text-white hover:bg-white hover:text-black duration-200'>
                Explore
              </button>
            </div>
          </div>
        ))
      }
    </div>
  </div>
</div>
<div className="  w-full mt-10 grid place-content-center">
        <div className='flex flex-col items-center justify-center space-y-10'>
    <span className='text-6xl font-bold'>Our Team Hall</span>
    <div className='flex space-x-8'>
      {
        images.map(CardData => (
          <div className='flex items-end w-80 h-[28rem] rounded-2xl relative overflow-hidden group'>
            <img src={`${CardData.src}`} className='absolute top-0 left-0 -z-10 brightness-[60%] group-hover:scale-125 group-hover:brightness-90 duration-200'/>
            <div className='p-5 flex flex-col'>
              <span className='text-3xl font-bold text-white'>{CardData.name}</span>
              <span className='text-justify text-neutral-100 text-sm'>Location: {CardData.location}</span>
              <span className='text-justify text-neutral-100 text-sm'>Price: {CardData.price}</span>
              <span className='text-justify text-neutral-100 text-sm'>Infinity Review: {Array.from({ length: CardData.rating }, (_, i) => (
                <span key={i}>&#9733;</span> // Unicode for star symbol
              ))}</span>
              <button className='w-fit px-4 py-2 border-2 border-white mt-2 text-white hover:bg-white hover:text-black duration-200'>
                Explore
              </button>
            </div>
          </div>
        ))
      }
    </div>
  </div>
</div>
    </div>
    
  );
}

export default Card;