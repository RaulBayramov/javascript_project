import { courses } from "./data/data.js";
import { header } from "./shares/header.js";
import { addToCart, cart } from "./data/cart.js";
let courseHTML = '';
header();
courses.forEach((course) => {
    courseHTML += `
        <div class="video-preview">
            <div class="thumbnail-row">
                <img class="thumbnail" src="${course.thumbnail}" alt="C++ Course Thumbnail">
                <div class="video-time">${course.getVideoLength()} hours</div>
            </div>
            <div class="video-info-grid">
                <div class="channel-picture">
                    <img class="profile-picture" src="${course.instructor.img}" alt="Not Found">
                </div>
                <div class="video-info">
                    <p class="video-title">
                        ${course.name}
                    </p>
                    <p class="video-author">
                        <a href="${course.instructor.aboutInstructor}" target="_blank" rel="noopener noreferrer">
                            ${course.instructor.name}
                        </a>
                    </p>
                    <p class="video-stats">
                        ${course.videoInfo.viewCount} views &#183; ${course.videoInfo.loadedTime}
                    </p>
                    <div class="action-buttons">
                        <div class="added-to-cart js-added-to-card-${course.id}">
                            <img src="./images_/icons/checkmark.png">
                            Added
                        </div>

                        <button class="add-to-cart-button button-primary js-add-button" data-id="${course.id}">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
})
document.querySelector('.js-video-grid-courses').innerHTML = courseHTML;
window.addEventListener('load', () => {
    document.body.style.height = "100vh";
});

let videoPrew = document.querySelectorAll(".thumbnail-row");
videoPrew.forEach(element => {
    element.addEventListener("click", function () {
        window.location.href = "video_playlist.html"
    })
});

document.querySelectorAll(".js-add-button").forEach((button) => {
    button.addEventListener("click", () => {
        const courseId = button.dataset.id;
        addToCart(courseId);
        document.querySelector(".cart-quantity").innerHTML = cart.length
    })
})

