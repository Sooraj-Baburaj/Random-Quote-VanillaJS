let quote = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('btn');
let body = document.getElementById('body');

let quotes = [
    {quote : "Life is either a great adventure or nothing." , author: "Helen Keller"},
    {quote : "All you need in this life is ignorance and confidence; then success is sure." , author: "Mark Twain"},
    {quote : "I have very strong feelings about how you lead your life. You always look ahead, you never look back." , author: "Ann Richards"},
    {quote : "All your life, you will be faced with a choice. You can choose love or hate…I choose love." , author: "Johnny Cash"},
    {quote : "I don't go by the rule book…I lead from the heart, not the head." , author: "Princess Diana"},
    {quote : "The time is always right to do what is right." , author: "Martin Luther King Jr"},
    {quote : "The best thing to hold onto in life is each other" , author: "Audrey Hepburn"}
]
let colors = [
    '#550686',
    '#32B8CB',
    '#01689C',
    '#00AD6F',
    '#6C9EFC',
    '#300338',
    '#01689C'
]

let counter = 0 ;

ChangeQuote = () => {
    quote.style.opacity = '0';
    author.style.opacity = '0';

    setTimeout(() => {
     quote.innerHTML = quotes[counter].quote;
    author.innerHTML = quotes[counter].author;

    let currColor = colors[counter];

    quote.style.color = currColor;
    quote.style.opacity = '1';
    author.style.opacity = '1';
    author.style.color = currColor;
    btn.style.background = currColor;
    body.style.background = currColor;

    if(counter<6) {
    counter++
    }else{
        counter = 0
    }
},500)}