function CreateCartObject(localStorageName) {
    const cart = {
        cartItems: undefined,
        loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageName))
            if (!this.cartItems) {
                this.cartItems = [
                    { courseId: "1234567890" }
                ]
            }
        },
        // addedMesageFunc(courseId) {
        //     const addedMesage = document.querySelector(`.js-added-to-card-${courseId}`);
        //     addedMesage.style.opacity = 1;
        //     setTimeout(() => {
        //         addedMesage.style.opacity = 0;
        //     }, 2000)
        // },
        addToCart(courseId) {
            let matchItem;
            //this.addedMesageFunc(courseId);
            this.cartItems.forEach((cartItem) => {
                if (cartItem.courseId === courseId) {
                    matchItem = cartItem
                }
            })
            if (!matchItem) {
                this.cartItems.push({
                    courseId: courseId
                });
            }
            this.saveToStorage();
        },
        removeFromCart(courseId) {
            const newCart = [];
            this.cartItems.forEach((course) => {
                if (course.courseId !== courseId) {
                    newCart.push(course);
                }
            })
            this.cartItems = newCart;
            this.saveToStorage();
        },
        saveToStorage() {
            localStorage.setItem(localStorageName, JSON.stringify(this.cartItems));
        }
    }
    return cart;
}
export const cart = CreateCartObject('cart-oop0');
export const businessCart = CreateCartObject('business-cart-oopp');
cart.loadFromStorage();
businessCart.loadFromStorage();
console.log(cart);
console.log(businessCart)


