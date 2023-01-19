const Counter = ({title, ingredients, price, rating, count, onButtonClick}) => {

    const handleSellCake = () => {
        onButtonClick(count + 1)
    }


    return (
        <>
        <h3> {title} Cake</h3>
        <p>Ingredients: {ingredients} </p>
        <p>Price: {price} </p>
        <p> Rating: {rating} </p>
        <button onClick={handleSellCake}>Sold Cake</button>
        <p>Total Sales: {count} </p>
        </>
    )




}

export default Counter;