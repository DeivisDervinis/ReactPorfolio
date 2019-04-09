import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Deivis Dervinis'
      inverted
      style={{
        fontSize: mobile ? '4em' : '5em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '2.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Portfolio'
      inverted
      style={{
        fontSize: mobile ? '4.5em' : '4.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.1em' : '0.7em',
      }}
    />
    <Button primary size='huge'
    style={{
        
    }}>
      Get Started 
      <br />
      <Icon name='down arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight:'100vh', padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>About</Menu.Item>
                <Menu.Item as='a'>Skills</Menu.Item>
                <Menu.Item as='a'>My Cv</Menu.Item>
                <Menu.Item as='a'>Contact Me</Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a'>About</Menu.Item>
          <Menu.Item as='a'>Skills</Menu.Item>
          <Menu.Item as='a'>My CV</Menu.Item>
          <Menu.Item as='a'>Contact Me</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: '100vh', padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Header as='h1' 
                    style={{fontSize: '3em'}}>
              About Me
            </Header>

            <p style={{ fontSize: '1.33em' }}> Hi! <br/> <br/>
            I’m Deivis! I’m a third year Computer Science student at Sheridan College.
            I am passionate about developing software, particularly in mobile and web.
            <br/><br/>
            Some of the projects I've worked on include:</p>

            <Header as='h2' style={{ fontSize: '1.22em' }}>
            Squid Impact: A Space Invaders Game Clone, Written In Java.
            User Interface Implemented With Javax and Custom Sprites Designed
            In Photoshop.
            </Header>

            <li>App has 5 levels of difficulty, ability to remember scores and player information</li>
            <li>Implemented projectile, velocity, and motion algorithms</li>
            <li>Used pseudorandom generators to display enemies and other obstacles</li>
            <li>Designed an extensible object-oriented architecture to represent Players, Enemies, Sprites, and Projectiles</li>

            <Header as='h2' style={{ fontSize: '1.22em' }}>
              Count The Calories! A Hybrid Cross Platform App That Enables
              Users To Track Their Weekly Grocery Purchases And Look up
              Calorie Counts. Written With HTML5/CSS/JavasScript On The Cordova Platform.
            </Header>

            <li></li>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              My Skills
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Placeholder</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Download My CV
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Get In Touch</a>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Placeholder
        </Header>
        <p style={{ fontSize: '1.33em' }}>
        Placeholder
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Home</List.Item>
                <List.Item as='a'>About</List.Item>
                <List.Item as='a'>My Cv</List.Item>
                <List.Item as='a'>Contact Me</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Placeholder
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout