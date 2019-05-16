import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Course from './Course';

class CourseList extends Component {
  constructor() {
    super();
    this.state = {
      courses: [],
      searchString: ''
    };
  }

  componentDidMount() {
    this.getCourses();
  }

  getCourses = () => {
    const cursos = [
      {
        id: 1,
        title: 'React JS',
        imageUrl:
          'https://images.hgmsites.net/med/2011-lexus-ct-200h_100337567_m.jpg',
        description: 'ReactJS Course',
        url: 'www.udemy.com'
      },
      {
        id: 2,
        title: 'Java',
        imageUrl:
          'https://images.hgmsites.net/med/2011-lexus-ct-200h_100337567_m.jpg',
        description: 'Java Course',
        url: 'www.udemy.com'
      },
      {
        id: 3,
        title: 'ElasticSearch JS',
        imageUrl:
          'https://images.hgmsites.net/med/2011-lexus-ct-200h_100337567_m.jpg',
        description: 'ElasticSearch Course',
        url: 'www.udemy.com'
      }
    ];

    this.setState({ courses: cursos });
    console.log(this.state);
  };

  onSearchInputChange = event => {
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: '' });
    }
    this.getCourses();
  };

  render() {
    return (
      <div>
        {this.state.courses ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Search for Courses"
              margin="normal"
              onChange={this.onSearchInputChange}
            />
            <Grid container xl={12}>
              <Grid item>
                <Grid container xl={6}>
                  {this.state.courses.map(currentCourse => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      lg={4}
                      xl={3}
                      key={currentCourse.id}
                    >
                      <Course course={currentCourse} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </div>
        ) : (
          'No courses found!'
        )}
      </div>
    );
  }
}

export default CourseList;
