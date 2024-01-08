import React, {useState, useEffect} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'

const SearchExercises = () => {
    const [search, setsearch] = useState('')

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '28f14c3ef2mshb10917dbd794c3fp15f6a7jsn05898bbf1219',
    //         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    //     }
    // };

    const handleSearch = async () => {
        // if(search){
        //     const exercisesData = await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList/', options)
        //     const result = await exercisesData.text();
	    //     console.log(result);
            
        // }
        const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
        <Typography fontWeight='700' sx={{fontSize: {lg:'44px', xs: '30px'}}} mb='50px' textAlign='center'>
            Awesome Exercises You <br /> Should Know
        </Typography>
        <Box position='relative' mb='72px'>
            <TextField
                sx={{input:{fontWeight:'700', border:'none', borderRadius:'4px'}, width: {lg:'800px', xs: '350px'}, backgroundColor: '#FFF', borderRadius: '40px'}}
                height='76px'
                value={search} onChange={(e) => {setsearch(e.target.value.toLowerCase())}}
                placeholder='Search Exercises'
                type='text'
            />
            <Button className='search-btn' 
                sx={{
                    bgcolor:'#ff2625', color:'#FFF', 
                    textTransform:'none',
                    width: {lg: '170px', xs: '80px'},
                    fontSize: {lg:'20px', xs: '14px'},
                    height:'56px',
                    positon:'absolute',
                    right:'0'
                }}
                onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
    </Stack>
  )
}

export default SearchExercises