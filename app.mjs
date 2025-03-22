import express from "express"
import router from "./src/routes/index.mjs";

const PORT = 3000;
const app = express();

app.set('view engine', 'ejs')
app.set('views', './src/views')
console.log("Views path:", app.get('views'));
app.use(router)

app.listen(PORT,() => {
    console.log(`The server is online on ${PORT} port`);
}); 
