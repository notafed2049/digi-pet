import dbConnect from '../../../lib/mongooseConnect';
import DigiPet from '../../../model/digipet';

export default async function handler( req, res ) {
  try {
    if( req.method === 'PUT' ) {
      await dbConnect();

      const digipet = await DigiPet.updateOne({
        _id: req.body.digimonId
      },
      {
        digimonData: req.body.digimonData
      });

      return res.status( 200 ).json({ message: 'baby1 evo complete' });
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
      message: 'error in /api/digipet/baby1Evo',
      error
    });
  }
};