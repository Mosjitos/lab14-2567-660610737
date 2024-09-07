"use client";
import { Container, Text, Title, Group, Pagination } from "@mantine/core";
import Footer from "@components/Footer";
import YourRating from "@components/YourRating";
import YourReview from "@components/YourReview";
import CommentReview from "@components/CommentReview";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt={12}>Your rating</Title>
      <YourRating/>
      <YourReview/>
      <CommentReview name="Elon Musk" rating={5} review="Best pizza in this world. I give you X score." />
      <CommentReview name="Mark Zuck" rating={4} review="My favourite part is pepperoni" />
      <Group justify="center">
        <Pagination total={20} siblings={1} defaultValue={1} color="orange"/>
      </Group>
      <Footer
            year="2024"
            fullName="Kamolrat Saeboon"
            studentId="660610737"
          />
    </Container>
  );
}
