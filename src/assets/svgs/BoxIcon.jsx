export default function BoxIcon({ className, isActive }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11 2.75L18.3334 6.875V15.125L11 19.25L3.66669 15.125V6.875L11 2.75"
        stroke={isActive ? "#23272E" : "#8B909A"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 2.75L18.3334 6.875V15.125L11 19.25L3.66669 15.125V6.875L11 2.75"
        stroke={isActive ? "#23272E" : "#8B909A"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11L18.3333 6.875"
        stroke={isActive ? "#23272E" : "#8B909A"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11L18.3333 6.875"
        stroke={isActive ? "#23272E" : "#8B909A"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11V19.25"
        stroke={isActive ? "#23272E" : "#8B909A"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11V19.25"
        stroke={isActive ? "#23272E" : "#8B909A"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11L3.66669 6.875"
        stroke={isActive ? "#23272E" : "#8B909A"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11L3.66669 6.875"
        stroke={isActive ? "#23272E" : "#8B909A"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
