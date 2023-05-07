import type { NextPage } from 'next'

import Layout from 'components/common/Layout'

const Home: NextPage = () => {
    return (
        <Layout className='p-4'>
            <h1>
                A humble project to gather all the data about Pokémon Go
            </h1>
        </Layout>
    )
}

export default Home
