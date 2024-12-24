class Course {
    name;
    id;
    instructor;
    videoSrc;
    thumbnail;
    videoInfo;
    constructor(course) {
        this.name = course.name;
        this.id = course.id;
        this.instructor = course.instructor;
        this.videoSrc = course.videoSrc;
        this.thumbnail = course.thumbnail;
        this.videoInfo = course.videoInfo;
    }
    getVideoLength() {
        return ` ${(this.videoInfo.videoLength / 3600).toFixed(1)}`
    }

}

export let courses = [
    {
        name: "The Complete Python Programming Course",
        id: "1234567890",
        instructor: {
            name: 'Papuna Qarchava',
            aboutInstructor: 'https://computing.tsu.ge/ka/structures/24',
            img: './images_/tutors/OV5kTaE5Z0CW0SHf.jpg'
        },
        videoSrc: './videos/1%20ლექცია%20-%20მოდელირება%20და%20სიმულაცია.mp4',
        thumbnail: './images_/thumbnails/operating-system-t.jpg',
        videoInfo: {
            viewCount: 8000,
            loadedTime: '15.05.2024',
            videoLength: 43200
        }
    },
    {
        name: "Discrete Mathematics Tutorial",
        id: "1234567891",
        instructor: {
            name: 'Gia Sirbiladze',
            aboutInstructor: 'https://computing.tsu.ge/ka/structures/40',
            img: './images_/tutors/gia_sirbiladze.jpg'
        },
        videoSrc: './videos/Discrete-Mathematics-Tutorial.mp4',
        thumbnail: './images_/thumbnails/Discrete-Mathematics-Tutorial.jpg',
        videoInfo: {
            viewCount: 8500,
            loadedTime: '01.07.2024',
            videoLength: 36000
        }
    },
    {
        name: "Introduction to Linear Algebra",
        id: "1234567892",
        instructor: {
            name: 'Magda Tsintsadze',
            aboutInstructor: 'https://computing.tsu.ge/ka/structures/41',
            img: './images_/tutors/Magda_Tsintsadze.jpg'
        },
        videoSrc: './videos/Linear-Algebra.mp4',
        thumbnail: './images_/thumbnails/Linear-Algebra-in-Machine-Learning.png',
        videoInfo: {
            viewCount: 9400,
            loadedTime: '03.07.2024',
            videoLength: 42000
        }
    },
    {
        name: "Haskell Programming Essentials",
        id: "1234567893",
        instructor: {
            name: 'Maia Archuadze',
            aboutInstructor: 'https://computing.tsu.ge/ka/structures/42',
            img: './images_/tutors/Maia-Archuadze-2.png'
        },
        videoSrc: './videos/Haskell-Programming.mp4',
        thumbnail: './images_/thumbnails/haskell.jpg',
        videoInfo: {
            viewCount: 7800,
            loadedTime: '05.07.2024',
            videoLength: 48000
        }
    },
    {
        name: "Statistics for Data Science",
        id: "1234567894",
        instructor: {
            name: 'Vaxo Liluashvili',
            aboutInstructor: 'https://computing.tsu.ge/ka/structures/43',
            img: './images_/tutors/vaxo_liluashvili_c038bff764.webp',
        },
        videoSrc: './videos/Statistics-Basics.mp4',
        thumbnail: './images_/thumbnails/statistics.jpg',
        videoInfo: {
            viewCount: 10200,
            loadedTime: '08.07.2024',
            videoLength: 54000
        }
    }

].map((course) => {
    return new Course(course);
})
console.log(courses);

