export default function Card(props){
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg md:flex-shrink-0">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{props.title}</div>
                <p className="text-gray-700 text-center">
                R$ {props.price}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center">
                <button class="bg-transparent hover:bg-purple-800 text-purple-800 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    );
}