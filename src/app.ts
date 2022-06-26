import 'dotenv/config';
import { AppDataSource } from './dataSource';
import app from './expressService';

function init() {
  AppDataSource.initialize();
  app.listen(process.env.PORT, () => {
    console.log('hello!');
  });
}

init();
