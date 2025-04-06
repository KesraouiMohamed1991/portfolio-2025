import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});

let Message;

if (mongoose.models.Message) {
    Message = mongoose.model('Message'); // Si le modèle existe déjà, on l'utilise
} else {
    Message = mongoose.model('Message', MessageSchema); // Sinon, on le crée
}

export default Message;
