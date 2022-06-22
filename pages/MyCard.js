import React from 'react'
import { Card, Text, Grid, Link } from "@nextui-org/react";
function MyCard() {
    return (

        <Grid sm={6} xs >
            <Card 
                variant="flat"
                css={{
                backgroundColor: '#161616',
                
            }} className="px-[18px]">
                <Text
                    h1
                    size={60}
                    css={{
                        textGradient: '45deg, $blue600 -20%, $pink600 50%'
                    }}
                    weight="bold"
                >
                    Let's
                </Text>
                <Text
                    h1
                    size={60}
                    css={{
                        textGradient: '45deg, $purple600 -20%, $pink600 100%'
                    }}
                    weight="bold"
                >
                    Make the Web
                </Text>
                <Text
                    h1
                    size={60}
                    css={{
                        textGradient: '45deg, $yellow600 -20%, $red600 100%'
                    }}
                    weight="bold"
                >
                    Prettier
                </Text>
                <Card.Footer className='px-0'>
                    <Link
                        target="_blank"
                        css={{ color: "$blue700" }}
                        href="https://github.com/nextui-org/nextui"
                    >
                        Visit source code on GitHub.
                    </Link>
                </Card.Footer>
            </Card>
        </Grid>


    )
}

export default MyCard