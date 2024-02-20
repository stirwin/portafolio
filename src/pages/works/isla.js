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

function isla() {
  return (
    <Layout title="Isla">
      <Container>
        <Title>
          Isla <Badge>2023</Badge>
        </Title>
        <P>
          This island was modeled in Blender using low poly techniques to create
          a tropical environment. Special attention was paid to the details of
          the landscape, and lights and nodes were applied to achieve attractive
          visual effects.{" "}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Blender</span>
          </ListItem>
        </List>

        <AspectRatio my={4} maxW="460px" ratio={1} borderRadius="lg">
          <video
            title="isla video"
            src="/images/works/video-isla.mp4"
            autoPlay
            loop
            style={{ borderRadius: "20px" }}
            width="100%"
            height="100%"
          />
        </AspectRatio>

        <WorkImage src="/images/works/isla noche.jpeg" alt="cuarto" />
      </Container>
    </Layout>
  );
}

export default isla;
