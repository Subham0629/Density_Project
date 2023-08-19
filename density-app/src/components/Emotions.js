
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai'

const Emotions = () => {
  return (
    <div>
      <Box  width={"90%"}
      m={"auto"}
      borderRadius={"10px"}
      bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpdVc6-Fyig9hRheJ2-3WgA-x_qKfeEqcXsp4gCBAJ8UxRRilOSj23S2x9o1d4hfqpakE&usqp=CAU" 
      bgSize="cover"
      bgPosition="center"
      h="500px" /* Adjust the height as needed */
      display="flex"
      alignItems="center"
      px={4}
      mt={"50px"}
    >
      <Box  p={6} borderRadius="md">
      <Text color="black">
          Ahead App
        </Text>
        <Heading size="2xl" color="black" mb={10} mt={"10px"} >
          Master your life<br/> by mastering <br/>emotions
        </Heading>
        <Box display={"flex"} gap={"20px"} >
          <Image borderRadius={"5px"} w={"100px"} src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png'/>
          <Box>
          <Box display={"flex"} gap={"5px"}>
          <AiFillStar style={{color:"yellow"}}/>
          <AiFillStar style={{color:"yellow"}}/>
          <AiFillStar style={{color:"yellow"}}/>
          <AiFillStar style={{color:"yellow"}}/>
          <AiFillStar style={{color:"yellow"}}/>
          
          </Box>
          <Text fontSize={"12px"} color="black">
          100+ AppStore reviews
        </Text>
          </Box>
          
          
        </Box>
        
      </Box>
    </Box>
    </div>
  )
}

export default Emotions


