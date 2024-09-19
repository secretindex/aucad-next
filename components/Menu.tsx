"use client"

import { Layout, Menu, Typography, Image } from "antd"
import {
  QuestionCircleOutlined,
  ProfileOutlined,
  UserDeleteOutlined,
  UserOutlined,
} from "@ant-design/icons"
import Link from "next/link"

const { Title } = Typography

const menuItemsSecond = [
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

const menuItemsOne = [
  {
    key: "Menu",
    label: (
      <Title style={{ margin: 0, padding: 0 }} className="flex items-center" level={1}>
        <Link href="/">
          <Image
            src={"/assets/aucad.svg"}
            alt="Aucad Logo"
            
          />
        </Link>
      </Title>
    ),
  },
]

const menuThird = [
  {
    key: "about",
    icon: <QuestionCircleOutlined />,
    label: (
      <Link href="/about" className="text-inherit">
        Sobre
      </Link>
    ),
  },
]

export default function HeaderMenu() {
  return (
    <Layout>
      <header className="w-full flex flex-row justify-between p-0 m-0">
        <Menu
          mode="horizontal"
          selectedKeys={[]}
          className="flex flex-grow w-auto"
          items={menuItemsOne}
        />
        <Menu
          mode="horizontal"
          selectedKeys={[]}
          className="border-0 w-auto flex flex-grow justify-center"
          items={menuItemsSecond}
        />
        <Menu
          mode="horizontal"
          selectedKeys={[]}
          className="border-0 flex flex-grow w-auto justify-center"
          items={menuThird}
        />
      </header>
    </Layout>
  )
}
