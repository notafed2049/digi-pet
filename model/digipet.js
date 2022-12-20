import { Schema, model, models } from 'mongoose';

//TODO finish this
const DigiPetSchema = new Schema({
  name: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  careMistake: {
    type: Number,
    required: true
  },
  overfeed: {
    type: Number,
    required: true
  },
  winPercentage: {
    type: Number,
    required: true
  },
  battles: {
    type: Number,
    required: true
  }
});

const User = models.DigiPet || model( 'User', DigiPetSchema );

export default DigiPet;