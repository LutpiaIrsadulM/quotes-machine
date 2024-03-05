// ========= | Bootstrap | ==========
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
// =========== | ICON | ==============
import { UilTwitter } from '@iconscout/react-unicons'

// ======== | Data | =========
import { useSelector, useDispatch } from 'react-redux'
import { randomQuote } from '../features/randomize/randomSlice';

function CardComponent() {
  const quotes = useSelector((state) => state.random.currentQuote)
  const dispatch = useDispatch()

  return (
    <Card className="text-center" id="quote-box" style={{ width: '50rem'}}>
      <Card.Header>Quotes Machine</Card.Header>
      <Card.Body>
      <blockquote className="blockquote mb-0">
          <p id="text">{quotes.quote}</p>
          <footer className="blockquote-footer" id="author">
            {quotes.author}
          </footer>
        </blockquote>
      </Card.Body>
      <Card.Footer className="text-muted">
          <Stack direction="horizontal" gap={3}>
            <a href="twitter.com/intent/tweet" target='_blank' className='p-2 btn btn-primary' id="tweet-quote">
              <UilTwitter size="25"></UilTwitter>
            </a>
            {/* <Button className="p-2" variant="primary">Go somewhere</Button> */}
            <Button className="p-2 ms-auto" variant="primary" id="new-quote" onClick={() => dispatch(randomQuote())}>Go somewhere</Button>
          </Stack>
      </Card.Footer>
    </Card>
  );
}

export default CardComponent;