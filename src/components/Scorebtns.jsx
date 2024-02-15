export function Scorebtns({ score, handlerPlus, handlerMinus }) {
  return (
    <div className="flex py-2 bg-light-gray rounded-xl md:flex-col md:scorebtns md:mr-cs md:content-center md:items-center">
      <button>
        <img
          src="./images/icon-plus.svg"
          alt="icon-plus"
          className="px-4 md:p-more md:px-2"
          onClick={handlerPlus}
        />
      </button>
      <p className="text-moderate-blue md:p-sbt">{score}</p>
      <button>
        <img
          src="./images/icon-minus.svg"
          alt="icon-minus"
          className="px-4 md:py-2 md:px-2"
          onClick={handlerMinus}
        />
      </button>
    </div>
  );
}
