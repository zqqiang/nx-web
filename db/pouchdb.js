import PouchDB from 'pouchdb'

const DB = new PouchDB('http://localhost:5984/nxmanager')

export default DB