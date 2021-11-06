import mongoose, { Schema } from 'mongoose'

interface UserI{
  _id?: Schema.Types.ObjectId,
  name: string,
  password: string
}

const userSchema = new Schema<UserI>({
  _id: {
    type: Schema.Types.ObjectId
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true })

export const User = mongoose.model('User', userSchema)