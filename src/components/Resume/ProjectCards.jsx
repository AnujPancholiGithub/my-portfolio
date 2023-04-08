import { Box } from '@chakra-ui/react';
import React from 'react';

const ProjectItem = ({ title, startDate, endDate, description, techStack, achievements }) => {
    return (

        <Box className="py-4 px-4 mb-6 rounded-lg bg-white shadow-md " bgGradient="linear(to-r, #F0FBF3, #fef5e6)">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-500">{title}</h3>
                <span className="text-tiny text-gray-lite">
                    {startDate} - {endDate}
                </span>
            </div>
            <div className="text-sm text-gray-700">
                <p className="my-4">{description}</p>
                <div className="flex flex-wrap justify-between gap-4">
                    <div className="rounded-md bg-pink-100 dark:bg-pink-800 px-4 py-2 mb-2">
                        <strong className="font-medium text-pink-600 dark:text-pink-400">Tech Stack:</strong> {techStack}
                    </div>
                    <div className="rounded-md bg-blue-100 dark:bg-pink-800 px-4 py-2">
                        <strong className="font-medium text-blue-500 dark:text-pink-400">Achievements:</strong> {achievements}
                    </div>
                </div>
            </div>
        </Box>

    );
};



export default ProjectItem;
