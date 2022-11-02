import { CardContainer } from './components/CardContainer/CardContainer';
import { CardInfo } from "./interfaces/interface"
import { FaPlusCircle } from 'react-icons/fa';

const { v4: uuidv4 } = require('uuid');

const cardInfo: CardInfo[] = [
  {
    id: uuidv4(),
    cardTitle: 'To Do',
    completedState: "todo",
    tasks:
      [{
        taskId: uuidv4(),
        taskName: 'Appasdasdasdasdasdasdasdasdas_1',
      },
      {
        taskId: uuidv4(),
        taskName: 'App_2',
      }]
  },
  {
    id: uuidv4(),
    cardTitle: 'Doing',
    completedState: "doing",
    tasks:
      [{
        taskId: uuidv4(),
        taskName: 'Appasdasdasdasdasdasdasdasdas_1',
      },
      {
        taskId: uuidv4(),
        taskName: 'App_2',
      }]
  },
  {
    id: uuidv4(),
    cardTitle: 'In review',
    completedState: "review",
    tasks:
      [{
        taskId: uuidv4(),
        taskName: 'Appasdasdasdasdasdasdasdasdas_1',
      },
      {
        taskId: uuidv4(),
        taskName: 'Appasdasdasdasdasdasdasdasdas_2',
      },
      {
        taskId: uuidv4(),
        taskName: 'Appasdasdasdasdasdasdasdasdas_3',
      }]
  },
  {
    id: uuidv4(),
    cardTitle: 'Done',
    completedState: "done",
    // tasks: ['App_5', 'App_6'],
    tasks:
      [{
        taskId: uuidv4(),
        taskName: 'Appasdasdasdasdasdasdasdasdas_1',
      },
      {
        taskId: uuidv4(),
        taskName: 'Appasdasdasdasdasdasdasdasdas_2',
      },
      {
        taskId: uuidv4(),
        taskName: 'Appasdasdasdasdasdasdasdasdas_3',
      }]
  }]

export default function App() {
  return (
    <div className="App">
      <h1>REACT TODO APP</h1>
      <main className='cardContainer'>
        {
          cardInfo.map(({ id, cardTitle, completedState, tasks }: any) => {
            return <CardContainer key={id} cardBody={{ cardTitle, completedState, tasks }} />
          })
        }
        <section id="add-card">
          <FaPlusCircle />
        </section>
      </main>
    </div>
  );
}
