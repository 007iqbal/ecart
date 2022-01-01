let Sidenav = () => {
    return (
        <div className="accordion accordion-flush sidenav" id="accordionFlushExample">
            <h5 className="bg-danger text-light p-2">CATEGORIES</h5>
            <div className="accordion-item">
                <p className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Men's Fashion
                    </button>
                </p>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <ul className="list-group">
                            <li className="list-group-item p-0"><a href="/" className="btn">Formal Shirts</a></li>
                            <li className="list-group-item p-0"><a href="/" className="btn">Casual Shirts</a></li>
                            <li className="list-group-item p-0"><a href="/" className="btn">Trousers</a></li>
                            <li className="list-group-item p-0"><a href="/" className="btn">Chinos</a></li>
                            <li className="list-group-item p-0"><a href="/" className="btn">Jeans</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <p className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Women's Fashion
                    </button>
                </p>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <ul className="list-group">
                            <li className="list-group-item p-0"><a href="/" className="btn">Kurti</a></li>
                            <li className="list-group-item p-0"><a href="/" className="btn">Western Wear</a></li>
                            <li className="list-group-item p-0"><a href="/" className="btn">Ethnic Wear</a></li>
                            <li className="list-group-item p-0"><a href="/" className="btn">Top Brands</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <p className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Acceessories
                    </button>
                </p>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <ul className="list-group">
                            <li className="list-group-item p-0"><a href="/" className="btn">Wathes</a></li>
                            <li className="list-group-item p-0"><a href="/" className="btn">Handbags</a></li>
                            <li className="list-group-item p-0"><a href="/" className="btn">Sunglasses</a></li>
                            <li className="list-group-item p-0"><a href="/" className="btn">Bags</a></li>
                            <li className="list-group-item p-0"><a href="/" className="btn">Jewellery</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
            <a className="accordion-header btn px-4 py-3" href="/">
                    Mobiles
                </a>
            </div>

            <div className="accordion-item">
                <a className="accordion-header btn px-4 py-3" href="/">
                    Computers
                </a>
            </div>

            <div className="accordion-item">
                <a className="accordion-header btn px-4 py-3" href="/">
                    Books
                </a>
            </div>

            <div className="accordion-item">
                <a className="accordion-header btn px-4 py-3" href="/">
                    Toys
                </a>
            </div>

            <div className="accordion-item">
                <a className="accordion-header btn px-4 py-3" href="/">
                    Appliances
                </a>
            </div>
        </div>
    )
}

export default Sidenav;