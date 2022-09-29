import express from 'express';
import initNotes from './repositories/init';
const PORT = process.env.PORT || 5000;
import notesRouter from './routes/api/notes';
import reportsRouter from './routes/api/reports';
const app = express();
app.use(express.json());
app.use('/api/notes/stats', reportsRouter);
app.use('/api/notes', notesRouter);
app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
});
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
});
initNotes();
