import {Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [ 
    {name: 'Paulo', email: 'paulofiori34@gmail.com'}
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();
        emailService.sendMail({to: {name: 'Paulo', email: 'paulofiori34@gmail.com'}, message: {subject: 'Bem-vindo', body: "Seja bem vindo ao sistema."}});

        return res.send();
    },
};