
// {stage === "verification" && (
//     // Email Verification Section
//     <div className={styles.verificationContainer}>
//         <h1>We've emailed you a code</h1>
//         <p>
//             To continue account setup, enter the code we've sent to:
//             <strong> student@gmail.com</strong>
//         </p>
        // <form onSubmit={handleCodeSubmit}>
        //     <div className={styles.codeInputContainer}>
        //         {Array(6)
        //             .fill("")
        //             .map((_, i) => (
        //                 <input
        //                     key={i}
        //                     type="text"
        //                     maxLength="1"
        //                     className={styles.codeInput}
        //                 />
        //             ))}



        {stage === "verification" && (
            // Email Verification Section
            <div className={styles.verificationContainer}>
                <h1>We've emailed you a code</h1>
                <p>
                    To continue account setup, enter the code we've sent to:
                    <strong> student@gmail.com</strong>
                </p>
                <form onSubmit={handleCodeSubmit}>
                    <div className={styles.codeInputContainer}>
                        {Array(6)
                            .fill("")
                            .map((_, i) => (
                                <input
                                    key={i}
                                    type="text"
                                    maxLength="1"
                                    className={styles.codeInput}
                                />
                            ))}
                    </div>
                    <button type="submit" className={styles.button}>
                        Submit
                    </button>
                </form>
                <p className={styles.resend}>
                    Resend: <span>60s</span>
                </p>
            </div>
        )}

