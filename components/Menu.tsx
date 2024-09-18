import { Layout, Menu, Typography, Image } from "antd"
import {
  QuestionCircleOutlined,
  ProfileOutlined,
  UserDeleteOutlined,
  UserOutlined,
} from "@ant-design/icons"
import Link from "next/link"

const { Header } = Layout
const { Item } = Menu
const { Title } = Typography

export default function MenuAnt() {
  return (
    <Layout>
      <Header className="p-0 m-0 h-full">
        <Menu
          mode="horizontal"
          selectedKeys={[]}
          className="flex items-center justify-between px-2 m-0"
          style={{
            lineHeight: "3rem",
          }}
        >
          <Title style={{ margin: 0 }} className="flex items-center" level={1}>
            <Link href="/">
              <Image
                src={"@/assets/aucad horizontal.svg"}
                preview={false}
                alt="Aucad Logo"
                width={"100px"}
              ></Image>
            </Link>
          </Title>
          <Menu
            mode="horizontal"
            selectedKeys={[]}
            className="w-5/6 border-0 flex justify-center"
          >
            <Item key="1" icon={<UserOutlined />}>
              <Link href="/cad/ativos" className="text-inherit">
                Ativos
              </Link>
            </Item>
            <Item key="2" icon={<UserDeleteOutlined />}>
              <Link href="/cad/inativos" className="text-inherit">
                Inativos
              </Link>
            </Item>
            <Item key="3" icon={<ProfileOutlined />}>
              <Link href="/cad/pensionistas" className="text-inherit">
                Pensionistas
              </Link>
            </Item>
          </Menu>
          <Item
            key="4"
            className="no-underline"
            icon={<QuestionCircleOutlined />}
          >
            <Link href="/about" className="text-inherit">
              Sobre
            </Link>
          </Item>
        </Menu>
      </Header>
    </Layout>
  )
}
