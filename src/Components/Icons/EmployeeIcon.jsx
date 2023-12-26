const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={15}
    fill="none"
    {...props}
  >
    <path
      fill="#3F3D3D"
      d="M12 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm5 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-4 7a4 4 0 1 0-8 0v3h8v-3ZM5 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm10 10v-3a5.972 5.972 0 0 0-.75-2.906A3.005 3.005 0 0 1 18 12v3h-3ZM3.75 9.094A5.973 5.973 0 0 0 3 12v3H0v-3a3 3 0 0 1 3.75-2.906Z"
    />
  </svg>
)
export default SvgComponent
