import { Box, Container, Heading, Img, Stack } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'


const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '3xl',
  };



function Home(){
    
    return (
        <Box> 
        <MyCarousel/>

        <Container maxW={'container.xl'} minH={'100vh'} p='16'>
            <Heading textTransform={"uppercase"} py={'2'} w={"fit-content"} m={"auto"} borderBottom={"2px solid"} >
                Services
                    </Heading>
                <Heading>
                    <Stack h={'full'}
                    p={'5'}
                    alignItems={'center'}
                    direction={['column','row']}
                    >
                    <Img src={img1} filter={'hue-rotate(120deg)'} h={['40','300']}/>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis earum beatae quasi.</p>
                    </Stack>
                </Heading>

        </Container>
        </Box>
    )

}


const MyCarousel = () => (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w="full" h={'90vh'}>
        <Img src={img4} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch The Future
        </Heading>
        
      </Box>


      <Box w="full" h={'90vh'}>
        <Img src={img3} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
          Future is Gaming
        </Heading>
      </Box>
  

      <Box w="full" h={'90vh'}>
        <Img src={img4} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Gaming on Console
        </Heading>
      </Box>
  

      <Box w="full" h={'90vh'}>
        <Img src={img2} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Night life is cool
        </Heading>
      </Box>


    </Carousel>


  );

export default Home;