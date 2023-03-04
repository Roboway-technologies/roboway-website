import { Stack, Heading, Text, 
         Divider, Icon
} from '@chakra-ui/react';



const HeadCard = ({heading, description, icon})=>{
    return (
<div className="cardHeading">
<div align={"center"}>
    <Icon as={icon} w={16} h={16} color='#491A89'/>
    <Stack mt='6' spacing='3' align={"center"}>
    <Heading size='md'>{heading}</Heading>
    <Divider />
    <Text fontSize={"lg"}>
        {description}
    </Text>
    </Stack>
</div>

</div>

        )
    }

export default HeadCard;    