export function filterCategory(products){
    let categoryObj = {};
    for(let product of products){
        if(!categoryObj[product?.category]){
            categoryObj[product?.category] = [product]
        }else{
            categoryObj[product?.category]?.push(product)
        }
    }
    console.log(categoryObj)
    return categoryObj
}