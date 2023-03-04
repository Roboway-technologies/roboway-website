import { Card, CardBody, CardFooter, Heading,
    CardHeader, Text, SimpleGrid, GridItem
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import StatsCard from './statsCard';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdConstruction } from 'react-icons/md';
import { TiTickOutline } from 'react-icons/ti';
import { IoMdContacts } from 'react-icons/io';

const SectionBnav = ()=>{
    const dataSet = {
        "projectsPlanned": 10,
        "customersContacted": 5,
        "happyClients": 4,
        "projectsUnderDevelopment": 3,
        "projectsCompleted": 1,
        "projectsCollaborated": 5,
    }
    return (
<>
<div className="container">


<motion.div
    initial={{ opacity: 0, scale: 0.5, y: -100 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >

<Card align='center'>
  <CardHeader>
  <Heading align={"center"} size="lg">Current Statistics of Roboway</Heading>
  </CardHeader>
  <CardBody>
    <Text align={"center"}>Roboway is finding ways for ensuring safety for everyone</Text>
  </CardBody>
  <CardFooter>
    
  </CardFooter>
</Card>
</motion.div>


<motion.div
    initial={{ opacity: 0, scale: 0.5, y: -100 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >

<SimpleGrid columns={[2, null, 4]} spacingY='200px' paddingBottom={"190px"} align={"center"}>

  <GridItem w='100%' h='10' align={"center"}>
  <StatsCard
  title={"Projects Planned"}
    value={dataSet.projectsPlanned}
    icon={FaProjectDiagram}
  />
  </GridItem>

  <GridItem w='100%' h='10' align={"center"}>
  <StatsCard
  title={"Projects Under Development"}
    value={dataSet.projectsUnderDevelopment}
    icon={MdConstruction}
  />
  </GridItem>

  <GridItem w='100%' h='10' align={"center"}>
  <StatsCard
  title={"Completed Projects"}
    value={dataSet.projectsCompleted}
    icon={TiTickOutline}
  />
  </GridItem>


  <GridItem w='100%' h='10' align={"center"}>
  <StatsCard
  title={"Customers Analyzed"}
    value={dataSet.customersContacted}
    icon={IoMdContacts}
  />
  </GridItem>

</SimpleGrid>

</motion.div>

</div>


</>
    )
}
export default SectionBnav;

/*
  <GridItem w='100%' h='10' align={"center"}>
  <StatsCard
  title={"Happy Clients"}
    value={dataSet.happyClients}
    icon={BiHappyBeaming}
  />
  </GridItem>
  
  <GridItem w='100%' h='10' align={"center"}>
  <StatsCard
  title={"Projects Collaborated"}
    value={dataSet.projectsCollaborated}
    icon={MdOutlineConnectWithoutContact}
  />
  </GridItem>
*/