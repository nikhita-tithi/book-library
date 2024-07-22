import { app } from './app';

const port = 3080;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

