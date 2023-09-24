import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../../components/work'
  import P from '../../../components/paragraph'
  import Layout from '../../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Inkdrop">
      <Container>
        <Title>
          Tecno Burger <Badge>2020</Badge>
        </Title>
        <P>
        is an academic-administrative unit attached to the Psychology Program,
         whose purpose is to contribute to the development of the city in the exercise of social projection, developing actions and methods to address the different problems of the context and social reality,
         with an ethical and reflective of what to do professionally </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://tecnologicocomfenalco.edu.co/sap/">
            https://tecnologicocomfenalco.edu.co/sap/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Codigniter 3</span>
          </ListItem>
         
        </List>
  
        <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
        <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
       
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../../components/chakra'
  