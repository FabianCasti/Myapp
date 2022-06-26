import Button from "./Button";

const Card = ({
  quotes, 
  colors, 
  color,
  setColor,
  quoteScreen,
  setQuoteScreen
}) => {

  const { quote, author } = quoteScreen;

  return (
    <div className="card">

      <div className="cardinfo">
        <div className="cardicon">
          <ion-icon name="chatbox-ellipses-outline" style={{ color: color}}></ion-icon>
        </div>

        <div className="cardtext" style={{ color: color}}>
          <q className="cardquote">{quote}</q>
          <cite className="cardauthor">&mdash; {author}</cite>
        </div>

        <Button 
          setQuoteScreen = { setQuoteScreen }
          color = { color }
          setColor = { setColor }
          colors = { colors }
          quotes = { quotes}
        />

      </div>

    </div>
  )
}

export default Card