import CommentReview from "@components/CommentReview";

export interface TermsAndConditionsProps {
  opened: boolean;
  close: () => void;
}

export interface footerProps {
  year: string;
  fullName: string;
  studentId: string
};

export interface RatingReviewProps {
  name: string;
  rating: number;
  review: string
};
export interface CommentReviewProps{
  name: string;
  rating: number;
  review: string;
}