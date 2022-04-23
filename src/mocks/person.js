import imagem from '../../assets/background.jpg'
import logoSales from '../../assets/logo.jpg';
import babyYoda from '../../assets/Itens/Baby-Yoda.jpg';
import caraDune from '../../assets/Itens/cara-dune.jpeg';
import IG11 from '../../assets/Itens/IG-11.jpg';
import lukeSkywalker from '../../assets/Itens/luke-skywalker.jpg';

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
    }
}

export default person;