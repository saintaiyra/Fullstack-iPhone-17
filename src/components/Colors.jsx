import { useState } from "react";

function Colors() {

    const colors = [
        { id: 'blue', name: 'Titanio Azul', image: '/img/iphone-blue.jpg', colorClass: 'bg-blue-500' },
        { id: 'silver', name: 'Titanio Natural', image: '/img/iphone-silver.jpg', colorClass: 'bg-gray-500' }, 
        { id: 'orange', name: 'Titanio Laranja', image: '/img/iphone-orange.jpg', colorClass: 'bg-orange-500' }, 

    ];

    const models = [
        { name: 'Pro Max', screen: '6.9 polegadas', storage: '256GB, 512GB, ou 1TB', battery: '33h de video', weight: '221g' },
        { name: 'Pro', screen: '6.3 polegadas', storage: '128GB, 256GB, ou 512GB', battery: '29h de video', weight: '119g' },
    ];
    
const [selectcolor, setSelectedColor] = useState('blue') 


    return (

        <section id="cores" className="bg-black py-20 px-8">

            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-5xl mb:text-6xl font-bold mb-4">Escolha sua cor</h2>
                    <p className="text-xl text-gray-400">Quatro acabamento em titanio lindos</p>
                </div>

                      <div className="flex justify-center mb-12">
                        <div className="relative w-full max-w-3xl">
                            <div className="relative flex items-center justify-center min-h=[500px]">
                                <img src={colors.find(color => color.id === selectcolor).image} 
                                alt="iphone 17"
                                className="max-w-full max-h-150 mx-auto"
                                ></img>
                            </div>

                            <div className="absolute bottom-8 left-0 right-0 text-center">
                                <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block">
                                    <h3 className="text-2xl font-semibold">{colors.find( color => color.id === selectcolor).name}</h3>
                                </div>

                            </div>

                        </div>

                      </div>

                      <div className="flex justify-center items-center gap-4">
                        {colors.map( color => (
                            <button key={color.id}
                            onClick={() => setSelectedColor(color.id)} 
                            className={`relative transition-all duration-300 cursor-pointer`}>
                                <div className={`w-16 h-16 rounded-full border-4 ${color.colorClass} ${selectcolor === color.id ? 'border-white' : 'border-gray-600'}`}></div> 
                            </button>
                        ))}
                      </div>


                      <div className="grid gap-8 mt-20 grid-cols-2">
                        {models.map((models, index) =>(
                            <div key={index} className="bg-linear-to-br from-gray-900 to-transparent rounded-3xl p-8 border border-gray-900">
                                <div className="text-4xl mb-4">📱</div>
                                <h3 className="text-2xl font-bold mb-3">{models.name}</h3>
                                <p className="text-gray-400 mb-4">{models.screen}</p>
                                <ul className="space-y-2 text-gray-300"> 
                                    <li>{models.storege}</li>
                                    <li>{models.battery}</li>
                                    <li>{models.weight}</li>
                                </ul>
                            </div>
                        ))}
                      </div>

                      <div className="text-center mt-16">
                        <button className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-4 rounded-full text-lg font-medium transition-all diretion-300 mb-8 hover:scale-105 shadow-md shadpw-blue -500/50 cursor-pointer">
                            Compre agora a partir de R$ 9.950,00
                        </button>
                        <p>Ou ate em 12x de R$ 774,92 sem juros</p>
                      </div>



            </div>
        </section>
    )



}


export default Colors