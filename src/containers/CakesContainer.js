import {useState} from "react";
import Counter from "../components/Counter";

const CakesContainer = () => {

    const [victoriaPrice] = useState(5);
    const [victoriaRating] = useState(5);
    const [teaPrice] = useState(2);
    const [teaRating] = useState(3);
    const [carrotPrice] = useState(8);
    const [carrotRating] = useState(5);

    const [victoriaIngredients] = useState([
        "eggs," + "\n",
      	"butter," + "\n",
      	"sugar," + "\n",
      	"self-raising flour," + "\n",
      	"baking powder," + "\n",
      	"milk" + "\n",
    ])
    const [teaIngredients] = useState([
        "eggs," + "\n",
      	"oil," + "\n",
      	"dried fruit," + "\n",
      	"sugar," + "\n",
      	"self-raising flour," + "\n",
      	"strong tea" + "\n",
    ])

    const [carrotIngredients] = useState([
        "carrots," + "\n",
      	"walnuts," + "\n",
      	"oil," + "\n",
      	"cream cheese," + "\n",
      	"flour," + "\n",
      	"sugar" + "\n",
   	])


    const [victoriaSale, setVictoriaSale] = useState(0);
    const [teaSale, setTeaSale] = useState(0);
    const [carrotSale, setCarrotSale] = useState(0);


    // const [victoriaPic] = useState([<img src="victoriasponge.jpeg" alt = "Victoria Sponge Cake" width="100"/>])
    // const [teaPic] = useState([<img src="tealoaf.jpeg" alt = "tesaloaf Cake" width="100"/>])
    // const [carrotPic] = useState([<img src="carrotcake.jpeg" alt = "carrot Cake" width="100"/>])

    
    return (
        <>
        <h2>Baked Goods:</h2>
        <Counter title={"Victoria Sponge"}  ingredients={victoriaIngredients} price={victoriaPrice}  rating={victoriaRating}  count={victoriaSale} onButtonClick={setVictoriaSale}/>                 
        <Counter title={"Tea Loaf"} price={teaPrice} ingredients={teaIngredients} rating={teaRating} count={teaSale} onButtonClick={setTeaSale}/>
        <Counter title={"Carrot"} price={carrotPrice} ingredients={carrotIngredients} rating={carrotRating} count={carrotSale} onButtonClick={setCarrotSale}/>
        <p>Average Rating:{(victoriaRating + teaRating + carrotRating ) / 3} </p>
        <p>Total Cakes sold: { victoriaSale + teaSale +carrotSale  }</p>
        </>
    )

}

export default CakesContainer;