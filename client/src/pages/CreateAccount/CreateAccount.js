import CreateAccountForm from "../../components/CreateAccountForm/CreateAccountForm";
import CreateAccountButton from "../../components/CreateAccountForm/CreateAccountButton";
import './CreateAccount.css';


const CreateAccount = () => {

    return (
        <div className="create-new-account">
            <div className="create-account-title">
                <h2>Create New Account</h2>
            </div>
            <div className="create-account-form">
                <CreateAccountForm />
            </div>
            <div className="create-account-button">
                <CreateAccountButton />
            </div>
        </div>
    );
}

export default CreateAccount;