
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const Frustration = () => {
  const [ref, inView] = useInView();

  const animationVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div>
      <Box  width={"90%"}
      m={"auto"}
      borderRadius={"10px"}
      bgImage="https://previews.123rf.com/images/maxvanit/maxvanit2012/maxvanit201200006/159996887-mock-up-wall-in-the-children-s-room-in-light-pink-color-wall-background-3d-rendering.jpg" 
      bgSize="cover"
      bgPosition="center"
      h="500px" 
      display="flex"
      alignItems="center"
      px={4}
      mt={"50px"}
    >
      <Box  p={6} borderRadius="md">
      <Text color="black">
          Built out of frustration
        </Text>
        <motion.Box
         ref={ref}
         initial="hidden"
         animate={inView ? 'visible' : 'hidden'}
         variants={animationVariants}
         transition={{ duration: 1, type: 'spring' }}
        >
        <Heading 
         
        size="2xl" color="black" mb={10} mt={"10px"} >
          Meet the ahead app
        </Heading>
        </motion.Box>
        <Box w={"50%"} ml={"80%"}>
          
          <Text  fontWeight={"semibold"} color={"grey.600"}>A personalized pocket coach that provides bite-sized, science-driven tools 
            to boost emotional intelligence.
          </Text>
          <br/>
          <Text  fontWeight={"semibold"} color={"grey.600"}>Think of it as a pocket cheerleader towards a better, more fulfilling.
          </Text>
        </Box>
        
      </Box>
    </Box>
    </div>
  )
}

export default Frustration


