import Contact from "../components/Contact";

function useHome() {
  return (
    <div>
      <div className="container mx-auto mt-14">
        <h1 className="text-left w-3/4">Hello World! 👋</h1>
        <h1 className="text-left w-3/4 mt-8">
          My name is Allen Murfee and I'm a software developer.
        </h1>
      </div>
      <div className="text-left">
        <p>Software Developer at Brightpoint Community College 💻</p>
        <p>Husband 🤵‍♂️ 👰</p>
        <p>Drummer 🥁</p>
        <p>(Bad at) Rainbow 6 Siege 🎮</p>
        <p>Car and F1 Geek 🏎️</p>
        <p>Go Hokies and Go Cowboys! 🦃 🤠</p>
      </div>

      <Contact />
    </div>
  );
}

export default useHome;
