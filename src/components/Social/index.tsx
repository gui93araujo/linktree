interface SocialProps {
  url: string;
  children: React.ReactNode;
}

export function Social({ url, children }: SocialProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
