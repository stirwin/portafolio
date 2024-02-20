import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio,
  } from "@chakra-ui/react";
  import { ExternalLinkIcon } from "@chakra-ui/icons";
  import { Title, WorkImage, Meta } from "../../../components/work";
  import P from "../../../components/paragraph";
  import Layout from "../../../components/layouts/article";

  

function cuarto() {
  return (
    <Layout title="living room">
    <Container>
      <Title>
      living room <Badge>2023</Badge>
      </Title>
      <P>
      This project represents a room in low poly style, highlighting my ability to model and optimize objects in a three-dimensional environment. The room includes a detailed television, furniture and various accessories, each designed with the low poly technique to reduce polygons and achieve a distinctive visual style
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Blender</span>
        </ListItem>
      </List>

     

      <WorkImage src="/images/works/cuarto.jpeg" alt="cuarto" />
    </Container>
  </Layout>
  )
}

export default cuarto
