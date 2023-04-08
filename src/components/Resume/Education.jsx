import { Box, Text } from '@chakra-ui/react';


const EducationCard = ({ date, title, description, institution }) => {
    return (
        <Box
            p={4}
            mb={6}
            rounded="lg"
            borderWidth="2px"
            borderColor="#D5CDFE"
            bgGradient="linear(to-r, #dbfaf8, #D5CDFE)"
            _hover={{ transform: 'scale(1.05)', transition: 'all .3s ease-out' }}

        >
            <Text fontSize="sm" color="gray.500" mb={2}>
                {date}
            </Text>
            <Text fontSize="lg" fontWeight="bold" color="#003366" mb={2}>
                {title}
            </Text>
            <Text fontSize="sm" color="gray.700">
                {institution}
            </Text>
            <Text fontSize="sm" color="gray.700">
                {description}
            </Text>
        </Box>

    );
};

export default EducationCard;