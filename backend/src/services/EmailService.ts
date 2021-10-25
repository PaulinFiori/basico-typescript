interface ImailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment ?: string[];
}

interface IMessageDTO {
    to: ImailTo,
    message: IMailMessage
}

interface IEmailService {
    sendMail(resquest: IMessageDTO): void;
}

// Data Transfer Object (DDO)
class EmailService implements IEmailService {
    sendMail({to, message}: IMessageDTO) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService;