// function TextCell({ text }) {
//     return <td className="py-3 px-6 text-center">{text}</td>;
//   }
  
//   export default TextCell;
function TextCell({ text, align  }) {
  return <td className={`py-3 px-6 text-left`}>{text}</td>;
}

export default TextCell;