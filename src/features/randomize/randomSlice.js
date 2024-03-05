import { createSlice } from '@reduxjs/toolkit'

const quotes = [
    {
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
      },
      {
        "quote": "In three words I can sum up everything I've learned about life: it goes on.",
        "author": "Robert Frost"
      },
      {
        "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author": "Nelson Mandela"
      },
      {
        "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt"
      },
      {
        "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "author": "Ralph Waldo Emerson"
      },
      {
        "quote": "Life is what happens when you're busy making other plans.",
        "author": "Allen Sanders"
      },
      {
        "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "author": "Martin Luther King Jr."
      },
      {
        "quote": "The purpose of our lives is to be happy.",
        "author": "Dalai Lama"
      },
      {
        "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill"
      },
      {
        "quote": "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        "author": "Brian Tracy"
      },
      {
        "quote": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        "author": "Ralph Waldo Emerson"
      },
      {
        "quote": "The only thing we have to fear is fear itself.",
        "author": "Franklin D. Roosevelt"
      },
      {
        "quote": "Success is not in what you have, but who you are.",
        "author": "Bo Bennett"
      },
      {
        "quote": "The best way to predict the future is to create it.",
        "author": "Peter Drucker"
      },
      {
        "quote": "You miss 100% of the shots you don't take.",
        "author": "Wayne Gretzky"
      },
      {
        "quote": "The only person you are destined to become is the person you decide to be.",
        "author": "Ralph Waldo Emerson"
      },
      {
        "quote": "The only impossible journey is the one you never begin.",
        "author": "Tony Robbins"
      },
      {
        "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "author": "Albert Einstein"
      },
      {
        "quote": "It does not matter how slowly you go as long as you do not stop.",
        "author": "Confucius"
      },
      {
        "quote": "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
        "author": "Dr. Seuss"
      }
  ];

const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
};

export const randomSlice = createSlice({
  name: 'random',
  initialState: {
    currentQuote: getRandomQuote(),
  },
  reducers: {
    randomQuote: (state) => {
        state.currentQuote = getRandomQuote();
    },
  },
})

export const {randomQuote} = randomSlice.actions
export default randomSlice.reducer