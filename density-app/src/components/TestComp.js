import { Box, Button, Heading, Text } from "@chakra-ui/react"

const TestComp = () => {
  return (
    <div>
      <Box w={"50%"} textAlign={"center"} m={"auto"} mt={"70px"}>
        <Heading size={"md"} mb={"20px"}>We take privacy seriously</Heading>
        <Heading mb={"20px"}>Before you get started</Heading>
        <Heading size={"md"} mb={"20px"}>We would not share your answers with anyone (and would not ever tell <br/> you which friends said about you)</Heading>
        <Box display={"flex"} w={"40%"} m={"auto"} mb={"40px"}>
        <Heading size={"md"} fontWeight={"semibold"}>with love, </Heading>
        <Heading size={"md"}fontFamily={"cursive"} fontWeight={"semibold"}>Team ahead</Heading>
        
        </Box>
        <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'black'}
            borderRadius={"20px"}
            href={'#'}
            mr={"80px"}
            mb={"20px"}
            >
            Start a test
          </Button>
          <Heading ml={"-70px"} size={"sm"} fontWeight={"semibold"}>Take only 5 minutes</Heading>
      </Box>
    </div>
  )
}

export default TestComp
