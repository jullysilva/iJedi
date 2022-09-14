import imagem from '../../assets/background.jpg'
import logoSales from '../../assets/logo.jpg';
import babyYoda from '../../assets/Itens/Baby-Yoda.jpg';
import caraDune from '../../assets/Itens/cara-dune.jpeg';
import IG11 from '../../assets/Itens/IG-11.jpg';
import lukeSkywalker from '../../assets/Itens/luke-skywalker.jpg';
import DarthVader from '../../assets/funkos/pop_darth-vader.jpg';
import Finn from '../../assets/funkos/pop_finn.jpg';
import PrincesLeia from '../../assets/funkos/pop_princesa-leia.png';
import Sandtrooper from '../../assets/funkos/pop_sandtrooper.jpeg';
import Yoda from '../../assets/funkos/pop_yoda.jpg';
import Obiwan from '../../assets/funkos/pop_obiwan.jpg';

const person = {
    topo: {
        title: "Informação",
        image: imagem
    },
    details: {
        title: 'Detalhes',
        titileProduct: 'Mandalorian: Boba Fett',
        nameSalesman: 'Boba Fett',
        description: 'Boba Fett é um personagem fictício do universo da série Star Wars, que ocupa simultaneamente os papeis de vilão e de anti-herói e é um dos dois antagonistas de O Império Contra-Ataca, juntamente a Darth Vader.',
        image: logoSales,
        price: 'R$ 49,36'
    },
    itens: {
        title: 'Itens do carrinho',
        list: [
            {
                name: 'Baby Yoda',
                image: babyYoda,
            },
            {
                name: 'Cara Dune',
                image: caraDune,
            },
            {
                name: 'IG-11',
                image: IG11,
            },
            {
                name: 'Luke Skywalker',
                image: lukeSkywalker,
            },
            {
                name: 'Baby Yoda',
                image: babyYoda,
            },
            {
                name: 'Cara Dune',
                image: caraDune,
            },
        ]
    },
    products: {
        title: 'Veja mais',
        list: [
            {
                name: 'Finn',
                image: Finn,
            },
            {
                name: 'Darth vader',
                image: DarthVader,
            },
            {
                name: 'Princesa Leya',
                image: PrincesLeia,
            },
            {
                name: 'SandTrooper',
                image: Sandtrooper,
            },
            {
                name: 'Obiwan Kenobi',
                image: Obiwan,
            },
            {
                name: 'Mestre Yoda',
                image: Yoda,
            },
        ]
    }
}

export default person;