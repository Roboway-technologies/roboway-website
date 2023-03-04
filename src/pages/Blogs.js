
import './App.css';
import { Box, Card, Image, SimpleGrid,
    CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button
 } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import SEO from './components/SEO';

function Blogs() {
  return (
    <>
    <SEO title={"Blogs"}/>
    <Navbar/>
    <div className="container">
    <SimpleGrid columns={[1, null, 3]} spacing={5}>
    <Card maxW='sm'>
        <CardBody>
            <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>Rise of AI, how dangerous is it?</Heading>
            <Text>
            The rise of artificial intelligence (AI) has been one of the defining technological trends of the 21st century. AI refers to the development of computer systems that can perform tasks that would normally require human intelligence, such as visual perception, speech recognition, decision-making, and language translation. The increasing availability....<a href="/blog/article-01" style={{color:"blue"}}> Read more</a>
            </Text>
            
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
            <Button className="button1" style={{color:"white"}}>
                Read Now
            </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
    <Card maxW='sm'>
        <CardBody>
            <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>Industrial automation enhancing worker safety, here is how</Heading>
            <Text>
            Industrial automation can enhance worker safety by reducing or eliminating the need for human intervention in hazardous or dangerous tasks. By automating tasks such as handling hazardous materials, operating dangerous machinery, and working in ....<a href="/blog/article-01" style={{color:"blue"}}> Read more</a>
            </Text>
            
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
            <Button className="button1" style={{color:"white"}}>
                Read Now
            </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>

        <Card maxW='sm'>
        <CardBody>
            <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>Integrating Blockchain with robotics, race of cutting edge?</Heading>
            <Text>
            Blockchain technology has the potential to play a significant role in the field of robotics by providing a secure and decentralized way to manage the interactions between robots and other systems. One application of blockchain in ....<a href="/blog/article-01" style={{color:"blue"}}> Read more</a>
            </Text>
            
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
            <Button className="button1" style={{color:"white"}}>
                Read Now
            </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>    

    </SimpleGrid>
    </div>
    </>
  );
}

export default Blogs;