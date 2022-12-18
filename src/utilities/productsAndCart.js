const productsAndCart = async () => {
    const productsData = await fetch('products.json')
    const productsContainer = await productsData.json();

    return productsContainer;

}