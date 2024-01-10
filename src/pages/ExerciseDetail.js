import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearch = 'https://youtube-search-and-download.p.rapidapi.com/channel/about'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exercideVideosData = await fetchData(`${youtubeSearch}/search?q=${exerciseDetailData.name}`, youtubeOptions)
      setExerciseVideos(exercideVideosData)
    }
    fetchExerciseData()
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail