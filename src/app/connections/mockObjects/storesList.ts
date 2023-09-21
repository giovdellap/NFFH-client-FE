import { Areas, StoresListResponse } from "../connectionTypes";

const areasList: Areas = {
    areas: ['Rome', 'Milan', 'Turin', 'Bologna', 'Bari', 'Firenze', 'Genova', 'Pescara', 'Padova', 'Potenza']
}

const storeslistresponse1: StoresListResponse = {
    zone: 'Rome',
    stores: [
        {
            id: '1',
            name: 'Az. Agr. Di Giacomo',
            image: 'https://citynews-bolognatoday.stgy.ovh/~media/horizontal-hi/11862798532377/azienda-agricola-2-2-2.jpg',
            location: 'Via Zagarolese, 00132 Roma RM'
        },
        {
            id: '2',
            name: 'De Piscopo Ortaggi',
            image: 'https://www.glistatigenerali.com/wp-content/uploads/2022/03/azienda-agricola-1-800x540.jpeg',
            location: 'Via Facciata Soldati, 00030 Castel San Pietro Romano RM'
        },
        {
            id: '3',
            name: 'Li mejo Pomodori S.r.l.',
            image: 'https://www.agricultura.it/wp-content/uploads/2017/05/pomodoro_da_industria_2.jpg',
            location: 'Via Tivera, 04012 Cisterna di Latina LT'
        },
        {
            id: '4',
            name: 'Az. Agr. Di Giacomo',
            image: 'https://citynews-bolognatoday.stgy.ovh/~media/horizontal-hi/11862798532377/azienda-agricola-2-2-2.jpg',
            location: 'Via Zagarolese, 00132 Roma RM'
        },
        {
            id: '5',
            name: 'De Piscopo Ortaggi',
            image: 'https://www.glistatigenerali.com/wp-content/uploads/2022/03/azienda-agricola-1-800x540.jpeg',
            location: 'Via Facciata Soldati, 00030 Castel San Pietro Romano RM'
        },
        {
            id: '6',
            name: 'Li mejo Pomodori S.r.l.',
            image: 'https://www.agricultura.it/wp-content/uploads/2017/05/pomodoro_da_industria_2.jpg',
            location: 'Via Tivera, 04012 Cisterna di Latina LT'
        },
        {
            id: '7',
            name: 'Az. Agr. Di Giacomo',
            image: 'https://citynews-bolognatoday.stgy.ovh/~media/horizontal-hi/11862798532377/azienda-agricola-2-2-2.jpg',
            location: 'Via Zagarolese, 00132 Roma RM'
        },
        {
            id: '8',
            name: 'De Piscopo Ortaggi',
            image: 'https://www.glistatigenerali.com/wp-content/uploads/2022/03/azienda-agricola-1-800x540.jpeg',
            location: 'Via Facciata Soldati, 00030 Castel San Pietro Romano RM'
        },
        {
            id: '9',
            name: 'Li mejo Pomodori S.r.l.',
            image: 'https://www.agricultura.it/wp-content/uploads/2017/05/pomodoro_da_industria_2.jpg',
            location: 'Via Tivera, 04012 Cisterna di Latina LT'
        },
        {
            id: '10',
            name: 'Az. Agr. Di Giacomo',
            image: 'https://citynews-bolognatoday.stgy.ovh/~media/horizontal-hi/11862798532377/azienda-agricola-2-2-2.jpg',
            location: 'Via Zagarolese, 00132 Roma RM'
        },
        {
            id: '11',
            name: 'De Piscopo Ortaggi',
            image: 'https://www.glistatigenerali.com/wp-content/uploads/2022/03/azienda-agricola-1-800x540.jpeg',
            location: 'Via Facciata Soldati, 00030 Castel San Pietro Romano RM'
        },
        {
            id: '12',
            name: 'Li mejo Pomodori S.r.l.',
            image: 'https://www.agricultura.it/wp-content/uploads/2017/05/pomodoro_da_industria_2.jpg',
            location: 'Via Tivera, 04012 Cisterna di Latina LT'
        }
    ],
    page: 1,
    total: 2
}

