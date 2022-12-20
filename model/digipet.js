import { NumberDecrementStepper } from '@chakra-ui/react';
import { Schema, model, models } from 'mongoose';

//TODO finish this
const DigiPetSchema = new Schema({
  name: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  //factory stats
  digimonData: {
    type: Object
  },
  //unique stats
  careMistake: {
    type: Number,
  },
  overfeed: {
    type: Number,
  },
  winPercentage: {
    type: Number,
  },
  effort: {
    type: Number
  },
  battles: {
    type: Number,
  },
  evoLine: [{
    type: String
  }],
  birthday: {
    type: Date
  }
});

const User = models.DigiPet || model( 'User', DigiPetSchema );

export default DigiPet;