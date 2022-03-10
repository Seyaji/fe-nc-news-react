import React from 'react';
import styled, { css } from 'styled-components';
import Heart from '../../src/images/heart.svg';
import AltText from '../styled/alt-text';
import { patchVotes } from '../../api/api';
import { useEffect, useState, useRef } from 'react';

const HeartLike = styled(Heart)`
   height: 15px;
   fill: ${( props) => props.liked ? props.theme.likes : props.theme.color};

   & :hover {
      fill: ${({ theme }) => theme.likes};
   }
`;

const Like = ({ votes, id }) => {

   console.log(id, votes)

   const [likes, setLikes] = useState(votes || 0);
   const [liked, setLiked] = useState(false);

   const mounted = useRef(false)

   useEffect(() => {
      if (mounted.current) {
         console.log(mounted.current)
         patchVotes({ id: id, inc_votes: (liked ? 1 : -1) }); 
      }
   }, [liked]);

   const handleClick = (event) => {;
      mounted.current = true;
      setLiked(!liked)
      setLikes((likes) => likes + (liked ? 1 : -1))
   };

   return (
      <AltText>
         <HeartLike onClick={handleClick} liked={liked} /> {votes} likes
      </AltText>
   );
};

export default Like;