const storeslistresponse2: StoresListResponse = {
    zone: 'Rome',
    stores: [
        {
            id: '13',
            name: 'Le verdure der pupone',
            image: 'https://prd-images2-gazzanet.gazzettaobjects.it/Vrx_zCddELufYaisByBKQyudaAM=/712x402/smart/www.mediagol.it/assets/uploads/201911/gettyimages-689445278.jpg',
            location: 'Via Zagarolese, 00132 Roma RM'
        },
        {
            id: '14',
            name: 'AgriManolo',
            image: 'https://www.agriturismocarlini.it/public/1594998412_78_azienda-agricola_9.jpg',
            location: 'Via Facciata Soldati, 00030 Castel San Pietro Romano RM'
        },
        {
            id: '15',
            name: 'Az. Agr. Di Giuseppantonio',
            image: 'https://www.fellinipatrizio.it/file/usr/azienda-agricola/Panoramica_Azienda67.jpg',
            location: 'Via Tivera, 04012 Cisterna di Latina LT'
        },
        {
            id: '16',
            name: 'Le verdure der pupone',
            image: 'https://prd-images2-gazzanet.gazzettaobjects.it/Vrx_zCddELufYaisByBKQyudaAM=/712x402/smart/www.mediagol.it/assets/uploads/201911/gettyimages-689445278.jpg',
            location: 'Via Zagarolese, 00132 Roma RM'
        },
        {
            id: '17',
            name: 'AgriManolo',
            image: 'https://www.agriturismocarlini.it/public/1594998412_78_azienda-agricola_9.jpg',
            location: 'Via Facciata Soldati, 00030 Castel San Pietro Romano RM'
        },
        {
            id: '18',
            name: 'Az. Agr. Di Giuseppantonio',
            image: 'https://www.fellinipatrizio.it/file/usr/azienda-agricola/Panoramica_Azienda67.jpg',
            location: 'Via Tivera, 04012 Cisterna di Latina LT'
        },
        {
            id: '19',
            name: 'Le verdure der pupone',
            image: 'https://prd-images2-gazzanet.gazzettaobjects.it/Vrx_zCddELufYaisByBKQyudaAM=/712x402/smart/www.mediagol.it/assets/uploads/201911/gettyimages-689445278.jpg',
            location: 'Via Zagarolese, 00132 Roma RM'
        },
        {
            id: '20',
            name: 'AgriManolo',
            image: 'https://www.agriturismocarlini.it/public/1594998412_78_azienda-agricola_9.jpg',
            location: 'Via Facciata Soldati, 00030 Castel San Pietro Romano RM'
        },
        {
            id: '21',
            name: 'Az. Agr. Di Giuseppantonio',
            image: 'https://www.fellinipatrizio.it/file/usr/azienda-agricola/Panoramica_Azienda67.jpg',
            location: 'Via Tivera, 04012 Cisterna di Latina LT'
        },
        {
            id: '22',
            name: 'Le verdure der pupone',
            image: 'https://prd-images2-gazzanet.gazzettaobjects.it/Vrx_zCddELufYaisByBKQyudaAM=/712x402/smart/www.mediagol.it/assets/uploads/201911/gettyimages-689445278.jpg',
            location: 'Via Zagarolese, 00132 Roma RM'
        },
        {
            id: '23',
            name: 'AgriManolo',
            image: 'https://www.agriturismocarlini.it/public/1594998412_78_azienda-agricola_9.jpg',
            location: 'Via Facciata Soldati, 00030 Castel San Pietro Romano RM'
        },
        {
            id: '24',
            name: 'Az. Agr. Di Giuseppantonio',
            image: 'https://www.fellinipatrizio.it/file/usr/azienda-agricola/Panoramica_Azienda67.jpg',
            location: 'Via Tivera, 04012 Cisterna di Latina LT'
        },
    ],
    page: 2,
    total: 2
}

export { areasList, storeslistresponse1, storeslistresponse2 };

