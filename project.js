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

    switch(randomNum){
        case 1: console.log(`${quotes[0].text} Author: ${quotes[0].author} Ispirational? ${quotes[0].isInspirational}`);
        break;
        case 2: console.log(`${quotes[1].text} Author: ${quotes[1].author} Ispirational? ${quotes[1].isInspirational}`);
        break;
        case 3: console.log(`${quotes[2].text} Author: ${quotes[2].author} Ispirational? ${quotes[2].isInspirational}`);
        break;
        case 4: console.log(`${quotes[3].text} Author: ${quotes[3].author} Ispirational? ${quotes[3].isInspirational}`);
        break;
        case 5: console.log(`${quotes[4].text} Author: ${quotes[4].author} Ispirational? ${quotes[4].isInspirational}`);
        break;
        case 6: console.log(`${quotes[5].text} Author: ${quotes[5].author} Ispirational? ${quotes[5].isInspirational}`);
        break;
        case 7: console.log(`${quotes[6].text} Author: ${quotes[6].author} Ispirational? ${quotes[6].isInspirational}`);
        break;
        case 8: console.log(`${quotes[7].text} Author: ${quotes[7].author} Ispirational? ${quotes[7].isInspirational}`);
        break;
        case 9: console.log(`${quotes[8].text} Author: ${quotes[8].author} Ispirational? ${quotes[8].isInspirational}`);
        break; 
        case 10: console.log(`${quotes[9].text} Author: ${quotes[9].author} Ispirational? ${quotes[9].isInspirational}`);
        break;
        default: console.log('There was an error');
        break;
    }
}

randomMessageGen();

