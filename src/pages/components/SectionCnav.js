import { 
    GridItem, SimpleGrid, CardFooter, Text, CardBody, 
    Card, Heading, CardHeader } from '@chakra-ui/react';
import { IntroCard } from './IntroCard';
import { motion } from 'framer-motion';

const sectionCnav = () => {
    const founders = {
        sihabShahriar: {
            name: "Sihab Shahriar",
            image: "https://res.cloudinary.com/homeeventtest/image/upload/v1672901395/Profiles/sihab_bhai_ndukq2.webp",
            designation:"Chief Technical Officer",
            links: "5fbc5333-0143-4cb6-a231-fff929ec2627"
        },
        arifinRafi: {
            name: "Arifin Rafi",
            image:"https://res.cloudinary.com/homeeventtest/image/upload/v1672901567/Profiles/rafi_bhai_kdioxg.webp",
            designation:"Chief Executive Officer",
            links: "c76771c6-2162-4844-a643-f5c63175b5e4"
        },
        asmTareq: {
            name: "Tareq Mahmood",
            image:"https://res.cloudinary.com/homeeventtest/image/upload/v1672901567/Profiles/tareq_bhai_k0yhwo.webp",
            designation:"Chief Information Officer",
            links: "66d09463-db28-4a26-b492-8f436dea37e9"
        },
        soumikShranto:{
            name: "Soumik Shranto",
            image:"https://res.cloudinary.com/homeeventtest/image/upload/v1672901567/Profiles/Shrantoo_v5xgpf.webp",
            designation:"Chief Strategy Officer",
            links: "61ea4743-57e3-4047-9416-dded311ec471"
        },
        ratulHassan:{
            name: "Ratul Hassan",
            image: "https://res.cloudinary.com/homeeventtest/image/upload/v1673289709/Profiles/ratul_hmtzwx.webp",
            designation:"Head of Embeded Systems",
            links: "d767d1c6-8981-2163-a643-f6c631a5b5e4"
        }
    }
    return (
        <div className='container'>
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <Card align='center'>
            <CardHeader>
                <Heading align={"center"} size="lg">Meet The Team</Heading>
            </CardHeader>
            <CardBody>
                <Text align={"center"}>With proper skill distribution, Roboway was founded by four members.</Text>
            </CardBody>
            <CardFooter>
                
            </CardFooter>
            </Card>
            </motion.div>
            <SimpleGrid columns={[1, null, 1]} spacingY='280px' paddingBottom={"270px"}>
            <GridItem w='120' h='60' align={"center"}> 
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8 }}>
                    <IntroCard 
                        image={founders.arifinRafi.image}
                        name={founders.arifinRafi.name}
                        designation={founders.arifinRafi.designation}
                        altText = {founders.arifinRafi.name}
                        links = {founders.arifinRafi.links}
                    />
                </motion.div>
                </GridItem>
            </SimpleGrid>
            <SimpleGrid columns={[1, null, 2]} spacingY='280px' paddingBottom={"270px"}>
                
            <GridItem w='120' h='60' align={"center"}> 
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8 }}>
                    <IntroCard 
                        image={founders.soumikShranto.image}
                        name={founders.soumikShranto.name}
                        designation={founders.soumikShranto.designation}
                        altText = {founders.soumikShranto.name}
                        links = {founders.soumikShranto.links}
                    />
                </motion.div>
                </GridItem>

                <GridItem w='120' h='60' align={"center"}> 
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8 }}>
                    <IntroCard
                        image={founders.asmTareq.image}
                        name={founders.asmTareq.name}
                        designation={founders.asmTareq.designation}
                        altText = {founders.asmTareq.name}
                        links = {founders.asmTareq.links}
                    />
                </motion.div>
                </GridItem>
            </SimpleGrid>
            <SimpleGrid columns={[1, null, 2]} spacingY='280px' paddingBottom={"270px"}>
            <GridItem w='120' h='60' align={"center"}> 
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8 }}>
                    <IntroCard 
                        image={founders.sihabShahriar.image}
                        name={founders.sihabShahriar.name}
                        designation={founders.sihabShahriar.designation}
                        altText= {founders.sihabShahriar.name}
                        links = {founders.sihabShahriar.links}
                    />
                </motion.div>
                </GridItem>
                <GridItem w='120' h='60' align={"center"}> 
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8 }}>
                    <IntroCard 
                        image={founders.ratulHassan.image}
                        name={founders.ratulHassan.name}
                        designation={founders.ratulHassan.designation}
                        altText = {founders.ratulHassan.name}
                        links = {founders.ratulHassan.links}
                    />
                </motion.div>
                </GridItem>
                
            </SimpleGrid>
            <br/><br/><br/>
        </div>
    );
}
export default sectionCnav;    