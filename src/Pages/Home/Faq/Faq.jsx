

const Faq = () => {
    return (
        <div data-aos="flip-up" className=" w-[80%] mx-auto ">
            <h2 className=" text-4xl text-center font-bold text-red-400">Frequently asked questions</h2>
            <div className=" space-y-6  ">
                <div className="collapse collapse-arrow bg-red-200 my-6">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                       1. Who made the first car?
                    </div>
                    <div className="collapse-content">
                        <p>The first practical, gasoline-powered car is widely credited to Karl Benz, a German engineer and inventor. Benz built and patented his Motorwagen in 1886.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-red-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                       2. What is the most popular car?
                    </div>
                    <div className="collapse-content">
                        <p>ost cars are powered by internal-combustion engines. In such an engine a mixture of air and gasoline enters a tubelike cylinder through valves. </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-red-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                       3.  How the car was invented?
                    </div>
                    <div className="collapse-content">
                        <p> German mechanical engineer, Karl Benz designed and built the world's first practical automobile to be powered by an internal-combustion engine.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-red-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                       4. How do cars work?
                    </div>
                    <div className="collapse-content">
                        <p>The engine is the heart of a car. Most cars have internal combustion engines that burn a mixture of fuel (usually gasoline or diesel) and air.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-red-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                       5. Which is the most expensive car?
                    </div>
                    <div className="collapse-content">
                        <p>It's important to note that the automotive industry is dynamic, and new models may have been released since then that could potentially surpass the Bugatti La Voiture Noire in terms of price</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;