import { Schema, model, models } from 'mongoose';

interface IUser {
    twitchId: string;
    username: string;
}

const userSchema = new Schema<IUser>({
    twitchId: { type: String, required: true },
    username: { type: String, required: true },
});

const User = models.User || model<IUser>('User', userSchema);

export default User;
