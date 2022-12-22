import dbConnect from '../../../lib/mongooseConnect';
import DigiPet from '../../../model/digipet';

import { ultimate } from '../../../assets/ultimate';

export default async function handler( req, res ) {
  try {
    if( req.method === 'DELETE' ) {
      await dbConnect();

      const digipet = await DigiPet.deleteOne({ _id: req.body.digimonId });

      return res.status( 200 ).json({ message: 'delete complete' });
    }
    else {
      return res.status( 500 ).json({
        message: '/api/post/create only handles DELETE requests',
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