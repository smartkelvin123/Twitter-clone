export type TweetProps = {
  tweet: {
    user: {
      name: string;
      image?: string;
      username: string;
      verified?: boolean | null;
      numberOfComment?: number;
      nuberOfRetweet?: number;
      numberOfLikes?: number;
      id: string;
      impression?: 500;
    };
    content: string;
  };
};
