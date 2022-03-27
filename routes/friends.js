import { Router } from 'express'
import * as friendsCtrl from '../controllers/friends.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
const router = Router()



/*---------- Public Routes ----------*/
// router.get('/:id', friendsCtrl.show)
router.get('/', friendsCtrl.index)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, friendsCtrl.create)
// router.put('/:id', checkAuth, puppiesCtrl.update)
router.delete('/:id', checkAuth, friendsCtrl.delete)



export {
  router
}
