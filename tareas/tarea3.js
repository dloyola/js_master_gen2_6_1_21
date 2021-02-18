const filterByTwoIngredients = (ingredient1="palta", ingredient2="lechuga") =>  {
    const orders = sandwichOrders.filter(
        order => order.ingredients.includes(ingredient1) && order.ingredients.includes(ingredient2)
    )
    return orders
}

const findOrderById = (id) => {
    const order = sandwichOrders.find(sandwichOrder => sandwichOrder.id === id)
    if (order){
        const {ordered, protein, bread} = order
        return `La orden fue realizada el ${ordered}, la orden llevó ${protein} y ${bread}`
    }
    return `No se encontró la orden con id ${id}`
}

const findOrderByIdAndIngredient = (id, ingredient='pepinillos') => {
    const order = sandwichOrders.find(sandwichOrder => sandwichOrder.id === id)
    if (order){
        const {ingredients} = order
        return ingredients.includes(ingredient) ? true : false
    }
    return `No se encontró la orden con id ${id}`
}

const findOrderByDate = date => {
    const orders = sandwichOrders.filter(order => order.ordered === date)
    return `Se encontraron ${orders.length} ordenes para la fecha ${date}`
}

const filterByProteinAndIngredient = (protein = 'not burger', ingredient = 'cebolla caramelizada') =>  {
    const orders =  sandwichOrders.filter(
        order => order.protein == protein && order.ingredients.includes(ingredient)
    )
    return orders.map(order => order.ordered)
}

const reducer = (breads, currentItem) => {
    const { bread } = currentItem;
    const { [bread]: count = 0} = breads;
    breads[bread] = count + 1;
    return breads;
}

const getOrdersByBread = sandwichOrders.reduce(reducer, {})