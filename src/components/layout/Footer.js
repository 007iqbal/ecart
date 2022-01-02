let Footer =()=> {
    return (
        <div className="container-fluid footer bg-dark text-light text-center p-4">
                <h5 className="my-4">e-cart.com</h5>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/" >Blog</a></li>
                    <li><a href="/"> Category</a></li>
                    <li><a href="/" >Contact</a></li>
                </ul>
                <h6 className="my-4">Follow us on</h6>
                <ul className="my-4">
                    <li><i class="fab fa-facebook fa-lg text-primary"></i></li>
                    <li><i class="fab fa-youtube fa-lg text-danger"></i></li>
                    <li><i class="fab fa-twitter fa-lg text-primary"></i></li>
                    <li><i class="fab fa-whatsapp fa-lg text-success"></i></li>
                </ul>
                <p>Copyright &copy; 2022. e-cart.com. All rights reserved.</p>
        </div>
    )
}

export default Footer;