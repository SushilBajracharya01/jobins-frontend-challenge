export default function ShoppingCart({ className, isActive }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse
        cx="5.50002"
        cy="17.4167"
        rx="1.83333"
        ry="1.83333"
        stroke={isActive ? "#23272E" : "#8B909A"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx="5.50002"
        cy="17.4167"
        rx="1.83333"
        ry="1.83333"
        stroke={isActive ? "#23272E" : "#8B909A"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx="15.5833"
        cy="17.4167"
        rx="1.83333"
        ry="1.83333"
        stroke={isActive ? "#23272E" : "#8B909A"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx="15.5833"
        cy="17.4167"
        rx="1.83333"
        ry="1.83333"
        stroke={isActive ? "#23272E" : "#8B909A"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5834 15.5833H5.50002V2.75H3.66669"
        stroke={isActive ? "#23272E" : "#8B909A"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5834 15.5833H5.50002V2.75H3.66669"
        stroke={isActive ? "#23272E" : "#8B909A"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 4.58337L18.3333 5.50004L17.4167 11.9167H5.5"
        stroke={isActive ? "#23272E" : "#8B909A"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 4.58337L18.3333 5.50004L17.4167 11.9167H5.5"
        stroke={isActive ? "#23272E" : "#8B909A"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
