const useHomeInfo = () => {
  return (
    <div className="w-full md:w-3/5 flex justify-center items-center flex-col">
      <div className="container">
        <h1 className="text-left text-amber-200 text-4xl md:text-6xl">
          Hello World! 👋
        </h1>
        <h1 className="text-left mt-8 text-white text-4xl md:text-5xl">
          My name is Allen Murfee, and
        </h1>
        <h1 className="text-left text-white mt-4 text-4xl md:text-5xl">
          <code className="bg-black">I write code.</code>
        </h1>
      </div>
      <div className="text-left text-slate-300 mt-10 text-xl">
        <p>
          I'm a Software Developer at Brightpoint Community College. I'm also a
          husband, drummer, Hokies fan, Cowboys fan, and a bad Rainbow 6 Siege
          player. 🤷‍♂️
        </p>
      </div>
    </div>
  );
};

export default useHomeInfo;
