import { STORAGE_KEYS as keys } from "../Storage/Consts.js";
import { storage } from "../Storage/Storage.js";
import { pizzaApi } from "./../PizzaApi/PizzaApi.js";

export class Pizza {
    id;
    name;
    topping;
    price;
    constructor(id, name, topping, price) {
        this.id = id;
        this.name = name;
        this.topping = topping;
        this.price = price;
    }

    static async getProducts(domElementId, loaderId) {
        const pizzas = await pizzaApi.getPizzaInfo();
        document.getElementById(loaderId).remove();
        let pizzasOnDom = document.getElementById(domElementId);
        pizzas.forEach((pizza, index) => {
            pizzasOnDom.innerHTML += `
                            <div class="col-3">
                                <div class="pizza-card my-3">
                                    <div class="card-image w-100">
                                        <img src="assets/img/pizza (${index + 1}).png" alt="${pizza.name} pizza" class="ms-4 w-100">
                                    </div>
                                        <div class="card-body">
                                            <span class="f-600">${pizza.name}</span>
                                            <span class="float-end my-2">32cm</span>
                                            <p class="my-2">${pizza.topping ? pizza.topping : "No info"}</p>
                                            <p class="text-center mt-3 f-300 price">${pizza.price} AZN</p>
                                        </div>
                                    <div class="card-add" data-id="${pizza.id}">
                                        <div class="wrapper">
                                            <i class="fas fa-shopping-bag"></i>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            `
        });
        Array.prototype.forEach.call(document.getElementsByClassName("card-add"), pizzaCard => {
            pizzaCard.addEventListener('click', () => storage.setItem(keys.CART_BASKET, JSON.stringify(pizzaCard)));
        });
    }

    static addBasket() {
        
    }
}