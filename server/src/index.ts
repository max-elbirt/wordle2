import app  from './app'
const port = 3000;
app.listen(port, () => {
    console.log(`wordle server is listening on localhost:${port} 🚀`);
});