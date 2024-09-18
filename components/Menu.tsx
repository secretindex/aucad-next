"use client"

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

const menuItems = [
  {
    key: "Ativos",
    icon: <UserOutlined />,
    label: (
      <Link href="/cad/ativos" className="text-inherit">
        Ativos
      </Link>
    ),
  },
  {
    key: "Inativos",
    icon: <UserDeleteOutlined />,
    label: (
      <Link href="/cad/inativos" className="text-inherit">
        Inativos
      </Link>
    ),
  },
  {
    key: "Pensionistas",
    icon: <ProfileOutlined />,
    label: (
      <Link href="/cad/pensionistas" className="text-inherit">
        Pensionistas
      </Link>
    ),
  },
]

export default function HeaderMenu() {
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
            items={menuItems}
          />
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
