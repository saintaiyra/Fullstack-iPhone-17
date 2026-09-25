function Hero() {
    return (
        <section className="
  relative
  h-162.5
  overflow-hidden
  bg-black
  md:h-screen
">

            <div className="absolute top-16 bottom-0 left-0 right-0 z-0">
                <img
  src="/img/hero.jpg"
  alt="iPhone 17"
  className="
    w-full
    h-full
    object-fill
    opacity-90
    md:object-cover
  "
/>

                <div className="
  absolute
  top-16
  left-0
  right-0
  bottom-0
  z-0
  overflow-hidden
"></div>
            </div>

            <div className="
                absolute
                bottom-6
                left-1/2
                -translate-x-1/2
                animate-bounce
                z-10
            ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                </svg>
            </div>

        </section>
    );
}

export default Hero;