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
  


function metalmecanica() {
  return (
    <Layout title="metalmecanica">
      <Container>
        <Title>
          metalmecanica <Badge>2024</Badge>
        </Title>
        <P>
        Welcome to metalmecanica, Designed on figma, your online destination for premier welding and metalworking services. We are passionate about the art and precision of metal craftsmanship, and our website serves as a comprehensive resource for enthusiasts, professionals, and anyone seeking exceptional metal products.
     </P>
        <List ml={4} my={4}>
        
          <ListItem>
            <Meta>Stack</Meta>
            <span>Figma</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/metalmecanica-p.png" alt="elixir" />
      </Container>
    </Layout>
   
 
 )
}

export default metalmecanica
