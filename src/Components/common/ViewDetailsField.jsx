function ViewDetailsField({fieldName, data}) {
    return ( 
        <div className="flex gap-2">
        <p className="font-semibold">{fieldName}: </p>
        <p>{data}</p>
      </div>
     );
}

export default ViewDetailsField;