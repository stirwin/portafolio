import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelGod from '../voxel-god'
import NoSsr from '../no-ssr'


//const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
//  ssr: false,
//  loading: () => <VoxelDogLoader />
//})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Stirwin castro" />
        <meta name="author" content="Stirwin castro" />
        <meta name="author" content="Stirwin castro" />
        <link rel="apple-touch-icon" href="stirwin_prueba.jpeg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="twitter:title" content="Stirwin castro" />
        <meta name="twitter:card" content="summary_large_image" />
      
   
        <meta property="og:site_name" content="Stirwin castro" />
        <meta name="og:title" content="Stirwin castro" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="¡Hola! Soy Stirwin Castro Gaviria, un apasionado desarrollador frontend con experiencia en la creación de experiencias web atractivas. Mi enfoque se centra en el diseño UI/UX y la implementación de soluciones innovadoras con tecnologías como React.js y Next.js. Explora mi portafolio para descubrir cómo transformo ideas en código y creo magia en la web. ¡Conéctate y descubre el mundo del desarrollo web con un toque creativo! 🚀✨" />
        <meta property="og:image" content="https://i.ibb.co/Cbm4Q8z/card.png" />
      
        <title>Stirwin castro gaviria - Home</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <NoSsr>
         <VoxelGod/>  
        </NoSsr>
       
        {children}

       
      </Container>
    </Box>
  )
}

export default Main
