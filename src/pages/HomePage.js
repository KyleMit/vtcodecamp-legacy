import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import EventIcon from '@material-ui/icons/Event'
import PlaceIcon from '@material-ui/icons/Place'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class HomePage extends Component {
    render() {
        return (
            <div className="Home">

                <Card >
                    <CardContent>

                        <Typography variant="h3" gutterBottom>
                            About the Event
                        </Typography>

                        <Typography variant="body1" gutterBottom>
                            The upcoming 11th annual Vermont Code Camp will be held on Saturday, September 28, 2019 in Burlington, Vermont.
                        </Typography>

                        <Typography variant="body1" gutterBottom>
                            The entire day is free including morning coffee & pastries, lunch and afternoon snacks for all attendees....
                        </Typography>


                        <Button variant="contained" color="primary"
                            target="_blank" rel="noopener"
                            href="https://www.meetup.com/VTCode/events/">
                            Sign Up On Meetup
                        </Button>

                        <Typography variant="h5" >
                            <EventIcon /> When
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                        Saturday, September 28, 2019
                        </Typography>

                        <Typography variant="h5" >
                            <PlaceIcon /> Where
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                        Center for Communication and Creative Media
Champlain College
375 Maple Street
Burlington, VT
                        </Typography>
                        
                    </CardContent>
                </Card>

            </div>
        );
    }
}

export default HomePage;
