import React from "react";
import { Box } from "@chakra-ui/react";
function PdfEmbed({ src }) {
    return (
        <Box
            as="iframe"
            src={src}
            w="100%"
            h="500px"
            border="none"
        />
    );
}
export default PdfEmbed;