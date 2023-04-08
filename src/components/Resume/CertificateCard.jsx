import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const CertificateCard = () => {
    return (
        <Box
            maxW="2000px"
            minW="200px"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={6}
            boxShadow="md"
            bgGradient="linear(to-r, #F2FDBC,  #F2FDBC )"
            color="black"
            h="530px"
        >
            <Flex justify="space-between" align="center" mb={4} direction="column" gap={2} >
                <Heading as="h3" size="md" color="#3b82f6">
                    CERTIFICATE
                </Heading>
                <Text fontSize="sm" color="black" >
                    Full Stack Web Development
                </Text>
                <Text fontSize="sm" color="black">
                    (06/2022 - 09/2022)
                </Text>
            </Flex>
            <Text fontSize="md" mb={4} color="black">
                I completed "The Complete Web Development Bootcamp" by Angelna, a highly-rated and comprehensive course. Taught by the lead instructor at
                London's App Brewery, I gained a deep understanding of the latest tools and technologies used in web development, including HTML5, CSS3, JavaScript, Node.js, and React.js, With a focus on hands-on learning, I
                built websites, web apps.
            </Text>
        </Box>

    );
};

export default CertificateCard;
