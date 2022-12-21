import { useSession, signOut } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth';

import dbConnect from '../lib/mongooseConnect';
import { authOptions } from './api/auth/[...nextauth]';

import { egg } from '../assets/egg';
import { baby } from "../assets/baby";
import { child } from '../assets/child';
import { adult } from "../assets/adult";
import { perfect } from "../assets/perfect";
import { ultimate } from "../assets/ultimate";

import { DigiPet } from '../components/DigiPet';
import { Train } from "../components/Train";
import { Fight } from "../components/Fight";
import { Sleep } from "../components/Sleep";

import {
  Flex,
  Button,
  Text
 } from "@chakra-ui/react"

export default function Home() {
  const { data: session } = useSession();

  console.log({ session });

  if( session ) {
    return (
      <Flex
        direction='column'
      >
        <DigiPet pet={ ultimate[0] } />
        <Text>
          Signed in as { session.user.email }
        </Text>
        <Button
          onClick={ () => signOut({ callbackUrl: '/login' }) }
        >
          Sign Out
        </Button>
      </Flex>
    )
  }

  // return (
  //   <Flex
  //     direction='column'
  //     justifyContent='center'
  //     alignItems='center'
  //   >
  //     <Text>Not Signed In</Text>
  //     <Button
  //       onClick={ () => signIn() }
  //     >
  //       Sign In
  //     </Button>
  //   </Flex>
  // )
}

export async function getServerSideProps( context ) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  if( session ) {
    try {
      await dbConnect();

      // const currentUser = await User.findById( session.user.id )
      //   .populate({ path: 'friends', model: User });
      
      // const posts = await Post.find().sort({ date: -1 })
      // .populate({ path: 'user', model: User });
    
      // const comments = await Comment.find().sort({ date: -1 })
      //   .populate({ path: 'user', model: User });
  
      return {
        props: {
          // currentUser: JSON.parse( JSON.stringify( currentUser )),
          // posts: JSON.parse( JSON.stringify( posts )),
          // comments: JSON.parse( JSON.stringify( comments )),
        },
      }
    }
    catch( error ) {
      console.log( error );
      return {
        notFound: true,
      }
    }
  }
  else {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
};