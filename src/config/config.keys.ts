export enum Configuration {
  PORT = 'PORT',
  HOST = 'HOST',
  TYPE = 'TYPE',
  PORTDB = 'PORTDB',
  USERNAME = 'USERNAME',
  PASSWORD = 'PASSWORD',
  DATABASE = 'DATABASE',
  JWT_SECRET = 'JWT_SECRET',
  SYNCHRONIZE = 'SYNCHRONIZE',
  DROPSCHEMA =' DROPSCHEMA',
  ACCOUNT = 'ACCOUNT',
  PWS ='PWS',
  MAIL='MAIL',
}

export const environment = {
  appVersion: require('../../package.json').version,
  appDescription: require('../../package.json').description,
  appAuthor: require('../../package.json').author,

};
