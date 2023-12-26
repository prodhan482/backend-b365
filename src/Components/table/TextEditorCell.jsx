function TextEditorCell({ text, align }) {
    return <td className={`py-3 px-6 text-left`}>
        {
            <div dangerouslySetInnerHTML={text}>
            </div>
        }
    </td>;
}

  export default TextEditorCell;