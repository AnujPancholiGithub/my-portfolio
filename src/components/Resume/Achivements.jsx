import { Box, Flex, Text } from "@chakra-ui/react";

const AchievementCard = ({ title, date, description }) => {
    return (
        <Box
            w={{ base: "100%", md: "72" }}
            maxW={{ base: "100%", md: "72" }}
            bgGradient="linear(to-r, #e3f2f4, #f0fbef)"
            rounded="lg"
            shadow="md"
            p={{ base: 4, md: 6 }}
            color="white"
            fontFamily="Poppins"
            boxShadow="0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)"
            borderRadius="lg"
            transition="all .3s ease-in-out"
            _hover={{
                transform: "translateY(-2px)",
                boxShadow: "0 8px 12px -2px rgba(0,0,0,0.2), 0 4px 6px -1px rgba(0,0,0,0.1)"
            }}
        >
            <Flex flexDir={"column"} justifyContent="space-between" alignItems="center" mb={2} textAlign="center" >
                <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color="#3b82f6">
                    {title}
                </Text>
                <Text fontSize={{ base: "sm", md: "sm" }} color="gray.600" whiteSpace={"nowrap"}>
                    {date}
                </Text>
            </Flex>
            <Text fontSize={{ base: "sm", md: "md" }} mt={{ base: 2, md: 4 }} color="#1A2E3E">
                {description}
            </Text>
        </Box>
    );
};

export default AchievementCard;
