import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Works = () => {
  return (
<Layout>
    <Container>   
      <Heading as="h3" fontSize={20} mb={4}>
      Works   
    </Heading> 
    {/* //TODO: Complete with works */}
    <SimpleGrid columns={[1,1,2]} gap={6}>
      <Section>
        <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
          A text is here to complete 
        </WorkGridItem>
      </Section>
      <Section>
        <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
          A text is here to complete 
        </WorkGridItem>
      </Section>
    </SimpleGrid>
    <Section delay={0.4}>
      <Divider my={6}/>
      <Heading as="h3" fontSize={20} mb={4}>
        Old works
      </Heading>
    </Section> 
    {/* //TODO: Complete with works */}
    <SimpleGrid columns={[1,1,2]} gap={6}>
      <Section>
        <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
          A text is here to complete 
        </WorkGridItem>
      </Section>
      <Section>
        <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
          A text is here to complete 
        </WorkGridItem>
      </Section>
    </SimpleGrid>
    </Container>   
  </Layout>
  )
}

export default Works  
