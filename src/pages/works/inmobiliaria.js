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

function inmobiliaria() {
  return (
    <Layout title="HOUSEBODY">
      <Container>
        <Title>
        HOUSEBODY <Badge>2023</Badge>
        </Title>
        <P>
          HOUSEBODY is a distinguished real estate agency dedicated to
          facilitating the sale and rental of premium residential properties. We
          take pride in providing exceptional service and connecting clients
          with high-quality homes that suit their lifestyle and preferences.{" "}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React.js</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/landing-HOUSEBODY.jpg" alt="housebody" />
      </Container>
    </Layout>
  );
}

export default inmobiliaria;
