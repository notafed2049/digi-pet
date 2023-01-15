import dbConnect from '../../../lib/mongooseConnect';
import DigiPet from '../../../model/digipet';

import { ultimate } from '../../../assets/ultimate';

export default async function handler( req, res ) {
  try {
    if( req.method === 'PUT' ) {
      await dbConnect();

      const digipet = await DigiPet.findById( req.body.digimonId );
      const randomNum = Math.floor( Math.random() * digipet.digimonData.nextStage.length );
      const evo = ultimate.find(( digimon ) => digimon.id === digipet.digimonData.nextStage[ randomNum ] );
      digipet.digimonData = evo;
      digipet.evoLine.push( evo.species );

      digipet.save();

      return res.status( 200 ).json({ message: 'ultimate evo complete' });
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
      message: 'error in /api/digipet/ultimateEvo',
      error
    });
  }
};