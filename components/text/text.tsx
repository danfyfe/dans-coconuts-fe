type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

const Paragraph: React.FC<ParagraphProps> = ({ children, ...props }) => (
  <p {...props}>{children}</p>
);

export default Paragraph;