import { header } from "../shares/header.js"
export let cart = []
function addedMesageFunc(courseId) {
    const addedMesage = document.querySelector(`.js-added-to-card-${courseId}`);
    addedMesage.style.opacity = 1;
    setTimeout(() => {
        addedMesage.style.opacity = 0;
    }, 2000)
}
export function addToCart(courseId) {
    let matchItem;
    addedMesageFunc(courseId);
    cart.forEach((cartItem) => {
        if (cartItem.courseId === courseId) {
            matchItem = cartItem
        }
    })
    if (!matchItem) {
        cart.push({
            courseId: courseId
        });
    }
    console.log(cart);
}
export function setQuantity() {
    return cart.length;
}