import dbConnect from '../../../lib/mongooseConnect';
import DigiPet from '../../../model/digipet';

import { perfect } from '../../../assets/perfect';

export default async function handler( req, res ) {
  try {
    if( req.method === 'PUT' ) {
      await dbConnect();

      const digipet = await DigiPet.findById( req.body.digimonId );
      let evoList = digipet.digimonData.nextStage;
      let perfectEvo = Math.floor( Math.random() * evoList.length);

      let found = perfect.find( digimon => digimon.species = evoList[perfectEvo] );
      digipet.digimonData = found;

      digipet.save();

      return res.status( 200 ).json({ message: 'perfect evo complete' });
    }
    else {
      return res.status( 500 ).json({
        message: '/api/post/create only handles PUT requests',
      });
    }
  }
  catch( error ) {
    console.log( error );
    res.status( 500 ).json({
      message: 'error in /api/digipet/perfectEvo',
      error
    });
  }
};