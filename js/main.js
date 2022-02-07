gsap.registerPlugin(ScrollTrigger);

const createCirclesAnimation = () => {
    if(window.innerWidth < 425 ) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".main-page__news-container",
                // markers: true,
                start: "top 0",
                end: "bottom 100%",
                scrub: 1,
            }
        });

        tl.to(".news__circle.fst", {x: 0, duration: 20})
            .to(".news__circle.scd", {x: -1000, duration: 20})
            .to(".news__circle.thrd", {x: -1100, duration: 20})

        return
    }
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".main-page__news-container",
            // markers: true,
            start: "top 0",
            end: "bottom 100%",
            scrub: 1,
        }
    });

    tl.to(".news__circle.fst", {x: -100, duration: 20})
        .to(".news__circle.scd", {x: -1000, duration: 20})
        .to(".news__circle.thrd", {x: -1000, duration: 20})

}

createCirclesAnimation()

//Fixed animation

const mainInfo = document.querySelector('.main-page__info')
const mainNews = document.querySelector('.main-page__news')

ScrollTrigger.create({
    trigger: ".main-page",
    start: "top 0%",
    end: "bottom 100%",
    // markers: true,
    scrub: true,
    onEnter: () => {
        mainInfo.classList.add('fixed')
        mainNews.classList.add('fixed')
    },
    onLeave: () => {
        mainInfo.classList.remove('fixed')
        mainInfo.classList.add('adapted-end')
        mainNews.classList.remove('fixed')
        mainNews.classList.add('adapted-end')
    },
    onLeaveBack: () => {
        mainInfo.classList.remove('fixed')
        mainNews.classList.remove('fixed')
    },
    onEnterBack: () => {
        mainInfo.classList.add('fixed')
        mainInfo.classList.remove('adapted-end')
        mainNews.classList.add('fixed')
        mainNews.classList.remove('adapted-end')
    },
})


ScrollTrigger.create({
    trigger: ".main-page",
    start: "10% 0%",
    end: "bottom 100%",
    //markers: true,
    scrub: true,
    onEnter: () => {
        mainNews.classList.add('visible')
        mainInfo.classList.add('notVisible')
    },
    onLeaveBack: () => {
        mainNews.classList.remove('visible')
        mainInfo.classList.remove('notVisible')
    },
})

//video

let videoText =document.querySelector('.text-box')

ScrollTrigger.create({
    trigger: ".video-section",
    start: "10% 0%",
    end: "bottom 50%",
    //markers: true,
    onEnter: () => {
        videoText.classList.add('added')
    },
})

//end