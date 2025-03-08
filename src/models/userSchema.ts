import mongoose, { Schema } from 'mongoose';
import type { User } from '@/states/states';

const userSchema = new Schema<User>({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    }
}, {
    timestamps: true
});

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;
