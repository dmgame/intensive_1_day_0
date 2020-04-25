const users = [
  {
    "_id": "5ea44b1a5bf45e77e449b6b2",
    "index": 0,
    "guid": "b6f58de9-e685-4c56-a16a-31778a415f0b",
    "isActive": false,
    "balance": "$2,864.66",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "brown",
    "name": "Meyer Mcpherson",
    "gender": "male",
    "company": "MANGLO",
    "email": "meyermcpherson@manglo.com",
    "phone": "+1 (980) 456-2334",
    "address": "545 Radde Place, Vernon, Northern Mariana Islands, 9747"
  },
  {
    "_id": "5ea44b1a1757308eae68e3fe",
    "index": 1,
    "guid": "58af029d-06b6-45b5-bcb4-ede2ed4abe75",
    "isActive": false,
    "balance": "$1,027.31",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "blue",
    "name": "Simpson Ross",
    "gender": "male",
    "company": "ZILLAR",
    "email": "simpsonross@zillar.com",
    "phone": "+1 (869) 536-2636",
    "address": "904 Bennet Court, Farmington, Illinois, 2091"
  },
  {
    "_id": "5ea44b1a083e72e85b1d5d2b",
    "index": 2,
    "guid": "96df9c5a-e633-4186-b5c3-5f679391f3ba",
    "isActive": true,
    "balance": "$1,372.59",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "eyeColor": "brown",
    "name": "Estela Ward",
    "gender": "female",
    "company": "SOFTMICRO",
    "email": "estelaward@softmicro.com",
    "phone": "+1 (996) 525-3686",
    "address": "327 Noll Street, Woodburn, California, 1180"
  },
  {
    "_id": "5ea44b1ac8f8d770f7843efd",
    "index": 3,
    "guid": "6ac16427-79a4-4b66-983e-ecd6d37cddce",
    "isActive": true,
    "balance": "$1,871.37",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "brown",
    "name": "Amparo Lawrence",
    "gender": "female",
    "company": "ORBAXTER",
    "email": "amparolawrence@orbaxter.com",
    "phone": "+1 (933) 445-2234",
    "address": "201 Tiffany Place, Cartwright, Maine, 2420"
  },
  {
    "_id": "5ea44b1a97f7afaca320f0e3",
    "index": 4,
    "guid": "35185bd7-8955-4401-9776-221fbc92e9e9",
    "isActive": false,
    "balance": "$3,332.33",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "brown",
    "name": "Kelli Richards",
    "gender": "female",
    "company": "DARWINIUM",
    "email": "kellirichards@darwinium.com",
    "phone": "+1 (997) 481-2917",
    "address": "103 Midwood Street, Hobucken, Vermont, 1660"
  },
  {
    "_id": "5ea44b1aeff006a0582ec0a2",
    "index": 5,
    "guid": "624e1181-f7d0-4ad6-9498-988ccec1c59d",
    "isActive": true,
    "balance": "$2,715.20",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "brown",
    "name": "Ortiz Mcknight",
    "gender": "male",
    "company": "QUILM",
    "email": "ortizmcknight@quilm.com",
    "phone": "+1 (892) 416-3697",
    "address": "509 Kingsland Avenue, Edinburg, Puerto Rico, 7249"
  }
]

function getUsers(query = null) {
  return users;
}

function getUser(id) {
  const user = users.find(u => u._id === id);

  return user;
}

function addNewUser(user) {
  const newUser = {
    ...user,
    _id: String(Math.random())
  };

  users.push(newUser);

  return newUser;
}

module.exports = {
  getUsers,
  getUser,
  addNewUser
}