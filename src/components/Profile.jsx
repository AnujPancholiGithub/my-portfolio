import { motion } from 'framer-motion';
import { Box, Heading, Text, HStack } from '@chakra-ui/react';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';



const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const iconVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
};

const SocialLink = ({ href, color, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        <motion.div
            variants={iconVariants}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
        >
            <Box
                bg={color}
                borderRadius="50%"
                w={10}
                h={10}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                {children}
            </Box>
        </motion.div>
    </a>
);

const Profile = () => (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
        <Box textAlign="center" >
            <motion.div variants={itemVariants}>
                <Heading as="h3" size="2xl" fontWeight="bold" color="#6a6dfc" m={2}>
                    Anuj Pancholi
                </Heading>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Text fontSize="lg" color="#976ef4" mt={6}>
                    Full-Stack Developer
                </Text>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Text fontSize="md" color="gray.600" mt={2}>
                    with Expertise in JavaScript, React, DB, and Node.js.
                </Text>
            </motion.div>

            <motion.div variants={itemVariants}>
                <Box textAlign={"center"} alignItems={"center"} display={"flex"} justifyContent={"center"}>
                    <HStack spacing={6} justifyContent="center" mt={8} size={{ base: "sm", md: "md" }}>
                        <SocialLink href="https://www.linkedin.com/in/anujpancholi/" color="#1773EA">
                            <FaLinkedinIn color="white" />
                        </SocialLink>
                        <SocialLink href="https://twitter.com/theanujpancholi" color="#1C9CEA">
                            <FaTwitter color="white" />
                        </SocialLink>
                        <SocialLink href="https://github.com/AnujPancholiGithub" color="black">
                            <FaGithub color="white" />
                        </SocialLink>
                    </HStack>
                </Box>
            </motion.div>
        </Box>
    </motion.div>
);

export default Profile;
