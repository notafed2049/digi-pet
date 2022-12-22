import dbConnect from '../../../lib/mongooseConnect';
import DigiPet from '../../../model/digipet';

import { baby2 } from '../../../assets/baby';

export default async function handler( req, res ) {
  try {
    if( req.method === 'PUT' ) {
      await dbConnect();

      const digipet = await DigiPet.findById( req.body.digimonId );
      let found = baby2.find( digimon => digimon.species = digipet.digimonData.nextStage );
      digipet.digimonData = found;

      digipet.save();

      return res.status( 200 ).json({ message: 'baby2 evo complete' });
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
      message: 'error in /api/digipet/baby2Evo',
      error
    });
  }
};