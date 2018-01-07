import React, { Component } from 'react'
import { Sidebar, Segment, Menu,  Icon } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import Home from '../../views/home'

import './sidbar.css'


class Drawbar extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false ,color:'red'}

    this.toggleVisibility = () => this.setState({ visible: !this.state.visible })
    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  }



    render() {
      const { visible } = this.state
      const { activeItem } = this.state
      return (
        <Router>
        <div>
           <Menu color={this.state.color} inverted>
        <Menu.Item onClick={this.toggleVisibility}>
              <Icon name='tasks' />
        </Menu.Item>

        <Menu.Menu position='right'>
        <Menu.Item
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          Sign-in
        </Menu.Item>
        </Menu.Menu>
      </Menu>



            <Sidebar color={this.state.color} as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>
             <Menu.Item as={Link}
             name='dashboard'
             to='/'
             onClick={this.toggleVisibility}>
            <Icon name='tasks' />Dashboard
            </Menu.Item>




            </Sidebar>

            <Sidebar.Pusher>
              <Segment basic>

                 <Switch>

                  <Route exact path='/' component={Home} />

                 </Switch>

              </Segment>
            </Sidebar.Pusher>
        </div>
        </Router>
      )
    }
  }


export default Drawbar
