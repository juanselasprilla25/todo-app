import { CardContainer } from './components/CardContainer/CardContainer';
import { CardInfo } from "./interfaces/interface"

const { v4: uuidv4 } = require('uuid');

const cardInfo: CardInfo[] = [
  {
    id: uuidv4(),
    cardTitle: 'To Do',
    completedState: "todo",
    tasks: ['Appasdasdasdasdasdasdasdasdas_1', 'App_2'],
  },
  {
    id: uuidv4(),
    cardTitle: 'Doing',
    completedState: "doing",
    tasks: ['App_3', 'Appasdasdasdasdasdasdasdasdas_4'],
  },
  {
    id: uuidv4(),
    cardTitle: 'Done',
    completedState: "done",
    tasks: ['App_5', 'App_6'],
  }]

export default function App() {
  return (
    <div className="App">
      <h1>REACT TODO APP</h1>
      <section className='cardContainer'>
        {
          cardInfo.map(({ id, cardTitle, completedState, tasks }: any) => {
            return <CardContainer key={id + uuidv4()} cardBody={{ cardTitle, completedState, tasks }} />
          })
        }
      </section>
    </div>
  );
}
