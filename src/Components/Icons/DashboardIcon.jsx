const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width= "18"
    height="18"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 7h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2Zm10 0h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2ZM3 17h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2ZM15 17h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2Z"
    />
  </svg>
)
export default SvgComponent
