import React from "react"
import styles from "./Form.module.css"
import validation from "./validation"

export default function Form(props){

    const [userData, setUserData] = React.useState({
        email:"",
        password:"",
    })

    const [errors, setErrors] = React.useState({})

    const handleChange = event =>{
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        })
        setErrors(validation({
            ...userData,
            [name]: value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.login(userData);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input 
                    placeholder="Email..."
                    type="text"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                />
                <p className={styles.errors}>{errors.email ? errors.email : null}</p>
                
                <label>Password:</label>
                <input 
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                />
                <p className={styles.errors}>{errors.password ? errors.password : null}</p>
                
                <hr/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}