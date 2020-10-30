import Head from 'next/head'
import NavProfile from '../../components/organisms/profile/NavProfile'
import SectionUserInfo from '../../components/organisms/profile/SectionUserInfo'
import RecordUser from '../../components/molecules/profile/RecordUser'
import BtonChange from '../../components/molecules/profile/BtonChange'

function Plans() {
  return (
    <>
      <Head>
        <title>Perfil</title>
      </Head>

      <header>
        <NavProfile />
      </header>
      <section>
        <SectionUserInfo />
      </section>
      <section>
        <RecordUser />
      </section>
      <BtonChange />
    </>
  )
}
export default Plans
