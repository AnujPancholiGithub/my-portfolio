import React from "react";
import ProjectItem from "./Resume/ProjectCards"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectSlider from "./Resume/ProjectSlider/Slider";

function Test() {


    const projects = [
        {
            title: 'Airbnb Clone',
            startDate: '01/2023',
            endDate: '01/2023',
            description:
                'Worked with a team of 5 to develop a web application that mimicked Airbnb online marketplace using HTML, CSS, and JavaScript. Communicated with team members remotely to complete the project in a limited time.',
            techStack: 'HTML, CSS, JavaScript',
            achievements: 'Contributed to the development of a functional online marketplace clone.',
        },
        {
            title: 'Airbnb Clone',
            startDate: '01/2023',
            endDate: '01/2023',
            description:
                'Worked with a team of 5 to develop a web application that mimicked Airbnb online marketplace using HTML, CSS, and JavaScript. Communicated with team members remotely to complete the project in a limited time.',
            techStack: 'HTML, CSS, JavaScript',
            achievements: 'Contributed to the development of a functional online marketplace clone.',
        },
        {
            title: 'Airbnb Clone',
            startDate: '01/2023',
            endDate: '01/2023',
            description:
                'Worked with a team of 5 to develop a web application that mimicked Airbnb online marketplace using HTML, CSS, and JavaScript. Communicated with team members remotely to complete the project in a limited time.',
            techStack: 'HTML, CSS, JavaScript',
            achievements: 'Contributed to the development of a functional online marketplace clone.',
        },
        // Add more projects here
    ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <div>
            <ProjectSlider />
        </div>

    )
}
export default Test;