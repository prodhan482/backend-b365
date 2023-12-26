// function TableHeading({ text, align }) {
//   return (
//     <th className={`px-6 py-3 ${align} font-medium text-gray-500 uppercase tracking-wider `}>
//       {text}
//     </th>
//   );
// }

// export default TableHeading;
function TableHeading({ text, align }) {
  const alignmentClass = align ? 'text-right' : 'text-left';
  return (
    <th className={`px-6 py-3 ${alignmentClass} font-medium text-gray-500 uppercase tracking-wider`}>
      {text}
    </th>
  );
}

export default TableHeading;
