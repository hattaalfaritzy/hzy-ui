import { convertWidth } from "@/utils/convert-width";

export default function Employee({ width = 20, ...props }: ISvgProps) {
  const numericWidth = convertWidth(width);
  return (
    <svg
      width={numericWidth}
      height={numericWidth}
      {...props}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1.995C0 0.893 0.893 0 1.995 0H16.005C17.107 0 18 0.893 18 1.995V16.005C18 16.5341 17.7898 17.0415 17.4157 17.4157C17.0415 17.7898 16.5341 18 16.005 18H1.995C1.46589 18 0.958457 17.7898 0.584322 17.4157C0.210187 17.0415 0 16.5341 0 16.005V1.995ZM2 2V16H16V2H2ZM4.972 15.18C4.35698 14.9136 3.77036 14.586 3.221 14.202C3.85527 13.219 4.72596 12.4108 5.75339 11.8514C6.78082 11.292 7.93216 10.9993 9.102 11C11.502 11 13.619 12.207 14.88 14.047C14.3412 14.4456 13.7636 14.789 13.156 15.072C12.6929 14.43 12.0838 13.9073 11.3789 13.547C10.674 13.1868 9.8936 12.9993 9.102 13C7.387 13 5.872 13.864 4.972 15.18ZM9 10C8.54037 10 8.08525 9.90947 7.66061 9.73358C7.23597 9.55769 6.85013 9.29988 6.52513 8.97487C6.20012 8.64987 5.94231 8.26403 5.76642 7.83939C5.59053 7.41475 5.5 6.95963 5.5 6.5C5.5 6.04037 5.59053 5.58525 5.76642 5.16061C5.94231 4.73597 6.20012 4.35013 6.52513 4.02513C6.85013 3.70012 7.23597 3.44231 7.66061 3.26642C8.08525 3.09053 8.54037 3 9 3C9.92826 3 10.8185 3.36875 11.4749 4.02513C12.1313 4.6815 12.5 5.57174 12.5 6.5C12.5 7.42826 12.1313 8.3185 11.4749 8.97487C10.8185 9.63125 9.92826 10 9 10ZM9 8C9.39782 8 9.77936 7.84196 10.0607 7.56066C10.342 7.27936 10.5 6.89782 10.5 6.5C10.5 6.10218 10.342 5.72064 10.0607 5.43934C9.77936 5.15804 9.39782 5 9 5C8.60218 5 8.22064 5.15804 7.93934 5.43934C7.65804 5.72064 7.5 6.10218 7.5 6.5C7.5 6.89782 7.65804 7.27936 7.93934 7.56066C8.22064 7.84196 8.60218 8 9 8Z" />
    </svg>
  );
}
