function Form() {
    return (
        <form action="" method="" className="contactForm">
            <div className="mt-5 row">
                <div className="form-row col-lg-6">
                    <label className="form-label" htmlFor="nameId">Name</label>
                    <input className="form-input" id="nameId" type="text" name="userName"/>
                </div>
                <div className="form-row col-lg-6">
                    <label className="form-label" htmlFor="emailId">Email Address</label>
                    <input className="form-input" id="emailId" type="email" name="email" />
                </div>
            </div>
            <div className="form-row mt-5">
                <label className="form-label" htmlFor="subjectId">Subject</label>
                <input className="form-input" id="subjectId" type="text" name="subject" />
            </div>
            <div className="form-row mt-5">
                <label className="form-label" htmlFor="messageId">Message</label>
                <textarea className="form-input" name="message" id="messageId">
                </textarea>
            </div>
            <button className="resume-btn btn btn-lg mt-5 w-25">Submit</button>
        </form>
    )
}

export default Form;