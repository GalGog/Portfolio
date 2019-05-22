import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';
import { Container, Button } from 'semantic-ui-react'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
            return(
                <Container>
                <div className="ui doubling three column grid">
                    {/* Project 1 */}

                    <div className="column" style={{width: '30%'}} >
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </div>

                    {/* Project 2 */}

                    <div className="column" style={{width: '30%'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </div>

                    {/* Project 3 */}

                    <div className="column" style={{width: '30%'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </div>


                    {/* Project 4 */}

                    <div className="column" style={{width: '30%'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #4</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </div>

                </div>
                </Container>


            )
        } else if(this.state.activeTab === 1) {
            return (
                <div><h1>WordPress</h1>
                    <Container>
                        <div className="ui doubling three column grid">
                            {/* Project 1 */}

                            <div className="column" style={{width: '30%'}} >
                                <CardTitle style={{color: '#fff', height: '176px',
                                    backgroundImage: "url(" + "http://wp.s4p.uk/wp-content/uploads/2019/05/ezgif.com-webp-to-jpg-4-copy-9-1.jpg" + ")",
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'}}>
                                </CardTitle>
                                <CardText>
                                    Regency Beauty Salon
                                </CardText>
                                <CardActions border>
                                    <Button colored><a href='/'>GitHub</a></Button>
                                    <Button colored><a href='http://wp.s4p.uk/'>Live Demo</a></Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </div>
                            {/* Project 2 */}
                            <div className="column" style={{width: '30%'}} >
                                <CardTitle style={{color: '#fff', height: '176px',
                                    backgroundImage: "url(" + "https://image.shutterstock.com/image-vector/vector-illustration-tax-refund-business-260nw-421189411.jpg" + ")",
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'}}>
                                </CardTitle>
                                <CardText>
                                    Self-assessment tax returns
                                </CardText>
                                <CardActions border>
                                    <Button colored><a href='/'>GitHub</a></Button>
                                    <Button colored><a href='http://hp.s4p.uk'>Live Demo</a></Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </div>

                        </div>
                    </Container>
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div><h1>JavaScript</h1>
                    <Container>
                        <div className="ui doubling three column grid">
                            {/* Project 1 */}

                            <div className="column" style={{width: '30%'}} >
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
                                <CardText>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                </CardText>
                                <CardActions border>
                                    <Button colored><a href='/'>GitHub</a></Button>
                                    <Button colored><a href='/'>Live Demo</a></Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </div>

                        </div>
                    </Container>
                </div>
            )
        }
        }

    render() {
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React/Redux</Tab>
                    <Tab>WordPress</Tab>
                    <Tab>JavaScript</Tab>
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Projects;