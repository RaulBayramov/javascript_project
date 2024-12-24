class Cart {
    cartItems;
    localStorageName;
    constructor(localStorageName) {
        // has to be named constructor
        // shoul not return anything
        this.localStorageName = localStorageName;
        this.loadFromStorage();
    }
    loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(this.localStorageName))
        if (!this.cartItems) {
            this.cartItems = [
                { courseId: "1234567890" }
            ]
        }
    }
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
    }
    removeFromCart(courseId) {
        const newCart = [];
        this.cartItems.forEach((course) => {
            if (course.courseId !== courseId) {
                newCart.push(course);
            }
        })
        this.cartItems = newCart;
        this.saveToStorage();
    }
    saveToStorage() {
        localStorage.setItem(this.localStorageName, JSON.stringify(this.cartItems));
    }
}

const cart = new Cart('cart-class001');

console.log("class: ", cart)