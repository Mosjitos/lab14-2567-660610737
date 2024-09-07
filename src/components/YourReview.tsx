import React from 'react'
import { Textarea, Button } from '@mantine/core';

export default function YourReview() {
  return (
    <div>
    <Textarea 
      radius="sm"
      label="Your review"
      minRows={3}
      autosize
      placeholder="Do you enjoy eating?"
      mb={"sm"}
    />
    <Button variant="filled" color="orange" mb="sm">Submit Review</Button>
    </div>

  )
}
