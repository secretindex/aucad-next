"use client"

import { BaseSyntheticEvent, useState } from "react"

const Login = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleChange = (field: string, val: string) => {
    if (field === "email") {
      setEmail(val)
    } else if (field === "pass") {
      setPassword(val)
    }
  }

  return (
    <section className="h-full w-full">
      <div className="bg-sky-100">
        <form>
          <div>
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Type your email"
              value={email}
              onChange={(e: BaseSyntheticEvent) =>
                handleChange("email", e.target.value)
              }
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Type your password"
              value={password}
              onChange={(e: BaseSyntheticEvent) =>
                handleChange("pass", e.target.value)
              }
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
