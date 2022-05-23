import './button.styles.scss';

const Button = ({type, value}) => {
    return (
        <button className='button' type={type}>{value}</button>
    )
}

export default Button;