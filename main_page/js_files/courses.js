import { courses } from "./data.js";
let courseHTML = '';
courses.forEach((course) => {
    courseHTML += `
        <div class="video-preview">
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
window.addEventListener('load', () => {
    document.body.style.height = "100vh";
});
