import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { pool } from './connect.js';

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get('/bodyguard/profile/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await pool.query('SELECT * FROM tbl_bodyguard WHERE id = $1', [id]);

        if (result.rows.length === 0) {
            res.status(404).send({
                message: 'Bodyguard profile not found.',
                status: false
            });
        } else {
            res.send({ result: result.rows[0] });
        }
    } catch (err) {
        console.error('Database query failed:', err);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

app.put('/bodyguard/profile', async (req, res) => {
    const { id, userid, phone, address, experience, gender, dateofbirth, hiredate, education, salary, deleted } = req.body;

    const sqlString = `
        UPDATE tbl_bodyguard
        SET userid = $1, phone = $2, address = $3, experience = $4, gender = $5, dateofbirth = $6, hiredate = $7, education = $8, salary = $9, deleted = $10
        WHERE id = $11
    `;

    try {
        const result = await pool.query(sqlString, [userid, phone, address, experience, gender, dateofbirth, hiredate, education, salary, deleted, id]);

        if (result.rowCount === 0) {
            res.status(404).send({
                message: 'Bodyguard profile not found.',
                status: false
            });
        } else {
            res.send({ message: 'Update successful', status: true });
        }
    } catch (err) {
        console.error('Database update failed:', err.message);
        res.status(500).send('Database update failed');
    }
});

app.post('/bodyguard/request/dayoff', async(req, res) => {
    const { guardid, timefrom, approverid, reasons, timeto } = req.body;

    const isapprove = req.body.isapprove || 'Pending';
    const deleted = req.body.deleted !== undefined ? req.body.deleted : false;

    try {
        const query = `
            INSERT INTO tbl_dayoff (guardid, timefrom, isapproved, approverid, deleted, reasons, timeto)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id;
        `;
        
        const values = [guardid, timefrom, isapprove, approverid, deleted, reasons, timeto];
        
        const result = await pool.query(query, values);

        const newId = result.rows[0].id;
        res.status(201).json({ id: newId });
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
