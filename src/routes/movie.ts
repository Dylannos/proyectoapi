import  express  from 'express';
import * as movieServices from '../services/movieServices'
import toNewMovieEntry from '../utils';

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(movieServices.getEntriesWithoutSensitiveInfo())

})

router.get('/:id', (req, res) => {
    const movie = movieServices.findById(Number(req.params.id))
    
    return (movie !== null)
    ? res.send(movie)
    :res.sendStatus(404)

})

router.post('/', (req, res) => {
    try {

     const newMovieEntry = toNewMovieEntry (req.body)
     
     const addedMovieEntry = movieServices.addMovie(newMovieEntry)


     res.json(addedMovieEntry)
    } catch (err){
        res.status(400).send(err)
    }
    })
export default router