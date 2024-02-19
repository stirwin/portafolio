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

function Iferrum() {
  return (
    <Layout title="Iferrum">
      <Container>
        <Title>
          Iferrum <Badge>2023-2024</Badge>
        </Title>
        <P>
          The Iferrum Application is a comprehensive tool designed to optimize
          academic management, providing advanced functions for courses,
          teachers and students. Based on a Model-View-Controller (MVC)
          architecture
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Laravel 10</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/iferrum-p.jpg" alt="iferrum" />
      </Container>
    </Layout>
  );
}

export default Iferrum;
