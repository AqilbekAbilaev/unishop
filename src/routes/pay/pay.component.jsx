import FormInput from "../../components/form-input/form-input.component";
import InputSelect from "../../components/form-input/input-select/input-select.component";

import './pay.styles.scss';
import PayState from '../../components/pay-state/pay-state.component';

const Pay = () => {
    return (
        <div className='pay-container'>
            <div className="pay-header">
                <PayState className="profit" />
                <PayState className="loss" />
            </div>
            
            <div className='pay-body'>
                <form>
                    <InputSelect label="Choose the customer"/>
                    <FormInput label="Cash" type="number"/>
                    <FormInput label="Card" type="number"/>
                    <FormInput label="" type="date"/>
                    <FormInput label="Comment" />
                </form>
            </div>
        </div>
    )
}

export default Pay;