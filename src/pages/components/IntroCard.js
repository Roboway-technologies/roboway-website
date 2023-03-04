import { Card, CardBody, Heading, Image, Stack, Text, Divider } from '@chakra-ui/react'
import React from 'react'

export const IntroCard = ({image, name, designation, altText, links})=>{
    const link = "profile/?id="+links;
    return(
    <Card maxW='sm' h="400" className="card">
    <CardBody>
        <Image
            src={image}
            alt={altText}
            borderRadius='30px'
            height={"180px"}
        />
        <Stack mt='7' spacing='4'>
        <Heading size='md'>{name}</Heading>
        <Text> {designation} </Text>
        <Divider/>
        <a className="button1 btn btn-primary" href={link}>Check Profile</a>
        </Stack>
    </CardBody>

    </Card>
    );
}

