import {
  Button,
  Box,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSend } from "react-icons/ai";


function Footer(props) {
  return (
    <Box  bgColor={'black'} minH={"40"} p="16" color={"white"}>
      <Stack direction={["column", "row"]}>
        <VStack alignContent={"stretch"} w={"full"} px="4">
          <Heading size="md" textTransform={"uppercase"} textAlign={["center","left"]}>
            Subscribe to get updates
          </Heading>

          <HStack borderBottom={"2px solid white"} py="2">
            <Input
              placeholder="Enter Email here."
              border={"none"}
              borderRadius={"none"}
              outline={"none"}
              focusBorderColor="none"
            />
            <Button
              p={"0"}
              color={"purple"}
              variant={"ghost"}
              borderRadius={"0 20px 20px 0"}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={"full"}
          borderLeft={["none", "1px solid white"]}
          borderRight={["none", "1px solid white"]}
        >
          <Heading textTransform={"uppercase"} textAlign={"center"}>
            Game Hub
          </Heading>
          <h2>All right are reserved</h2>
        </VStack>


        <VStack
        w={"full"}
        borderLeft={["none", "0px solid white"]}
        borderRight={["none", "1px solid white"]}
        >
            <Heading size={'md'} textTransform={'uppercase'}>
                Social Media
            </Heading>

            <Button variant={'link'} colorScheme={'white'}>
                <a href="https://youtube.com">Youtube</a>
            </Button>

            <Button variant={'link'} colorScheme={'white'}>
                <a href="https://instagram.com">Instagram</a>
            </Button>

            <Button variant={'link'} colorScheme={'white'}>
                <a href="https://facebook.com">Facebook</a>
            </Button>

            <Button variant={'link'} colorScheme={'white'}>
                <a href="https://github.com">Github</a>
            </Button>

        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer;
