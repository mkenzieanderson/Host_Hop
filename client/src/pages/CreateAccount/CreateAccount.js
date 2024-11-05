import CreateAccountForm from "../../components/CreateAccountForm/CreateAccountForm";
import './CreateAccount.css';


const CreateAccount = () => {

    return (
        <div className="create-new-account">
            <div className="create-account-title">
                <h2>Create New Account</h2>
            </div>
            <div className="create-account-blurb">
                <p>Create your own personal account to unlock access to the Seller’s Marketplace, view order 
                    history, save your wishlist, and more! Getting started is quick and easy - fill in each text
                    box below and click "Sign Up"</p>
            </div>
            <div className="create-account-form">
                <CreateAccountForm />
            </div>
        </div>
    );
}

export default CreateAccount;