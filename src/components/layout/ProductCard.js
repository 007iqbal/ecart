let ProductCard = (props)=> {
    return (
        <div className="col-lg-3 text-center p-4">
        <div className=" topdeal">
        <img className="py-3" src={props.image} />
         <h5>{props.name}</h5>
         <p className="text-success">{props.discount}</p>
         <p>{props.price}</p>
         <button className="btn btn-danger">Add to Cart</button>
        </div>
     </div>
    )
};


export default ProductCard;