export default function Text({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
}
