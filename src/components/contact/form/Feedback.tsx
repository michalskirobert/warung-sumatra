interface Props {
  message?: string;
}

export const Feedback = ({ message }: Props) => {
  if (!message) return null;

  return (
    <div className="text-sm text-red-800 mt-3 ml-2">
      <p>{message}</p>
    </div>
  );
};
