import Accueil from '@/components/Accueil'
import APropos from '@/components/APropos'
import Competences from '@/components/Competences'
import Realisations from '@/components/Realisations'
import Parcours from '@/components/Parcours'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Accueil />
      <APropos />
      <Competences />
      <Realisations />
      <Parcours />
      <Contact />
    </main>
  )
}