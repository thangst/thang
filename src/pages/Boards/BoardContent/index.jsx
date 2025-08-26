import React from 'react'
import { Box } from '@mui/material'
import Container from '@mui/material/Container'
import AppBar from '../../components/AppBar'
import BoardBar from './BoardBar'

function BoardContent() {
  return (
    <Box sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: (theme) => `calc(100vh - ${theme.trello.boardBarHeight} - ${theme.trello.appBarHeight})`,
        display: 'flex',
        alignItems: 'center'
      }}>
        Board Content
      </Box>
  )
}

export default BoardContent