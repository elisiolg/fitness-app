import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';
import backImage from '../assets/icons/back.png';
import cardioImage from '../assets/icons/cardio.png';
import chestImage from '../assets/icons/chest.png';
import lowerArmsImage from '../assets/icons/lowerarms.png';
import lowerLegsImage from '../assets/icons/lowerlegs.png';
import neckImage from '../assets/icons/neck.png';
import shoulderImage from '../assets/icons/shoulder.png';
import upperArmsImage from '../assets/icons/upperarms.png';
import upperLegsImage from '../assets/icons/upperlegs.png';
import waistImage from '../assets/icons/waist.png';

const imageSources = [
  Icon,
  backImage,
  cardioImage,
  chestImage,
  lowerArmsImage,
  lowerLegsImage,
  neckImage,
  shoulderImage,
  upperArmsImage,
  upperLegsImage,
  waistImage,
];

const BodyPart = ({ item, setBodyPart, bodyPart, images }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >

    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;