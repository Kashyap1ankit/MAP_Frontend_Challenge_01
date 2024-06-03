export default function Image({
  link,
  className,
}: {
  link: string;
  className?: string;
}) {
  return <img src={link} alt="" className={className} />;
}
