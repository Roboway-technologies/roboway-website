import { Card, CardBody, CardFooter, Heading,Box,
         CardHeader, Text, SimpleGrid, GridItem
    } from '@chakra-ui/react';
import {motion} from 'framer-motion';
import HeadCard from './HeadCard';
import {MdEngineering} from 'react-icons/md';
import {GiSellCard} from 'react-icons/gi';
import {GiArchiveResearch} from 'react-icons/gi';

const SectionAnav = ()=>{
    
    return (
<>
<div className="container">
<motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
<Card align='center'>
  <CardHeader>
    <Heading size='lg'> What We Do</Heading>
  </CardHeader>
  <CardBody>
    <Text fontSize={"lg"}>Our primary concern is to find a solution using Robotics and Automation.</Text>
  </CardBody>
  <br/><br/>
  <CardFooter>
        <SimpleGrid columns={[1, null, 3]} spacing='120px'>
        <Box height='60px'>
            <Heading size='md' textAlign={"center"} >Provide Personal Safety and Embedded Devices</Heading>
        </Box>
        <Box height='60px'>
            <Heading size='md' textAlign={"center"}>Provide Industrial Safety and Embedded Device</Heading>
        </Box>
        <Box height='60px'>
            <Heading size='md' textAlign={"center"}>Professional Software and Hardware Based Projects</Heading>
        </Box>
        </SimpleGrid>
  </CardFooter>
  <br/><br/>

  <Text><a className="btn btn-primary button1" width={"24rem"} href="/contract">
    <Text className="mainstreamText"> Have a project? Let's Discuss! </Text>
    </a></Text>
  
  <br/><br/><br/>
</Card>
</motion.div>
<br/><br/>
<Card align='center'>
  <CardHeader>
    <Heading size='lg'> How we work</Heading>
  </CardHeader>
  <CardBody>
    <Text fontSize={"lg"}>Our work strategy is agile and we work in a three step process.</Text>
  </CardBody>
  <br/><br/>
  <CardFooter></CardFooter>
  </Card>

<SimpleGrid columns={[1, null, 3]} spacingY='200px' paddingBottom={"300px"}>
<motion.div
    initial={{ opacity: 0, scale: 0.5, y: -100,x:-100 }}
    whileInView={{ opacity: 1, scale: 1, y: 0,x:0 }}
    transition={{ duration: 0.8 }}
  >
  <GridItem w='100%' h='10' align={"center"}>
  <HeadCard 
    heading="Way Finding" 
    description="Safety and Consumer Requirement Analysis is the first step in the design process. We analyze the consumer's requirements and the safety of the design."
    icon = {GiArchiveResearch}
  />

  </GridItem>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, scale: 0.5, y: -100,x:0 }}
    whileInView={{ opacity: 1, scale: 1, y: 0,x:0 }}
    transition={{ duration: 0.8 }}
  >
  <GridItem w='100%' h='10' align={"center"}>
  <HeadCard 
    heading="Way Development" 
    description="Design and Development is the second step in the design process. We design and develop the design to meet the consumer's requirements and safety."
    icon = {MdEngineering}
  />

  </GridItem>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, scale: 0.5, y: -100,x:100 }}
    whileInView={{ opacity: 1, scale: 1, y: 0,x:0 }}
    transition={{ duration: 0.8 }}
  >
  <GridItem w='100%' h='10' align={"center"}>
  <HeadCard 
    heading="Providing Ways"
    description="Sales and Marketing is the third step in the process. We sell and market the devices to the consumer and businesses as well as current market value with accurate calculation"
    icon = {GiSellCard}
  />
  </GridItem>
  </motion.div>

</SimpleGrid>

</div>

</>
    )
}
export default SectionAnav;