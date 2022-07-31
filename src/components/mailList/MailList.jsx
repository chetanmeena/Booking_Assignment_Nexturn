import './MailList.style.css'
const MailList = () => {
    return (
        <div className="maillist">
            <h1 className="mailtitle">Save Time,Save Money!</h1>
            <span className="mailtext">Sign up to get more exciting offers</span>
            <div className="emailcontainer">
                <span className="email">Email</span>
                <input type="text" className="input_email" />
                <button>Submit</button>
            </div>
        </div>

    );
}
export default MailList;