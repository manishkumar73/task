import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      setMessage("Logged in successfully!")
      history.push('/')
       
    }
    catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }
   return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4" style={{color: "red"}}>ADMIN LOGIN</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <div style={{display: 'flex'}}>

              <Form.Label className="w-100 text-center mt-3" >
                <input name="rememberMe"  type="checkbox"/> Remember Me
              </Form.Label>

              <Form.Label className="w-100 text-center mt-3"  >
                <Link to="/forgot-password" style={{color: "red"}}>Forgot Password?</Link>
              </Form.Label>      
            </div>
            <br/>

            
            <Button disabled={loading}  className="btn btn-danger w-100" type="danger" >
              LOGIN
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup" style={{color: "red"}}>Sign Up</Link>
      </div>

    </>
  )
}
