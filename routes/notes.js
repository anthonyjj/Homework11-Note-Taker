const pageRouter = require ('express').Router();
const path = require ('path');

const premadeTasks = [
    "Note 1: Call bank on Firday",
    "Note 2: Reschedule delivery",
    "Note 3: Finish Payroll",
    "Note 4: Check in with clients",
    "Note 5: Client lunch on Thursday",
    "Note 6: Make dinner",
];

pageRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, `../public/notes.html`));
});

module.exports = { pageRouter };