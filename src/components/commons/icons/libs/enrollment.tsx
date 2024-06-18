export default function Enrollment({ width = 20, ...props }: Props) {
  return (
    <svg
      width={width}
      height={width}
      {...props}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 0C17.552 0 18 0.448 18 1V4.757L16 6.757V2H2V18H16V15.242L18 13.242V19C18 19.552 17.552 20 17 20H1C0.448 20 0 19.552 0 19V1C0 0.448 0.448 0 1 0H17ZM18.778 6.808L20.192 8.222L12.414 16L10.998 15.998L11 14.586L18.778 6.808ZM10 10V12H5V10H10ZM13 6V8H5V6H13Z" />
    </svg>
  );
}

type Props = {
  width?: any;
} & React.ComponentPropsWithRef<"svg">;
