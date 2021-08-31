import { TYPES } from "./TYPES";

export const carReducer = (shoppingCar, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CAR:
            {
                let productExists = shoppingCar.products.find(
                    (el) => el.id === action.payload.id
                );

                if (productExists) {
                    return {
                        products: shoppingCar.products.map((product) =>
                            product.id === productExists.id ?
                            {
                                ...product,
                                quantity: product.quantity + Number(action.payload.quantity),
                            } :
                            product
                        ),
                        totalPrice: shoppingCar.totalPrice +
                            Number(action.payload.price) * Number(action.payload.quantity),
                        totalProducts: shoppingCar.totalProducts + Number(action.payload.quantity),
                    };
                } else {
                    return {
                        products: [
                            ...shoppingCar.products,
                            {
                                id: action.payload.id,
                                name: action.payload.name,
                                price: Number(action.payload.price),
                                quantity: Number(action.payload.quantity),
                            },
                        ],
                        totalPrice: shoppingCar.totalPrice +
                            Number(action.payload.price) * Number(action.payload.quantity),
                        totalProducts: shoppingCar.totalProducts + Number(action.payload.quantity),
                    };
                }
            }

        case TYPES.DELETE_FROM_CAR:
            {
                let productFind = shoppingCar.products.find(
                    (el) => el.id === action.payload
                );

                if (productFind.quantity == 1) {
                    return {
                        products: shoppingCar.products.filter(
                            (el) => el.id != action.payload
                        ),
                        totalProducts: shoppingCar.totalProducts - 1,
                        totalPrice: shoppingCar.totalPrice - productFind.price,
                    };
                } else {
                    return {
                        products: shoppingCar.products.map((product) =>
                            product.id === action.payload ?
                            {...product, quantity: product.quantity - 1 } :
                            product
                        ),
                        totalProducts: shoppingCar.totalProducts - 1,
                        totalPrice: shoppingCar.totalPrice - productFind.price,
                    };
                }
            }

        case TYPES.CLEAR_CAR:
            {
                return { products: [], totalPrice: 0, totalProducts: 0 };
            }

        default:
            return shoppingCar;
    }
};