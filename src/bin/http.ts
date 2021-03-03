import app from '../app';

const port = process.env.PORT || 4000;

app.listen(port, ():any => console.log(`🛒 Shoppa server run on port: ${port}`));
