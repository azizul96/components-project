
const CardFirst = () => {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl ">
                <figure><img className="w-full h-full object-cover " src="https://i.ibb.co/0t8htY5/levis.jpg" alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardFirst;