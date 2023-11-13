export interface StoryCardProp {
  imgUrl: string;
  title: string;
}
export interface PostCardProps {
  imgUrl: string;
  description: string;
}
export interface EventCardProps {
  imgUrl: string;
  title?: string;
  description?: string;
}
export interface Variant {
  visible: {
    opacity: number;
    y: number;
  };
  hidden: {
    opacity: number;
    y: number;
  };
  transition: {
    duration: number;
  };
}
