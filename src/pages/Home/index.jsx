import './styles.css'
import { Card } from '../../components/Card';

export function Home() {
  return (
    <>
    <div className='container'>
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>
      <Card name="Isla" time="10:20:09" />
      <Card name="Zoe" time="20:34:24" />
      <Card name="Loro" time="21:05:19" />
    </div>
    </>
  )
}
