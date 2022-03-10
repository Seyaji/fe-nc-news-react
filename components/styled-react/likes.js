import React from 'react';
import styled, { css } from 'styled-components';
import Heart from '../../src/images/heart.svg';
import AltText from '../styled/alt-text';
import { patchVotes } from '../../api/api';
import { useEffect, useState } from 'react';

const HeartLike = styled(Heart)`
   height: 15px;
   fill: ${( props) => props.liked ? props.theme.likes : props.theme.color};

   & :hover {
      fill: ${({ theme }) => theme.likes};
   }
`;

const Like = ({ votes, id }) => {
   console.log(id, votes)
   const [likes, setLikes] = useState(votes);
   const [liked, setLiked] = useState(false);

   useEffect(() => {
      setLikes((likes) => likes + (liked ? 1 : -1));
   }, [liked]);

   useEffect(() => {
      patchVotes({ id: id, inc_votes: (liked ? 1 : -1) });
   }, [liked]);

   const handleClick = (event) => {;
      setLiked(!liked)
   };

   return (
      <AltText>
         <HeartLike onClick={handleClick} liked={liked} /> {votes} likes
      </AltText>
   );
};

export default Like;
