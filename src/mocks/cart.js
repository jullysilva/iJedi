import imagem from '../../assets/topo.png'
import logoSales from '../../assets/logo.png';
import antena from '../../assets/Itens/antena2g3g.png';
import antenawifi from '../../assets/Itens/antenaWifi.png';
import modem from '../../assets/Itens/modem.png';
import modemmcu from '../../assets/Itens/nodeMcu.png';

const cart = {
    topo: {
        title: "Cart",
        image: imagem
    },
    details: {
        title: 'Detalehs do carro',
        titileProduct: 'mandaloria',
        nameSalesman: 'Edivaldo Anakin',
        description: 'Prepare for a career in tech by joining GitHub Global Campus. Global Campus will help you get the practical industry knowledge you need by giving you access to industry tools, events, learning',
        image: logoSales,
        price: 'R$ 49,36'
    },
    itens: {
        title: 'Itens do carrinho',
        list: [
            {
                name: 'Antena',
                image: antena,
            },
            {
                name: 'Antena wi-fi',
                image: antenawifi,
            },
            {
                name: 'Modem',
                image: modem,
            },
            {
                name: 'Modem MCU',
                image: modemmcu,
            },
            {
                name: 'Antena',
                image: antena,
            },
            {
                name: 'Moden',
                image: modem,
            },
        ],
    },
    products: {
        title: 'Veja mais',
        list: [
            {
                name: 'Anakin',
                image: antena,
            },
            {
                name: 'Darth vader',
                image: antenawifi,
            },
            {
                name: 'Princesa Leya',
                image: modem,
            },
            {
                name: 'Boba Feet',
                image: modemmcu,
            },
            {
                name: 'Obiwan',
                image: antena,
            },
            {
                name: 'Mestre Yoda',
                image: modem,
            },
        ]
    }
}

export default cart;