require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "yadavlalu5252",
    "id": 111700637,
    "node_id": "U_kgDOBqhqnQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/111700637?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/yadavlalu5252",
    "html_url": "https://github.com/yadavlalu5252",
    "followers_url": "https://api.github.com/users/yadavlalu5252/followers",
    "following_url": "https://api.github.com/users/yadavlalu5252/following{/other_user}",
    "gists_url": "https://api.github.com/users/yadavlalu5252/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/yadavlalu5252/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/yadavlalu5252/subscriptions",
    "organizations_url": "https://api.github.com/users/yadavlalu5252/orgs",
    "repos_url": "https://api.github.com/users/yadavlalu5252/repos",
    "events_url": "https://api.github.com/users/yadavlalu5252/events{/privacy}",
    "received_events_url": "https://api.github.com/users/yadavlalu5252/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Lalu Yadav",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "I'm a beginner in this field",
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2022-08-21T17:03:12Z",
    "updated_at": "2024-08-01T12:53:40Z"
  }
app.get('/', (req, res) => {
    res.send('Hello India!')
})

app.get('/twitter', (req, res) => {
    res.send('yadavlalu5252')
})
app.get('/login', (req, res) => {
    res.send('<h1>You are login to youtube as yadavlalu5252</h1>')
})
app.get('/instagram', (req, res) => {
    res.send('<h1>You are login to intagram as yadavlalu5252</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () =>{
    console.log(`Example app listening on ${port}`)
})