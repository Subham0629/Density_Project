
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import {  Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsEmojiDizzyFill, BsEmojiAngryFill} from "react-icons/bs"
import { motion, transform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const Manifesto = () => {
  const [ref, inView, entry] = useInView();
  const [animate, setAnimate] = useState(false);
  const animationVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const animationVariantsghost = {
    hidden: { x: 500, opacity: 0 }, // Start from the right (x: 100)
    visible: { x: 0, opacity: 1 },  // Move to the left (x: 0)
  };
  if (inView && !animate) {
    setAnimate(true);
  }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true, 
        autoplaySpeed: 2000, 
      };
    
  return (
    <div>
      <Box p={4} w={"90%"} m={"auto"} mt={"25px"}>
      <SimpleGrid columns={3} spacing={4}>
        <Box  p={4} borderRadius="md">
          <Heading size="lg" ml={"30px"}>EQ beats IQ</Heading>
        </Box>
        <Box  p={4} borderRadius="md">
          <Heading fontWeight={"normal"} size="md" color={"gray.600"}>People with high emotional intelligence (EQ) live 
          more fulfilled lives. They tend to be happier and have healthier relationships.</Heading>
        </Box>
        <Box  p={4} borderRadius="md">
          <Heading fontWeight={"normal"} size="md" color={"gray.600"}>They are more successfull in their pursuits and make for inspiring
           leaders. According to science they, earn $29k a year.</Heading>
        </Box>
      </SimpleGrid>
    </Box>
    <Box w={"90%"} m={"auto"} mt={"150px"}  display={"flex"} gap={"20px"}>
    <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={animationVariants}
        transition={{ duration: 1, type: 'spring' }}
        onAnimationComplete={() => {
          if (!inView) {
            entry.target.style.opacity = 0; // Hide the element after animation
          }
        }}
      >
    <Heading>Does this sound familier...</Heading>
    </motion.div>
    <motion.i class="fa-solid fa-ghost" 
    ref={ref}
    initial="hidden"
    animate={inView ? 'visible' : 'hidden'}
    variants={animationVariantsghost}
    transition={{ duration: 1, type: 'spring' }}
    onAnimationComplete={() => {
      if (!inView) {
        entry.target.style.opacity = 0; 
      }}
      
    }
    style={{color:"red",fontSize:"50px", transform:"rotate(-20deg)"}}
    ></motion.i>
    </Box>
    <Box mt={"20px"} >
    <Slider {...settings} >
      <div >
        <Box bg="teal.200" p={4} borderRadius="2xl" mt={"15px"} >
        <BsEmojiDizzyFill style={{color:"yellow", background:"black",borderRadius:"50%"}}/>
        <Heading size={"sm"} mb={"5px"} mt={"15px"}>You attend a class reunion</Heading>
          <Text>You question yourself and wonder when they will realize 
            you are an unqualified imposter, instead of trusting yourself and your abilities.
          </Text>
        </Box>
      </div>
      <div>
        <Box  m={"auto"} mt={"25px"} bg="gray.200" p={4} borderRadius="2xl" ml={"20px"}>
          <BsEmojiAngryFill style={{color:"yellow", background:"black",borderRadius:"50%"}}/>
          <Heading size={"sm"} mb={"5px"} mt={"15px"}>You argue with a colleague</Heading>
          <Text>You ge angry and defensive, instead of staying open and 
            working towards common ground.
          </Text>
        </Box>
      </div>
      <div style={{ display: 'flex'}} >
  <div style={{ transform: 'rotate(-2deg)', transformOrigin: 'left top', display: 'inline-block' }}>
    <Box bg="blue.900" color={"white"} p={4} borderRadius="2xl" ml={"20px"}  mt={"15px"}>
      <BsEmojiDizzyFill style={{ color: "yellow", background: "black", borderRadius: "50%" }} />
      <Heading size={"sm"}>You attend a class reunion</Heading>
      <Text>You question yourself and wonder when they will realize you are an unqualified imposter, instead of trusting yourself and your abilities.</Text>
    </Box>
  </div>
</div>
      <div>
        <Box  m={"auto"} h={"183px"} bg="pink.100" p={4} borderRadius="2xl" ml={"20px"} mt={"15px"}>
          <BsEmojiAngryFill style={{color:"yellow", background:"black",borderRadius:"50%"}}/>
          <Heading size={"sm"} mb={"5px"} mt={"15px"}>You argue with a colleague</Heading>
          <Text>You ge angry and defensive, instead of staying open and 
            working towards common ground.
          </Text>
        </Box>
      </div>
      <div >
        <Box bg="teal.200" p={4} borderRadius="2xl" mt={"15px"} >
        <BsEmojiDizzyFill style={{color:"yellow", background:"black",borderRadius:"50%"}}/>
        <Heading size={"sm"} mb={"5px"} mt={"15px"}>You attend a class reunion</Heading>
          <Text>You question yourself and wonder when they will realize 
            you are an unqualified imposter, instead of trusting yourself and your abilities.
          </Text>
        </Box>
      </div>
      <div>
        <Box  m={"auto"} mt={"25px"} bg="gray.200" p={4} borderRadius="2xl" ml={"20px"}>
          <BsEmojiAngryFill style={{color:"yellow", background:"black",borderRadius:"50%"}}/>
          <Heading size={"sm"} mb={"5px"} mt={"15px"}>You argue with a colleague</Heading>
          <Text>You ge angry and defensive, instead of staying open and 
            working towards common ground.
          </Text>
        </Box>
      </div>
      <div style={{ display: 'flex'}} >
  <div style={{ transform: 'rotate(-2deg)', transformOrigin: 'left top', display: 'inline-block' }}>
    <Box bg="blue.900" color={"white"} p={4} borderRadius="2xl" ml={"20px"}  mt={"15px"}>
      <BsEmojiDizzyFill style={{ color: "yellow", background: "black", borderRadius: "50%" }} />
      <Heading size={"sm"}>You attend a class reunion</Heading>
      <Text>You question yourself and wonder when they will realize you are an unqualified imposter, instead of trusting yourself and your abilities.</Text>
    </Box>
  </div>
</div>
      <div>
        <Box  m={"auto"} h={"183px"} bg="pink.100" p={4} borderRadius="2xl" ml={"20px"} mt={"15px"}>
          <BsEmojiAngryFill style={{color:"yellow", background:"black",borderRadius:"50%"}}/>
          <Heading size={"sm"} mb={"5px"} mt={"15px"}>You argue with a colleague</Heading>
          <Text>You ge angry and defensive, instead of staying open and 
            working towards common ground.
          </Text>
        </Box>
      </div>
    </Slider>
    
    </Box>
    </div>
  )
}

export default Manifesto
