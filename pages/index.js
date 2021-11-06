import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} aling="center">
                Hello, I&apos;m a full-stack devoloper based in Chile
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Diego Hernandez
                    </Heading>
                    <p> A system builder </p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page
