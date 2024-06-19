import { convertWidth } from "@/utils/convert-width";

export default function EmployeeRounded({ width = 20, ...props }: ISvgProps) {
  const numericWidth = convertWidth(width);
  return (
    <svg
      width={numericWidth}
      height={numericWidth}
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM5.013 16.256C6.42855 17.3877 8.18768 18.0029 10 18C11.97 18 13.773 17.288 15.167 16.108C14.5157 15.4397 13.7371 14.9089 12.877 14.5468C12.017 14.1847 11.0931 13.9988 10.16 14C9.19259 13.9989 8.2355 14.1989 7.34947 14.5872C6.46343 14.9756 5.66778 15.5439 5.013 16.256ZM3.616 14.82C4.45645 13.9281 5.47067 13.2177 6.59614 12.7327C7.72161 12.2477 8.93448 11.9984 10.16 12C11.3417 11.9985 12.512 12.2304 13.6037 12.6824C14.6955 13.1344 15.6873 13.7976 16.522 14.634C17.3781 13.4291 17.8836 12.0106 17.9826 10.5359C18.0815 9.06119 17.77 7.58789 17.0825 6.27946C16.395 4.97102 15.3585 3.87862 14.088 3.12345C12.8174 2.36827 11.3625 1.97984 9.8846 2.00125C8.40672 2.02267 6.96366 2.45308 5.71552 3.24476C4.46738 4.03643 3.46296 5.1584 2.81369 6.4862C2.16442 7.814 1.89569 9.29571 2.03732 10.7669C2.17894 12.2382 2.72537 13.6404 3.616 14.82ZM10 11C8.93913 11 7.92172 10.5786 7.17157 9.82843C6.42143 9.07828 6 8.06087 6 7C6 5.93913 6.42143 4.92172 7.17157 4.17157C7.92172 3.42143 8.93913 3 10 3C11.0609 3 12.0783 3.42143 12.8284 4.17157C13.5786 4.92172 14 5.93913 14 7C14 8.06087 13.5786 9.07828 12.8284 9.82843C12.0783 10.5786 11.0609 11 10 11ZM10 9C10.5304 9 11.0391 8.78929 11.4142 8.41421C11.7893 8.03914 12 7.53043 12 7C12 6.46957 11.7893 5.96086 11.4142 5.58579C11.0391 5.21071 10.5304 5 10 5C9.46957 5 8.96086 5.21071 8.58579 5.58579C8.21071 5.96086 8 6.46957 8 7C8 7.53043 8.21071 8.03914 8.58579 8.41421C8.96086 8.78929 9.46957 9 10 9Z" />
    </svg>
  );
}
