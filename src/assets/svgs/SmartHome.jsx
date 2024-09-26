export default function SmartHome({ className, isActive }) {
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
        d="M17.4167 7.98416L12.5281 4.18183C11.6456 3.49522 10.4095 3.49522 9.52696 4.18183L4.63746 7.98416C4.042 8.44723 3.69386 9.15941 3.69421 9.91374V16.5137C3.69421 17.5263 4.51503 18.3471 5.52755 18.3471H16.5275C17.5401 18.3471 18.3609 17.5263 18.3609 16.5137V9.91374C18.3609 9.15933 18.0125 8.44708 17.4167 7.98416"
        stroke={isActive ? "#23272E" : "#8B909A"}
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.6666 13.7499C12.6408 14.9718 9.35731 14.9718 7.33331 13.7499"
        stroke={isActive ? "#23272E" : "#8B909A"}
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
