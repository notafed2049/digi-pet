import { Schema, model, models } from 'mongoose';

//TODO finish this
const DigiPetSchema = new Schema({
  name: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  //factory stats
  digimonData: { type: Object },
  //unique stats
  mistake: { type: Number },
  overFeed: { type: Number },
  effort: { type: Number },
  battles: { type: Number },
  battlesWon: { type: Number },
  evoLine: [{ type: String }],
  birthday: { type: Date }
});

const DigiPet = models.DigiPet || model( 'DigiPet', DigiPetSchema );

export default DigiPet;