import React from "react";
import { FaGraduationCap } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';
import { FaAward } from 'react-icons/fa';
import ProjectItem from "./Resume/ProjectCards";
import AchievementCard from "./Resume/Achivements";
import EducationCard from "./Resume/Education";
import { Box, Flex, SimpleGrid, Text, Spacer } from '@chakra-ui/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import ProjectSlider from "./Resume/ProjectSlider/Slider"
import PdfEmbed from "./Resume/pdfEmbeded"
import CertificateCardComponent from "./Resume/CertificateCard"
import Skills from "./Resume/Skills";
import { Link } from "react-router-dom";

function Resume() {

    const achievements = [
        {
            title: 'Achieved 2nd place in the Construction Week presentation competition at Masai School.',
            date: '01/2023-01/2023',
            description:
                'Divided a cohort of students into randomly assigned teams of up to 4 or 5 members, each responsible for completing an allocated project within a week by fostering collaboration and teamwork.',
        },
        {
            title: 'Earned 1st place in the Construction Week presentation competition at Masai School.',
            date: '12/2022-12/2022',
            description:
                'The cohort of students will be randomly divided into teams of a maximum of 4 or 5 students per team. Every team will be allocated a project. The team of students has to collaborate and finish the project within that week.',
        },
        {
            title: 'Achieved 2nd place in the Construction Week presentation competition at Masai School.',
            date: '11/2022-11/2022',
            description:
                'The cohort of students will be randomly divided into teams of a maximum of 4 or 5 students per team. Every team will be allocated a project. The team of students has to collaborate and finish the project within that week.',
        },
        // Add more achievements here
    ];

    const educations = [

        {
            title: 'Bachelor of Computer Applications, Computer Science',
            date: '2019 - 2022',
            institution: 'University of Rajasthan',
        },
        {
            title: 'Full Stack Development',
            date: '2022 - 2023',
            institution: 'Masai School',
            description: "Completed a rigorous 35-week program at Masai School, gaining expertise in a variety of programming topics.Developed a strong foundation in programming basics, including Implementation, String, Array, and Loops.Acquired advanced knowledge of data structures and algorithms, including Binary Search, Dynamic Programming, and Graphs.Skilled in web development using HTML, CSS, and JavaScript, including advanced concepts such as ES6.Proficient in building dynamic web applications with Node JS, Express, and RESTful APIs.Experienced in complex web application development using React, including AWS and Containers.Completed various assignments and presentations, gaining practical experience in applying learned concepts.Prepared to take on challenging roles as a developer and make valuable contributions to any development team."
        },

    ];


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
            title: 'Airbnb Clonesa',
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

        <Box overflow="auto" pt={2} mt={8} >
            <section className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
                <div data-aos="fade" className="aos-init aos-animate" style={{ overflow: "hidden" }}>
                    <div className="container  sm:px-5 md:px-10 lg:px-20">
                        <div className="py-12 px-4">
                            <h2 className="after-effect text-2xl after:left-44 mb-[40px] mt-12 lg:mt-0 text-[#4d6af8]">
                                Resume
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 " >
                                <div>


                                    <div className="flex items-center space-x-2 mb-4 ">
                                        <FaGraduationCap className="text-6xl text-[#F95054]" />
                                        <h4 className="text-4xl dark:text-white font-medium">
                                            Education
                                        </h4>
                                    </div>

                                    <Box display="grid" gridColumn={"1"} h="95%"  >
                                        {educations.map((education, index) => (
                                            <EducationCard
                                                key={index}
                                                title={education.title}
                                                date={education.date}
                                                description={education.description}
                                                institution={education.institution}
                                            />
                                        ))}
                                    </Box>



                                </div>
                                <div>


                                    <div className="flex items-center space-x-2 mb-4 ">
                                        <FaRegUser className="text-6xl text-[#F95054]" />
                                        <h4 className="text-4xl dark:text-white font-medium flex space-x-0 ">
                                            Projects
                                        </h4>
                                    </div>







                                    <Box overflow="hidden"  >


                                        <Box>
                                            <ProjectSlider />
                                        </Box>
                                        <Spacer />

                                        <Box marginTop={10}  >

                                            <CertificateCardComponent />
                                        </Box>



                                    </Box>

                                </div>
                                <div>
                                    <div className="flex items-center space-x-2 mb-4 ">
                                        <FaAward
                                            className="text-6xl text-[#F95054]"
                                        />
                                        <h4 className="text-4xl dark:text-white font-medium">
                                            Achievements
                                        </h4>
                                    </div>

                                    <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                                        {achievements.map((achievement) => (
                                            <AchievementCard {...achievement} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* skillshwew */}

                    {/* <Skills /> */}


                    {/* skills */}


                </div>
            </section>

        </Box>

    )
};

export default Resume;