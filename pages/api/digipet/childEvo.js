import dbConnect from '../../../lib/mongooseConnect';
import DigiPet from '../../../model/digipet';

import { child } from '../../../assets/child';

export default async function handler( req, res ) {
  try {
    if( req.method === 'PUT' ) {
      await dbConnect();

      const digipet = await DigiPet.findById( req.body.digimonId );
      let found = child.find( digimon => digimon.species = digipet.digimonData.nextStage );
      digipet.digimonData = found;

      digipet.save();

      return res.status( 200 ).json({ message: 'child evo complete' });
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
      message: 'error in /api/digipet/childEvo',
      error
    });
  }
};