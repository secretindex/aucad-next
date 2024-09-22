"use client"

import { useState } from "react"

const Register = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  return (
    <section>
      <div className="rounded-md p-4 bg-slate-50">
        <h1>Register</h1>
      </div>
    </section>
  )
}

export default Register
