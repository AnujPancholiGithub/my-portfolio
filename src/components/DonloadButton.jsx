import { Button, ButtonGroup, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCloudDownloadAlt, FaRegEye } from "react-icons/fa";
import { HiEye } from "react-icons/hi";

const MotionButton = motion(Button);

const DownloadButton = () => {
    return (
        <ButtonGroup
            pb={{ base: 10, md: 0 }}
            spacing={4}
            flexWrap="wrap"
            size={"md"}
            justifyContent={{ base: "center", md: "center" }} >
            <Box display={{ base: "none", md: "block", lg: "block" }}>
                <MotionButton
                    as="a"
                    href="https://drive.google.com/uc?export=download&id=1z602Km5h3VAjAmy_dYJwCdnqX-Dx7uPB"
                    download="Anuj Pancholi's Resume 0W0R23"
                    bgGradient="linear(to-r, #12B3EB, #5460F9)"
                    px={{ base: "6", md: "8" }}
                    py={{ base: "2", md: "3" }}
                    fontSize={{ base: "md", md: "md" }}
                    color="white"
                    rounded="35px"
                    mt={{ base: "4", md: "6" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}

                >
                    <Box as={FaCloudDownloadAlt} size="22px" mr={{ base: "2", md: "3" }} />
                    Download Resume
                </MotionButton>
            </Box>
            <Box textAlign={"center"} alignItems={"center"} display={"flex"} justifyContent={"center"}>
                <MotionButton
                    as="a"
                    href="https://drive.google.com/file/d/1LUdDSNApIaBsr8a_uNFhygFFNZJeZIHD/view?usp=sharing"
                    target="_blank"
                    download=""
                    bgGradient={{ base: "linear(to-r, #12B3EB, #5460F9)", md: "linear(to-r, #EB4A12, #F9ED54)" }}
                    px={{ base: "6", md: "8" }}
                    py={{ base: "2", md: "3" }}
                    mr={{ base: "4", md: "0" }}
                    justifyContent={"center"}
                    alignItems={"center"}
                    textAlign={"center"}
                    fontSize={{ base: "sm", md: "md" }}
                    color={{ base: "white", md: "black" }}
                    rounded="35px"
                    mt={{ base: "4", md: "6" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                >
                    <Box as={HiEye} size="24px" mr={{ base: "2", md: "3" }} />
                    View Resume
                </MotionButton>
            </Box>
        </ButtonGroup>
    );
};

export default DownloadButton;