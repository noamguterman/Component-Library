import React from 'react'
import ReactDOM from 'react-dom/client'
import Star from "./components/Star"
import Menu from "./components/Menu/index"
import Badge from "./components/Badge"
import Banner from "./components/Banner"
import Card from "./components/Card/index"
import { FaCarSide } from "react-icons/fa"
import './style.css'

function App() {
  return (
    <>
      <Star />
      
      <br />
      <br />
      <br />
      
      <Menu onOpen={() => console.log("Opened/closed")}>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      
      <br />
      <br />
      <br />
      
      <Badge color="red">Badge</Badge>
      <Badge color="yellow">Badge</Badge>
      <Badge color="green">Badge</Badge>
      <Badge color="blue">Badge</Badge>
      <Badge color="indigo">Badge</Badge>
      <Badge color="purple">Badge</Badge>
      <Badge color="pink">Badge</Badge>
      <Badge shape="round" color="red">Badge</Badge>
      <Badge shape="round" color="yellow">Badge</Badge>
      <Badge shape="round" color="green">Badge</Badge>
      <Badge shape="round" color="blue">Badge</Badge>
      <Badge shape="round" color="indigo">Badge</Badge>
      <Badge shape="round" color="purple">Badge</Badge>
      <Badge shape="round" color="pink">Badge</Badge>
      
      <br />
      <br />
      
      <Banner status="success" />
      <Banner status="warning" />
      <Banner status="error" />
      <Banner />
      <Banner status="success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Banner>
      <Banner status="warning">
        Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
      </Banner>
      <Banner status="error">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur.
      </Banner>
      <Banner>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
      </Banner>
      
      <br />
      <br />
      <br />
      <br />
      
      <Card icon={<FaCarSide />}>
        <Card.Title>
          Easy Deployment
        </Card.Title>
        <Card.Description>
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
        </Card.Description>
      </Card>
      
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)