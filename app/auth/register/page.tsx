import { Layout, Flex, Typography } from "antd"

const { Content } = Layout

const { Title } = Typography

const Register = () => {
  return (
    <Flex>
      <div className="rounded-md p-4 bg-slate-50">
        <Title>Register</Title>
      </div>
    </Flex>
  )
}

export default Register
