function Movie(props) {
  const {
       Title: title,
       Year: year,
       imbdID: id,
       Type: type,
       Poster: poster,
  } = props;
   
  return <div  id={id} ClassName="card">
  <div ClassName="card-image waves-effect waves-block waves-light">
    {
        poster === 'N/A' ?
        <img ClassName="activator" src={'https://placehold.co/300x400?text=${title}'} />
        :
        <img ClassName="activator" src={poster} />

    }
  </div>
  <div ClassName="card-content">
    <span ClassName="card-title activator grey-text text-darken-4">{title}</span>
    <p>{year}<span>{type}</span></p>
  </div>
</div>
          
}

export {Movie}