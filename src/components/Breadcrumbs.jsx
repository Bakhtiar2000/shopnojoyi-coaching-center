import { Link } from 'react-router-dom';

const Breadcrumbs = ({ bg, title }) => {
    const backgroundImageStyle = {
        backgroundImage: `url(${bg})`,
    };
    return (
        <div style={backgroundImageStyle} className="bg-right-top bg-no-repeat bg-cover xl:bg-center">
            <div className='bg-title/20 pt-20 md:pt-[160px] pb-[60px]'>
                <h1 className='text-center font-semibold text-white text-4xl leading-snug md:text-6xl md:leading-snug lg:text-[70px] lg:leading-[90px] uppercase drop-shadow-lg'>{title}</h1>
                <div className='text-white font-medium text-sm uppercase flex items-center justify-center gap-2 '>
                    <Link to='/'>Home</Link>
                    <span className='text-title'>/</span>
                    <span className='text-dark-gray'>{title}</span>
                </div>

            </div>
        </div>
    );
};

export default Breadcrumbs;