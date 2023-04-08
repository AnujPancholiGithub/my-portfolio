import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectItem from "../ProjectCards";
import { Box, Button } from "@chakra-ui/react";



import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <Box
            position="absolute"
            top="50%"
            left="-28px"
            transform="translateY(-50%)"
            zIndex={100000}
            fontSize="36px"
        >
            <IconButton
                icon={<ChevronLeftIcon />}
                onClick={onClick}
                variant="ghost"
                colorScheme="blue"
                aria-label="Previous"
                size="large"
            />
        </Box>
    );
}

function NextArrow(props) {
    const { onClick } = props;
    return (
        <Box
            position="absolute"
            top="50%"
            right="-30px"
            transform="translateY(-50%)"
            zIndex={100000}
            fontSize="36px"
        >
            <IconButton
                icon={<ChevronRightIcon />}
                onClick={onClick}
                variant="ghost"
                colorScheme="blue"
                aria-label="Next"
                size="large"
            />
        </Box>
    );
}

function ProjectSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
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
            title: "Nykaa Clone",
            startDate: "12/2022",
            endDate: "12/2022",
            description: "Developed functional e-commerce clone of Nykaa in a week. Collaborated effectively with team to overcome challenges, utilizing problem-solving and critical thinking skills for project success.",
            techStack: "HTML, CSS, JavaScript",
            achievements: "Delivered high-quality results while working collaboratively with a team to build a fully functional e-commerce clone of Nykaa.",
            "imageUrl": "https://miro.medium.com/v2/resize:fit:640/1*i7LYX4Wy9Lkenz4c8fq0Hw.gif",
            "liveUrl": "https://code735.github.io/Nykaa_Clone/",
            "githubUrl": "https://github.com/code735/Nykaa_Clone",
            "blogLink": "https://medium.com/username/my-nykaa-clone-project-12345"
        },
        {
            title: 'IKEA Clone',
            startDate: '02/2023',
            endDate: '02/2023',
            description: 'Developed a web application that emulated the functionality of IKEA\'s e-commerce platform. Built with a team of 3 members in one week, my role involved building the Cart, Wishlist Page, and Footer.',
            techStack: 'React, Redux, JavaScript, CSS, ChakraUI',
            achievements: 'Contributed to the development of a fully functional e-commerce platform clone of IKEA, demonstrating proficiency in React, Redux, JavaScript, CSS, and Bootstrap',
            githubUrl: 'Link'
        }
        // Add more projects here
    ];

    return (
        <Box>
            <Slider {...settings}>
                {projects.map((project) => (
                    <ProjectItem key={project.title} {...project} />
                ))}
            </Slider>
        </Box>



    );
}


export default ProjectSlider;
