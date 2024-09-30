const quotes = [
    {
        text: "Believe in yourself and all that you are.",
        author: "Unknown",
        length: 41, // number of characters
        isInspirational: true
    },
    {
        text: "Success is not the key to happiness.",
        author: "Albert Schweitzer",
        length: 37,
        isInspirational: true
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        length: 69,
        isInspirational: true
    },
    {
        text: "Don’t watch the clock do what it does.",
        author: "Sam Levenson",
        length: 46,
        isInspirational: true
    },
    {
        text: "Your limitation—it's only your imagination.",
        author: "Unknown",
        length: 43,
        isInspirational: true
    },
    {
        text: "Dream it. Wish it. Do it.",
        author: "Unknown",
        length: 26,
        isInspirational: true
    },
    {
        text: "Success doesn’t just find you.",
        author: "Unknown",
        length: 31,
        isInspirational: true
    },
    {
        text: "The only way to achieve the impossible is to believe it is possible.",
        author: "Charles Kingsleigh",
        length: 74,
        isInspirational: true
    },
    {
        text: "Push yourself, because no one else is going to do it for you.",
        author: "Unknown",
        length: 66,
        isInspirational: true
    },
    {
        text: "Great things never come from comfort zones.",
        author: "Unknown",
        length: 43,
        isInspirational: true
    }
];

function randomMessageGen(){
    let randomNum= Math.floor(Math.random()*10);

    for(let i=0; i<quotes.length; i++){
        if(i=== randomNum){
            console.log(`${quotes[i].text} Author: ${quotes[i].author} Ispirational? ${quotes[i].isInspirational}`);
        }
    }

    
}

randomMessageGen();

