import {
  Text,
  Button,
  ButtonGroup,
  Center,
  Container,
  Heading,
  Input,
  Link,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function Login() {
  return (
    <Container maxW={"container.xl"} h={"90vh"} p={"14"}>
      <form>
        <VStack
          alignItems={"stretch"}
          spacing={"8"}
          w={['75','95']}
          m={"auto"}
          marginY={"16"}
        >
          <Heading>Welcome Back</Heading>
          <Input
            placeholder={"Email"}
            type="email"
            required
            focusBorderColor="red"
          />
          <Input
            placeholder={"Password"}
            type={"password"}
            required
            focusBorderColor="red"
          />
          <Button variant={"link"} alignSelf={"flex-end"}>
            <Link to={"/forgetpassword"} color="purple.500">
              Forget Passsword
            </Link>
          </Button>

          <Button colorScheme="purple" type="submit">
            Log IN
          </Button>
          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
}

export default Login;
