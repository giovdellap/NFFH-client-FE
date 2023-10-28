import { BaseStore, Product, StoreProducts } from "../connectionTypes";

const store: BaseStore = {
    id: '22',
    username: 'Le verdure der pupone',
    image: 'https://prd-images2-gazzanet.gazzettaobjects.it/Vrx_zCddELufYaisByBKQyudaAM=/712x402/smart/www.mediagol.it/assets/uploads/201911/gettyimages-689445278.jpg',
    address: 'Via Zagarolese, 00132 Roma RM',
    area: 'Rome'
}

const products: Product[] = [
    {
        id: '1',
        title: 'Cucumbers',
        seller: '22',
        image: 'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2022-06/Type%20of%20cucumber.jpg',
        description: 'Best cucumbers in the area!!',
        price: 1.50,
        weight: true
    },
    {
        id: '2',
        title: 'Peppers',
        seller: '22',
        image: 'https://www.rigeneracremona.it/site_new/wp-content/uploads/2020/07/immagini-peperoni.jpg',
        description: 'Gorgeous peppers, they sell fast',
        price: 2.30,
        weight: true
    },
    {
        id: '3',
        title: 'Pumpkins',
        seller: '22',
        image: 'https://cdn.cosedicasa.com/wp-content/uploads/2019/11/zucca.jpg',
        description: 'Only the best for your risotto',
        price: 3.50,
        weight: false
    },
    {
        id: '4',
        title: 'Cucumbers',
        seller: '22',
        image: 'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2022-06/Type%20of%20cucumber.jpg',
        description: 'Best cucumbers in the area!!',
        price: 1.50,
        weight: true
    },
    {
        id: '5',
        title: 'Peppers',
        seller: '22',
        image: 'https://www.rigeneracremona.it/site_new/wp-content/uploads/2020/07/immagini-peperoni.jpg',
        description: 'Gorgeous peppers, they sell fast',
        price: 2.30,
        weight: true
    },
    {
        id: '6',
        title: 'Pumpkins',
        seller: '22',
        image: 'https://cdn.cosedicasa.com/wp-content/uploads/2019/11/zucca.jpg',
        description: 'Only the best for your risotto',
        price: 3.50,
        weight: false
    },
    {
        id: '7',
        title: 'Cucumbers',
        seller: '22',
        image: 'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2022-06/Type%20of%20cucumber.jpg',
        description: 'Best cucumbers in the area!!',
        price: 1.50,
        weight: true
    },
    {
        id: '8',
        title: 'Peppers',
        seller: '22',
        image: 'https://www.rigeneracremona.it/site_new/wp-content/uploads/2020/07/immagini-peperoni.jpg',
        description: 'Gorgeous peppers, they sell fast',
        price: 2.30,
        weight: true
    },
    {
        id: '9',
        title: 'Pumpkins',
        seller: '22',
        image: 'https://cdn.cosedicasa.com/wp-content/uploads/2019/11/zucca.jpg',
        description: 'Only the best for your risotto',
        price: 3.50,
        weight: false
    },
    {
        id: '10',
        title: 'Cucumbers',
        seller: '22',
        image: 'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2022-06/Type%20of%20cucumber.jpg',
        description: 'Best cucumbers in the area!!',
        price: 1.50,
        weight: true
    },
    {
        id: '11',
        title: 'Peppers',
        seller: '22',
        image: 'https://www.rigeneracremona.it/site_new/wp-content/uploads/2020/07/immagini-peperoni.jpg',
        description: 'Gorgeous peppers, they sell fast',
        price: 2.30,
        weight: true
    },
    {
        id: '12',
        title: 'Pumpkins',
        seller: '22',
        image: 'https://cdn.cosedicasa.com/wp-content/uploads/2019/11/zucca.jpg',
        description: 'Only the best for your risotto',
        price: 3.50,
        weight: false
    },
    {
        id: '1',
        title: 'Cucumbers',
        seller: '22',
        image: 'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2022-06/Type%20of%20cucumber.jpg',
        description: 'Best cucumbers in the area!!',
        price: 1.50,
        weight: true
    },
    {
        id: '1',
        title: 'Peppers',
        seller: '22',
        image: 'https://www.rigeneracremona.it/site_new/wp-content/uploads/2020/07/immagini-peperoni.jpg',
        description: 'Gorgeous peppers, they sell fast',
        price: 2.30,
        weight: true
    },
    {
        id: '1',
        title: 'Pumpkins',
        seller: '22',
        image: 'https://cdn.cosedicasa.com/wp-content/uploads/2019/11/zucca.jpg',
        description: 'Only the best for your risotto',
        price: 3.50,
        weight: false
    }
]

const storeProducts1: StoreProducts = {
    products: products,
    page: 1,
    total: 2
}

const storeProducts2: StoreProducts = {
    products: products,
    page: 2,
    total: 2
}

export { store, storeProducts1, storeProducts2 };
