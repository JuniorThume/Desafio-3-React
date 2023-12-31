import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
    mainContent: string,
    content: string
}

const CardInfo = ({ mainContent, content }: ICardInfo) => {
  return (
    <Box
      margin={4}
      backgroundColor="white"
    >
      <Text fontSize='2xl' fontWeight='bold'>
        { mainContent }
      </Text>
      <Text fontSize='xl'>
        { content }
      </Text>
    </Box>
  );
};

export default CardInfo;
