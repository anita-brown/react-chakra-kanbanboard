import React from 'react'
import { ColumnType } from '../utils/enum'
import { AddIcon } from '@chakra-ui/icons'
import { Badge, Box, Heading, IconButton, Stack, useColorModeValue } from '@chakra-ui/react'

const ColumnColorScheme: Record<ColumnType, string> = {
    Todo: 'gray',
    'In Progress': 'blue',
    Blocked: 'red',
    Completed: 'green'
}

const Column = ({column}: {column: ColumnType}) => {
  return (
      <Box>
          <Heading>
              <Badge>
                  {column}
              </Badge>
          </Heading>
      
    </Box>
  )
}

export default Column
