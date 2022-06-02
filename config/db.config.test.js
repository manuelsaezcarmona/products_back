const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const { dbConexion, getDataBaseName } = require('./db.config');

describe('Given a connection with moongoose', () => {
  let initialEnv;
  beforeAll(() => {
    initialEnv = process.env.NODE_ENV;
  });
  afterEach(() => {});
  afterAll(() => {
    process.env.NODE_ENV = initialEnv;
    mongoose.disconnect();
  });

  test('Then shoukd exists DBName for dev enviroment', async () => {
    const conection = await dbConexion();

    expect(conection.connections[0].name).toBe(process.env.DB_NAME_TEST);
    mongoose.disconnect();
  });
  test('Then return an error message if enviroment is wrong', async () => {
    const temporaryValueForCluster = process.env.DB_CLUSTER;
    process.env.DB_CLUSTER = 'algo';
    const conection = await dbConexion();
    expect(conection).toBe('mongodb+srv URI cannot have port number');
    process.env.DB_CLUSTER = temporaryValueForCluster;
  });
});

describe('Given the getDataBaseName function', () => {
  test('When enviroment is dev then return DB_NAME_DEV', () => {
    const dbname = getDataBaseName('dev');
    expect(dbname).toBe(process.env.DB_NAME_DEV);
  });
  test('When enviroment is production then return DB_NAME_PROD', () => {
    const dbname = getDataBaseName('production');
    expect(dbname).toBe(process.env.DB_NAME_PROD);
  });
  test('When enviroment is -something- then return DB_NAME_PROD', () => {
    const dbname = getDataBaseName('something');
    expect(dbname).toBe(process.env.DB_NAME_PROD);
  });
});
