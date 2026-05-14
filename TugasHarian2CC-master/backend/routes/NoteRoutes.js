import express from "express";

import { 
    getNotes, 
    getNotesbyId,
    createNotes,
    updateNotes,
    deleteNotes
} from "../controllers/NoteController.js";

const router = express.Router();

router.get('/notes',getNotes);
router.get('/notes/:id',getNotesbyId);
router.post('/notes',createNotes);
router.patch('/notes/:id',updateNotes);
router.delete('/notes/:id',deleteNotes);

export default router;