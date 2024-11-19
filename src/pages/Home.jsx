import React from "react"
import { Categories } from "../assets/mockData"
import homeImage from '../assets/images/home.png'

const Home = () => {
    return (
     
        <>
             <div className='mt-8'> 
                        <img src="src/assets/images/home.png" height='200' width='19000' />
                    </div>

                    <div className='mt-8'> 
                        <img src="src/assets/images/Picture2.png" height='200' width='19000' alt="Categories" />
                    </div>

              <div className='container mxauto px-4 md:px-16 lg:px-24 py-0 flex justify-start items-center text-white'>Categories</div>
                <ul>
                    {Categories.map((category, index) => (
                        <li key={index}>
                            <div>

                            </div>
                            {category}
                        </li>
                    )
                    )}
                </ul>
                   

        </>
     
    );
}

export default Home