db = db.getSiblingDB('admin');
db.auth("root", "hello");

db = db.getSiblingDB('vevBackendTest');
db.createUser({
'user': "dbUser",
'pwd': "dbPwd",
'roles': [{
    'role': 'dbOwner',
    'db': 'vevBackendTest'}]});

db.createCollection('chargestations');
db.getCollection('chargestations').drop();
db.getCollection('chargestations').createIndex({ 
  "name": 1, 'model': 1, 'brand': 1 
}, { unique: true });
db.getCollection('chargestations').insert({
  name: 'Chargepoint 1, Bollard Mount Double Port',
  brand: 'ChargePoint',
  model: 'CT4021',
  inUse: false,
  power: 5
});console.log('coucou');

db.getCollection('chargestations').insert({
  name: 'Chargepoint 2, Bollard Mount Double Port',
  brand: 'ChargePoint',
  model: 'CT4021',
  inUse: false,
  power: 22
});