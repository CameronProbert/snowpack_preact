import {FunctionalComponent, h} from 'preact';
import {useState, useEffect} from 'preact/hooks'
import './App.scss';
import Card from './Card';

type AppProps = {}

const App: FunctionalComponent<AppProps> = ({}) => {
  const [nextCardNum, setNextCardNum] = useState<number>(1);
  const [cards, setCards] = useState<number[]>([])

  function handleNewCard() {
    setCards(cards => [...cards, nextCardNum]);
    setNextCardNum(nextCardNum + 1);
  }

  function filterCard(numToRemove: number) {
    setCards(cards => cards.filter(card => card !== numToRemove));
  }

  useEffect(() => {
    handleNewCard()
  }, []);

  return (
    <div className="App">
      {cards.map(cardNum =>
        <Card
          key={cardNum}
          title={`Test ${cardNum}`}
          detail="A Test Card"
          onClick={() => filterCard(cardNum)}/>)
      }
      <div className="card__base" style={{fontSize: '0.8em'}}>
        <Card title="Add Card" detail="" onClick={handleNewCard} />
      </div>
    </div>
  );
}

export default App;
