import React from 'react'
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import ModeSelect from './components/ModeSelect';
import AppBar from '@mui/material/AppBar';

function BoardBar() {
  return (
      <Box sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
        Board Bar
      </Box>
  )
}

export default BoardBar