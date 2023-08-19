import { Box, Flex, Heading } from "@chakra-ui/react"
import styles from './ScrollableBox.module.css';


const Work = () => {
  return (
    <div>
      <Box  width={"90%"}
      m={"auto"}
      borderRadius={"10px"}
      bg={"purple.100"}
      bgSize="cover"
      bgPosition="center"
      h="500px" /* Adjust the height as needed */
      //display="flex"
      alignItems="center"
      px={4}
      mt={"50px"}
    >

    <Box w={"90%"} m={"auto"} pt={"80px"} mt={"0px"} display={"flex"} justifyContent={"space-between"}>
    <Heading>Work with us</Heading>
    <Heading color={"blue"}>ahead</Heading>
    </Box>
    <Box w={"100%"} h={"500px"} border={"1px solid black"}>
        <Box></Box>
        <Box>
        <Flex justify="center" align="center" height="100vh">
      <Box className={styles.scrollablebox}>
        <Box className={styles.box}>Box 1</Box>
        <Box className={styles.box}>Box 2</Box>
        <Box className={styles.box} >Box 3</Box>
        <Box className={styles.box}>Box 4</Box>
      </Box>
    </Flex>
        </Box>
    </Box>
    </Box>
    
    </div>
  )
}

export default Work
