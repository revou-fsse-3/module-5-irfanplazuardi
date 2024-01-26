interface Props {
  label: string;
  className?: string;
  onclick?: () => void;
}

const Button = ({ label, className, onclick }: Props) => {
  return (
    <button className={className} onClick={onclick}>
      {label}
    </button>
  );
};

export default Button;
