import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../../components/paragraph'
import { BioSection, BioYear } from '../../components/bio'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
import { IoLogoInstagram } from 'react-icons/io5'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hi, I&apos;m an app developer based in Colombia.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
           Stirwin Castro Gaviria
          </Heading>
          <p>( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/stirwin_prueba.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          <Link as={NextLink} href="#">
           stirwin
          </Link>
          &nbsp; is a software developer, passionate about graphic design and programming, has a passion for building digital services and related things. It has a gift
            for everything related to product launches, from the planning and design of the entire
            way to solve real life problems with code.
          
         
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Colombia-cartagena
        </BioSection> 
        <BioSection>
          <BioYear>2019           
          </BioYear>
          I finish studies as a bachelor
        </BioSection>
        <BioSection>
          <BioYear>2018-2019</BioYear>
          I started my first career as a systems technician at the age of 17 at Elyon Yireth University
        </BioSection>
       
        <BioSection>
          <BioYear>2020-2022</BioYear>
          I finished studies as a software development technologist
        </BioSection>

        <BioSection>
          <BioYear>2023-present</BioYear>
          I work as a software developer at comfenalco technology
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          GYM
          , Playing videogames,{' '}
         soccer and voleibol 
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/stirwin" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @stirwin castro
              </Button>
            </Link>
          </ListItem>
         
         
        </List>

      

      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../../components/chakra'
