import { HStack } from "@chakra-ui/react";
import { DecorativeBox } from "../components/ui/decorative-box";
import { Box } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box>
      {" "}
      this
      <HStack>
        <DecorativeBox h="10" />
        <DecorativeBox h="5" />
        <DecorativeBox h="20" />
      </HStack>
    </Box>
  );
};

export default NavBar;
