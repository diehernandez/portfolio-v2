import { Container, Box, Heading, Image, useColorModeValue, Link, Button } from '@chakra-ui/react'
import { ChevronRightIcon, StarIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
const Page = () => {
    return (
      <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} aling="center">
                Hello, I&apos;m a full-stack devoloper based in Chile
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Diego Hernandez
                    </Heading>
                    <p> A system builder </p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/me.jpg" alt="Profile Image"/>
                </Box>
            </Box>
            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                   About me  
                </Heading>
      {/* TODO: Make a abstact about me */}
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis quam, ornare in tempus non, varius nec augue. Sed aliquet laoreet tortor, ac convallis risus vulputate nec. Phasellus malesuada magna vel erat aliquet pulvinar. Nullam condimentum consequat felis, sed sollicitudin lorem ultricies a. Vestibulum orci sem, finibus non purus vitae, mattis egestas justo. Suspendisse leo lectus, mollis nec egestas id, malesuada ut lorem. Nulla ultrices augue eget nibh dapibus, a iaculis diam finibus. Sed mattis vehicula lobortis. Integer et lectus sit amet elit sagittis posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum non iaculis elit, convallis ullamcorper ex. Morbi aliquet ante ac nisl rutrum.
      Link to my work {' '}
      <NextLink href="/works/test">
        <Link>Test</Link>
      </NextLink>
      </Paragraph>
      <Box align="center" my={4}>
        <NextLink href="/works">
          <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
          My portfolio
          </Button>
        </NextLink>
      </Box>
            </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
          Bio
          </Heading>
          {/*TODO: Complete Bio */}
          <BioSection>
            <BioYear>1995</BioYear>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BioSection>
          <BioSection>
            <BioYear>2000</BioYear>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BioSection>
          <BioSection>
            <BioYear>2014</BioYear>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BioSection>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
          Things that i like {<StarIcon/>}
          </Heading>
          <Paragraph>
            Climb, Read, ...
          </Paragraph>
        </Section>
        </Container>
    </Layout>
    )
}

export default Page
