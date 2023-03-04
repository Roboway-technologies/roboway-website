import React from "react";
import { Card, CardBody, CardFooter,Text } from '@chakra-ui/react';
import {motion} from 'framer-motion';
const SectionAprod = ({description,features}) => {
    return (
        <div className="container">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Card align='center'>
                <CardBody>
                    <Text fontSize="2xl">{description}</Text>
                </CardBody>
                <CardFooter>
                    
                </CardFooter>
                </Card>
            </motion.div>

            <table className="table">
            <thead>
                <tr>
                <th scope="col">Features</th>
                </tr>
            </thead>
            <tbody>
            { features.map((item) => {
                    return (
                        <tr className="td">
                            <td>{item}</td>
                        </tr>
                    )
                })
                }
            </tbody>
                </table>


            </div>
    );
    }
export default SectionAprod;