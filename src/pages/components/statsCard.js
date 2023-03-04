import { Text, Icon, Box } from '@chakra-ui/react';

const StatsCard = ({icon, value, title})=>{
    return (
        <Box align={"center"}> 
        <div style={{marginTop:"10px"}}>&nbsp;</div>
        <Icon as={icon} w={16} h={16} color={"#0366fc"} />
        <Text fontSize='2xl' >{value}</Text>
        <div style={{marginTop:"5px"}}>&nbsp;</div>
        <Text >{title}</Text>
        </Box>

        )
    }

export default StatsCard;    