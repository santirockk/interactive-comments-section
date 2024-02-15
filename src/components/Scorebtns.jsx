export function Scorebtns({ score, handlerPlus, handlerMinus }) {
  return (
    <div className="flex py-2 bg-light-gray rounded-xl md:flex-col md:scorebtns md:mr-cs md:content-center md:items-center">
      <button onClick={handlerPlus} className="px-4 md:p-sbtp">
        <svg width="11" height="11" className=" hover:fill-moderate-blue fill-light-grayish-blue" >
          <use href="./images/symbol-defs.svg#icon-plus"></use>
        </svg>
      </button>

      <p className="text-moderate-blue md:p-sbt">{score}</p>
      
      <button onClick={handlerMinus} className="px-4 md:p-sbtm">
        <svg width="11" height="11" className=" hover:fill-moderate-blue fill-light-grayish-blue" >
          <use href="./images/symbol-defs.svg#icon-minus"></use>
        </svg>
      </button>
    </div>
  );
}
