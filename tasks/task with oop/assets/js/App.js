import { Pizza } from "./Pizza/Pizza.js";
import { STORAGE_KEYS } from "./Storage/Consts.js";
import { storage } from "./Storage/Storage.js";

Pizza.getProducts("pizzas","loading");