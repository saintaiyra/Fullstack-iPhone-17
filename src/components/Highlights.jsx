function Highlights() {
    return (
        <section
            className="bg-black py-20 px-4 sm:px-6"
            id="design"
        >
            <div className="max-w-7xl mx-auto">

                {/* TÍTULO */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="
                        text-4xl
                        sm:text-5xl
                        font-bold
                        leading-tight
                        mb-4
                    ">
                        Design Revolucionário
                    </h2>

                    <p className="
                        text-lg
                        sm:text-xl
                        text-gray-400
                        max-w-2xl
                        mx-auto
                    ">
                        Cada detalhe foi pensado para criar a melhor experiencia
                    </p>
                </div>


                {/* DESIGN */}
                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-6
                    md:gap-8
                    mb-16
                ">

                    {/* TITÂNIO */}
                    <div className="
                        bg-gray-900
                        rounded-3xl
                        p-6
                        md:p-8
                        w-full
                    ">
                        <img
                            className="
                                w-full
                                rounded-2xl
                                mb-4
                            "
                            src="/img/titanium-design.jpg"
                            alt="iPhone titanium"
                        />

                        <h3 className="
                            font-bold
                            mb-2
                            text-3xl
                            md:text-4xl
                        ">
                            Titanium Premium
                        </h3>

                        <p className="
                            text-gray-300
                            text-lg
                            leading-relaxed
                        ">
                            Estrutura em titanium de grau aeroespacial,
                            O smartphone mais forte e leve.
                        </p>
                    </div>


                    {/* IOS */}
                    <div className="
                        bg-gray-900
                        rounded-3xl
                        p-6
                        md:p-8
                        w-full
                    ">
                        <img
                            className="
                                w-full
                                rounded-2xl
                                mb-4
                            "
                            src="/img/ios-features.jpg"
                            alt="iOS 2025"
                        />

                        <h3 className="
                            font-bold
                            mb-2
                            text-3xl
                            md:text-4xl
                        ">
                            iOS 26
                        </h3>

                        <p className="
                            text-gray-300
                            text-lg
                            leading-relaxed
                        ">
                            O sistema operacional mais avançado
                            do mundo com IA integrada.
                        </p>
                    </div>

                </div>


                {/* PERFORMANCE */}
                <div
                    className="
                        bg-gray-900
                        rounded-3xl
                        p-6
                        md:p-12
                        mb-16
                    "
                    id="performance"
                >
                    <h3 className="
                        text-3xl
                        md:text-4xl
                        font-bold
                        mb-4
                        md:mb-6
                        text-gradient
                    ">
                        A18 Pro
                    </h3>

                    <p className="
                        text-gray-300
                        text-lg
                        mb-6
                    ">
                        O chip mais poderoso em um smartphone
                    </p>

                    <img
                        className="
                            w-full
                            rounded-2xl
                            mb-6
                        "
                        src="/img/chip-a18-pro.jpg"
                        alt="chip A18 Pro"
                    />

                    <ul className="
                        space-y-3
                        text-gray-300
                        text-base
                        md:text-lg
                    ">
                        <li>CPU 20% mais rapida</li>
                        <li>GPU 25% mais eficiente</li>
                        <li>Neural Engine com 16 nucleos</li>
                        <li>Ray Tracing acelerado por hardware</li>
                    </ul>
                </div>


                {/* CÂMERA */}
                <div
                    id="camera"
                    className="text-center"
                >
                    <h3 className="
                        text-4xl
                        sm:text-5xl
                        font-bold
                        leading-tight
                        mb-10
                    ">
                        Sistema de camera
                        <br className="sm:hidden" />
                        {" "}Pro avançado
                    </h3>


                    {/* CARDS DA CÂMERA */}
                    <div className="
                        grid
                        grid-cols-1
                        md:grid-cols-3
                        gap-6
                    ">

                        {/* 48MP */}
                        <div className="
                            bg-gray-900
                            rounded-2xl
                            p-6
                            md:p-8
                            hover:scale-105
                            cursor-pointer
                            transition-all
                            duration-300
                            w-full
                        ">
                            <div className="
                                text-4xl
                                md:text-5xl
                                font-bold
                                text-blue-600
                                mb-4
                            ">
                                48MP
                            </div>

                            <h4 className="
                                text-xl
                                font-semibold
                                mb-2
                            ">
                                Principais
                            </h4>

                            <p className="
                                text-gray-400
                                text-lg
                                leading-relaxed
                            ">
                                Sensor quad-pixel com foco automatico
                            </p>
                        </div>


                        {/* 12MP ULTRA WIDE */}
                        <div className="
                            bg-gray-900
                            rounded-2xl
                            p-6
                            md:p-8
                            hover:scale-105
                            cursor-pointer
                            transition-all
                            duration-300
                            w-full
                        ">
                            <div className="
                                text-4xl
                                md:text-5xl
                                font-bold
                                text-orange-500
                                mb-4
                            ">
                                12MP
                            </div>

                            <h4 className="
                                text-xl
                                font-semibold
                                mb-2
                            ">
                                Ultra Wide
                            </h4>

                            <p className="
                                text-gray-400
                                text-lg
                                leading-relaxed
                            ">
                                Campo de visao de 120 grau com modo noturno
                            </p>
                        </div>


                        {/* 12MP TELEFOTO */}
                        <div className="
                            bg-gray-900
                            rounded-2xl
                            p-6
                            md:p-8
                            hover:scale-105
                            cursor-pointer
                            transition-all
                            duration-300
                            w-full
                        ">
                            <div className="
                                text-4xl
                                md:text-5xl
                                font-bold
                                text-blue-600
                                mb-4
                            ">
                                12MP
                            </div>

                            <h4 className="
                                text-xl
                                font-semibold
                                mb-2
                            ">
                                Telefoto 5x
                            </h4>

                            <p className="
                                text-gray-400
                                text-lg
                                leading-relaxed
                            ">
                                Zoom optico de 5x com estabilizaçao
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Highlights;