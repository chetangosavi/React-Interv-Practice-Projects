const Navbar = () => {

  return (
    <div className="h-screen w-full">
      <div className="mx-auto h-screen w-full px-4 md:max-w-[1200px] md:px-0">
        <nav className="flex list-none justify-between py-4">
          <div>
            <h1 className="cursor-pointer font-bold">#CG</h1>
          </div>
          <ul className="hidden md:flex">
            <li className="cursor-pointer rounded-full px-4 transition-all duration-300 hover:bg-red-500 hover:text-white">Home</li>
            <li className="cursor-pointer rounded-sm px-4 hover:bg-red-500 hover:text-white">About</li>
            <li className="cursor-pointer rounded-sm px-4 hover:bg-red-500 hover:text-white">Projects</li>
            <li className="cursor-pointer rounded-sm px-4 hover:bg-red-500 hover:text-white">Contact Me</li>
          </ul>
          <div className="md:hidden">
            <span className="text-2xl">☰</span>
          </div>
        </nav>

        <div className="mt-8 flex w-full list-none flex-col-reverse items-center justify-around md:flex-row">
          <div className="my-4 text-center md:text-start">
            <h1 className="text-center text-3xl font-extrabold md:text-start">Im a Software Developer</h1>
            <p className="mt-3 text-sm md:w-1/2">
              We have trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer follow-up questions, admit mistakes, challenge incorrect premises, and reject inappropriate requests.
            </p>
          </div>

          <img
            className="h-60 rounded-xl"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
            alt="A pair of shoes"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
