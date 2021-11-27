import Product from './Product';
export default function Categories({title, category}){
    return(
        <div>
            <h1 className="text-4xl font-normal leading-normal mt-0 mb-2 text-purple-800">
                {title}
            </h1>
            <h6 className="text-xl font-normal leading-normal mt-0 mb-2 text-lightBlue-800">
                {desc}
            </h6>
            <hr/>
            <Product category={category}/>
        </div>
    );
}