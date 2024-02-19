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
  


function Elixir() {
  return (
    <div>
       <Layout title="Elixir">
      <Container>
        <Title>
          Elixir <Badge>2024</Badge>
        </Title>
        <P>
        Every detail of the Elixir store has been precisely modeled in Figma, providing a stunning visual representation of the range of perfumes and products on offer.
        </P>
        <List ml={4} my={4}>
        
          <ListItem>
            <Meta>Stack</Meta>
            <span>Figma</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/elixir-p.png" alt="elixir" />
      </Container>
    </Layout>
    </div>
  )
}

export default Elixir
