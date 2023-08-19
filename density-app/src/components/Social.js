import { Box, Heading, SimpleGrid } from "@chakra-ui/react"


const Social = () => {
  return (
    <div>
      <Box p={4} w={"90%"} m={"auto"} mt={"200px"} mb={"250px"}>
      <SimpleGrid columns={3} spacing={4}>
        <Box  p={4} borderRadius="md">
          <Heading size="lg" ml={"30px"}>Be the best you with EQ</Heading>
        </Box>
        <Box  p={4} borderRadius="md">
          <Heading fontWeight={"normal"} size="md" color={"gray.600"}>Not having your own emotions 
          under control might be holding you back.</Heading>
        </Box>
        <Box  p={4} borderRadius="md">
          <Heading fontWeight={"normal"} size="md" color={"gray.600"}>Additionally, not understanding
          those of others stops you from being parent, friend you can be.</Heading>
        </Box>
      </SimpleGrid>
    </Box>
    
    </div>
  )
}

export default Social
