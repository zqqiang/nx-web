import db from 'pouchdb'

const remoteCouch = 'http://user:pass@mname.example.com/todos';

const sync = () => {
    var opts = { live: true };
    db.replicate.to(remoteCouch, opts, syncError);
    db.replicate.from(remoteCouch, opts, syncError);
}

export default db
