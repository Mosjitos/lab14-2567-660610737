import React from 'react'
import { Title, Text, Divider, Rating, Group,  } from '@mantine/core'
import { CommentReviewProps } from '@lib/types'

export default function CommentReview({name, rating, review}: CommentReviewProps) {
  return (
    <div >
        <Divider  mb={"sm"}/>
        <Group justify="center">
            <Title order={4} >{name}</Title>
            <Rating defaultValue={rating} />
        </Group>
        <Group justify="center">
            <Text size="sm"  mb={"sm"} c={"gray"}>{review}</Text>
        </Group>
        
    </div>

  )
}
