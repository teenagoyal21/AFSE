const express = require("express");
const app = express();
app.use(express.json());

app.use("/api/users", require("./routes/userRoute"));
app.use("/api/blogs", require("./routes/blogRoute"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/like", require("./routes/likeRoute"));

app.listen(4545, ()=>{
    console.log("server started...");
})