export default function Product({category}){
    return(
        <div>
         {category.data && category.data.products.map(t => (
                <div key={t.name}> 
                    <span> {t.name}</span>
                    <span> {t.price}</span>
                </div>
            ))} 
        </div>
    )
}