import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const formatUserName = (userName) => `@${userName}`

export default function App() {
  return (
    <section className="App">
      <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="midudev" name="Miguel Ángel Durán" />
      <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="pheralb" name="Pablo Hernandez" />
      <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="elonmusk" name="Elon Musk" />
      <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="vxnder" name="Vanderhart" />
    </section>
  )
}
