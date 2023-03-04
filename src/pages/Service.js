
import { Box, Grid, GridItem } from "@chakra-ui/react"
import SEO from "./components/SEO";
import Navbar from './components/Navbar';
function Service() {
    const styledNav = {display:"sticky"};
  return (
    <>
    <SEO title={"Service"}/>
    <Navbar style={styledNav} />
<p>finding the way through robotics</p>
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
    <GridItem  bg='blue.500' > <Box height="300px"  border='4px' borderColor='gray.900'>Card</Box> </GridItem>
    <GridItem  bg='blue.500' > <Box height="300px"  border='4px' borderColor='gray.900'>Card</Box> </GridItem>
    <GridItem w='100%' h='10' bg='blue.500' > <Box height="300px"  border='4px' borderColor='gray.900'>Card</Box> </GridItem>
    <GridItem w='100%' h='10' bg='blue.500' > <Box height="300px"  border='4px' borderColor='gray.900'>Card</Box> </GridItem>
    <GridItem w='100%' h='10' bg='blue.500' > <Box height="300px"  border='4px' borderColor='gray.900'>Card</Box> </GridItem>
    </Grid>
    </>

  );
}

export default Service;