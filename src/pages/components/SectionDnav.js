import { 
    GridItem, SimpleGrid, CardFooter, Text, CardBody, 
    Card, Heading, Image, Stack, Divider, CardHeader } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const sectionDnav = () => {
    return (
        <div className='container'>
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}>

            <Card align='center'>
            <CardHeader>
            <Heading align={"center"} size="lg">Successful Founder Projects</Heading>
            </CardHeader>
            <CardBody>
                <Text align={"center"}>Roboway is thriving for success with the very pace for ensuring safety</Text>
            </CardBody>
            <CardFooter>
                
            </CardFooter>
            </Card>
            </motion.div>


            <SimpleGrid columns={[1, null, 3]} spacingY='450px' paddingBottom={"350px"}>
                
                <GridItem w='120' h='100' align={"center"}> 
                <Card maxW='sm' h="420">
                    <CardBody align={"center"}>
                        <Image
                        src='Assets/duburi.jpg'
                        alt='Team of Duburi'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>Bracu Duburi</Heading>
                        <Text>
                        Our founding Member Arifin Rafi and Tareq Mahmood are the team members of Bracu Duburi, an Autonomous Underwater Vehicle which participated in Robosub 2022, USA and went to the semifinals.
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    
                    </Card>
                </GridItem>
                <GridItem w='120' h='100' align={"center"}> 
                <Card maxW='sm' h="420">
                    <CardBody>
                        <Image
                        src='Assets/dichari.jpg'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>Bracu Dichari</Heading>
                        <Text>
                        Our another founding member Sihab Shahriar, working on BRACU Dichari, which is working alongside Firemen and Disaster management, this project, multiple foreign prize winner is the ultimate solution to the problem of fire in Bangladesh.
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />

                    </Card>
                </GridItem>
                <GridItem w='120' h='100' align={"center"}> 
                <Card maxW='sm' h="420">
                    <CardBody align={"center"}>
                        <Image
                        src='Assets/bionicHand.jpg'
                        alt='4IR project'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>Team Onneshok 4IR Projects</Heading>
                        <Text>
                        Our founding team member Ratul Hasan has designed and created bionic hand, that will help disbaled people to do their daily tasks.
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />

                    </Card>
                </GridItem>
                
            </SimpleGrid>
            <br/><br/><br/><br/><br/>
        </div>
    );
}
export default sectionDnav;    