import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import Layout from 'components/common/Layout'

const Home: NextPage = () => {
    const { t } = useTranslation('common')

    return (
        <Layout className='p-4 justify-center'>
            <div className='flex flex-col items-center space-y-4'>
                <div className='relative w-36 h-36 sm:w-52 sm:h-52'>
                    <Image
                        src='/images/pokeball.svg'
                        fill
                        sizes='25vw'
                        className='object-contain'
                        alt='Pokeball'
                        priority
                    />
                </div>
                
                <h1 className='text-center font-bold sm:text-xl'>
                    {t('Un simple projet pour rassembler toutes les données sur Pokémon Go')}
                </h1>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale!, ['common']))
    }
})

export default Home
