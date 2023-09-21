function IndexPage() {

  return (
    <div className="bg-gradient-to-tr from-red-500 to-purple-400 relative h-screen w-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
        alt="main background image"
        src="https://source.unsplash.com/random"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
          <div className="space-y-8">
            <h1 className="font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight">
              Coming Soon...
              <span className="text-palette-primary">
                SubHub UK
              </span>
            </h1>
            <p className="font-secondary text-palette-light text-base md:text-lg lg:text-xl">
              The go to place for grading your Trading Cards, Comics, Coins, Money, Stamps, Games and More! Launching in 2024.
            </p>
          </div>
      </div>
    </div>
  )
}

export default IndexPage
