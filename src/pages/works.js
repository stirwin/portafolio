import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'



import isla from '../../public/images/works/isla noche.jpeg'
import cuarto from '../../public/images/works/cuarto.jpeg'
import sap from '../../public/images/works/sap.png'
import elixir from '../../public/images/works/elixir.png'
import tecnoburgerimg from "../../public/images/works/tecnoburgerimg.png"
import housebody from "../../public/images/works/housebodyimg.png"
import metalmecanico from "../../public/images/works/metamecanico.png"
import iferrum from '../../public/images/works/iferrum.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
   {/*Rect*/}
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={18} mb={4}>
          React
        </Heading>
      </Section>


      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="tecnoburger" title="Tecno Burger" thumbnail={tecnoburgerimg}>
          wb application that offers a unique and modern fast food experience,
           combining cutting-edge technology with delicious hamburgers
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="inmobiliaria" title="HOUSEBODY" thumbnail={housebody}>
          HOUSEBODY is a real estate agency that specializes in the sale and rental of high-quality residential properties.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
 
      {/*PHP*/}
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={18} mb={4}>
          PHP
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
          <WorkGridItem id="Iferrum" title="Iferrum" thumbnail={iferrum}>
          The Iferrum Application is a comprehensive tool designed to optimize academic management
           </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="sap" title="Sap" thumbnail={sap}>
          The Foundation&apos;s Psychological Care Service
           Comfenalco Technological University in Cartagena        </WorkGridItem>
        </Section>
      </SimpleGrid>


       {/*BLENDER*/}
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={18} mb={4}>
          Blender
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="isla" title="Isla" thumbnail={isla}>
          Low Poly Style Tropical Island in Blende
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="cuarto" title="living room" thumbnail={cuarto}>
          This project represents a room in low poly style
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/*FIGMA*/}
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={18} mb={4}>
          figma
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="metalmecanica" title="METALMECANICA" thumbnail={metalmecanico}>
          Metalworking is a website dedicated to welding and metalworking services.
           In it you can find detailed information about the different types of products
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="Elixir" title="Elixir" thumbnail={elixir}>
          It is a carefully designed sensory experience. Our store, meticulously modeled in Figma
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    





    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../../components/chakra'
