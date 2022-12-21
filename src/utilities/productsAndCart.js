import { getStoredCart } from "./fakedb";

const productsAndCart = async () => {

    // get products
    const productsData = await fetch('products.json')
    const productsContainer = await productsData.json();

    // get stored data 
    const saveToLocalStorageData = getStoredCart();
    const emptyFile = [];
    for (const id in saveToLocalStorageData) {
        const addedItems = productsContainer.find(product => product.id === id);
        const productsQuantity = saveToLocalStorageData[id];
        addedItems.quantity = productsQuantity;
        emptyFile.push(addedItems)
    }

    return {productsContainer, emptyFile};

}


export {
    productsAndCart,

}