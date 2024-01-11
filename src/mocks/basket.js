import farmLogo from "../../assets/logo.png";

import tomato from '../../assets/frutas/Tomate.png';
import broccoli from '../../assets/frutas/Brócolis.png';
import potato from '../../assets/frutas/Batata.png';
import cucumber from '../../assets/frutas/Pepino.png';
import pumpkin from '../../assets/frutas/Abóbora.png';

const basket = {
  topScreen: {
    title: "Detalhes da Cesta",
  },
  details: {
    productName: "Cesta de Verduras",
    farmName: "Jenny Jack Farm",
    farmLogo,
    description: "Uma cesta com produtos selecionados cuidadosamente, da fazenda para a sua casa",
    price: "R$ 50,00",
    textButton: "Comprar",
  },
  items: {
    title: "Itens da cesta",
    list: [
      {
        name: "Tomate",
        image: tomato
      },
      {
        name: "Brócolis",
        image: broccoli
      },
      {
        name: "Batata",
        image: potato
      },
      {
        name: "Pepino",
        image: cucumber
      },
      {
        name: "Abóbora",
        image: pumpkin
      },
    ]
  }

}

export default basket;