import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send("Hello to full stack")
})

// Get a list of 5 Jokes

app.get('/api/jokes',(req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: "A good joke is even a bad joke when people not laugh"
        },
        {
            id: 2,
            title: 'B joke',
            content: "A bad joke is even a bad joke when people not laugh"
        },
        {
            id: 3,
            title: 'C joke',
            content: "A very good joke is even a bad joke when people not laugh"
        },
        {
            id: 4,
            title: 'C joke',
            content: "A joke is even a bad joke when people not laugh"
        },
        {
            id: 5,
            title: 'D joke',
            content: "A bad joke is even a good joke when people not laugh"
        }
    ];
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
})