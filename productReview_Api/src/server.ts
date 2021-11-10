import app from "./app";


const PORT = Number.parseInt(process.env.PORT as string)  || 3001;

app.listen(PORT, '0.0.0.0', () => {
    console.log('Run service security api');
});