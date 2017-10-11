import React, {Component} from 'react';

import {Form, FormControl, Button} from 'react-bootstrap';

import AgeStats from './ageStats';

class App extends Component{
    constructor(){
        super();

        this.state = {
            newDate: '',
            birthday: '1995-06-14',
            showStats: false
        }
    }

    changeBirthday(){
        console.log(this.state);
        this.setState({
            birthday: this.state.newDate,
            showStats : true
        });
    }

    render (){
        return (
            <div className="app">
                <Form inline>
                    <h2>Input Your BirthDay!</h2>
                    <hr/>
                    <FormControl
                        type="date"
                        onChange = {
                            event => this.setState({
                                newDate:event.target.value
                            })
                        }
                    >
                    </FormControl>
                    {' '}
                    <Button onClick={
                        () => {
                           this.changeBirthday()
                        }
                    }>
                        Submit
                    </Button>
                    {
                        this.state.showStats ?
                        <div className="fade age-stats">
                            <AgeStats date={this.state.birthday}/>
                        </div>
                        :
                        <div></div>
                    }
                </Form>
            </div>
        )
    }
}

export default App;
