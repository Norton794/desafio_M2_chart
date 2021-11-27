import Card from '../components/Card';
export default function Product({category, enabled}){
    return(
        <div className="md:flex md:justify-center md:space-x-8 md:align-center ">
         {category.data && category.data.products.map(t => (
                <Card enabled={enabled} key={t.name} title={t.name} price={t.price} />  
         ))} 
        </div>
    )
}