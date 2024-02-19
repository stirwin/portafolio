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

const Work = () => (
  <Layout title="Tecno Burger">
    <Container>
      <Title>
        Tecno Burger <Badge>2022</Badge>
      </Title>
      <P>
        Tecno Burger is an exciting project that combines passion for food with
        technological innovation. It is a web application developed with
        React.js, three.js for three-dimensional elements and Spring Boot for
        the backend. This web software offers a unique experience by allowing
        users to view and interact with a variety of delicious dishes in 3D.{" "}
      </P>
      <List ml={4} my={4}>
      
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js | Spring boot</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/tecnoburger-2.png" alt="tecno burger" />
  
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../../components/chakra";
