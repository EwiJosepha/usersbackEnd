const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.get("/api", ((req, res)=>{
  res.json({"users": ["userOne", 'userTwo', 'userThree']})
}))

app.listen(PORT, ()=>{
  console.log("server started on port 5000");
})