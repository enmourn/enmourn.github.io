import { Grid, GridItem, Heading } from "@chakra-ui/react";

export default function Skills() {
  return (
    <Grid templateColumns='repeat(12, 1fr)' gap='20px'>
      <GridItem colStart='1' colEnd='9'>
        <Heading as='h1' mt='10px'>Web Development</Heading>
        <Heading as='h2' mt='36px' ml='30px'>Skills</Heading>
      </GridItem>
      <GridItem colStart='9' colEnd='12'>123</GridItem>
    </Grid>
  )
}