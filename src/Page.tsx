export interface IPage {
  title: String;
  text: String;
}

export const Page = ({ title, text }: IPage) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};
