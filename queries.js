import promise from 'bluebird'
import postgresPromise from 'pg-promise'

let options = {
    promiseLib: promise
}

const pgp = postgresPromise(options)
const connectionString = 'postgres://localhost:5432/test'
const db = pgp(connectionString)

/////Queries/////

const getAllCatonies = (req, res, next) => {
    db.any('select * from catonies')
        .then((data) => {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL catonies'
                })
        })
        .catch((error) => next(error))
}

export const {
    getAllCatonies: getAllCatonies
}
