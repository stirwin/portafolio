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
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Stirwin castro" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Stirwin castro" />
        <meta name="og:title" content="Stirwin castro" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
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
