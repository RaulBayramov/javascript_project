import { courses } from './data/data.js'
import * as aliasName from './shares/header.js';
import { cart as cartDatabase } from "./data/cart.js";

// Generate Html with javascript
aliasName.header();
let temp = [];
let ourPopulars;
temp = courses.sort((a, b) => b.videoInfo.viewCount - a.videoInfo.viewCount);
ourPopulars = temp.slice(0, 4);
let courseHTML = '';
ourPopulars.forEach((course) => {
    courseHTML += `
        <div class="video-preview ">
            <div class="thumbnail-row">
                <img class="thumbnail" src="${course.thumbnail}" alt="C++ Course Thumbnail">
                <div class="video-time">${(course.videoInfo.videoLength / 3600).toFixed(1)} hours</div>
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
                </div>
            </div>
        </div>
    `;
})
document.querySelector('.js-video-grid').innerHTML = courseHTML;

let videoPrew = document.querySelectorAll(".video-preview");
//ad link to the playlist for each course
videoPrew.forEach(element => {
    element.addEventListener("click", function () {
        window.location.href = "video_playlist.html"
    })
});

