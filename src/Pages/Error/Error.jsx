import { Link } from 'react-router-dom';
import img from '../../assets/404.gif'

const Error = () => {
    return (
        <div className=' text-center'>
            <img src={img} alt="" className='w-[600px] mx-auto' />
            <Link className=' text-4xl border-2 rounded-full px-8' to="/">Go to back</Link>
        </div>
    );
};

export default Error;