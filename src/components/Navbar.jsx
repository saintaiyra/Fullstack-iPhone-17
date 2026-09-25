function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-[clamp(0.75rem,4vw,1.5rem)]
                    py-4
                    flex
                    items-center
                    justify-center
                    gap-[clamp(0.4rem,2vw,2rem)]
                    whitespace-nowrap
                "
            >

                <a
                    href="#design"
                    className="
                        text-[clamp(0.75rem,2.8vw,1rem)]
                        hover:text-gray-300
                    "
                >
                    Design
                </a>

                <a
                    href="#camera"
                    className="
                        text-[clamp(0.75rem,2.8vw,1rem)]
                        hover:text-gray-300
                    "
                >
                    Camera
                </a>

                <a
                    href="#performance"
                    className="
                        text-[clamp(0.75rem,2.8vw,1rem)]
                        hover:text-gray-300
                    "
                >
                    Performance
                </a>

                <a
                    href="#cores"
                    className="
                        text-[clamp(0.75rem,2.8vw,1rem)]
                        hover:text-gray-300
                    "
                >
                    Cores
                </a>

                <button
                    className="
                        bg-blue-600
                        hover:bg-blue-700
                        px-[clamp(0.9rem,4vw,1.5rem)]
                        py-2
                        rounded-full
                        text-[clamp(0.75rem,2.8vw,1rem)]
                    "
                >
                    Compra
                </button>

            </div>
        </nav>
    );
}

export default Navbar;