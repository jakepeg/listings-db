import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const ActivityList = (props) => {

    const { activities } = props
      return (
      <>
        { activities.map(activity => 
            (
              <div key={activity.id} className="col-lg-4 col-md-6 mb-4">
                <Card className="root" elevation={5}>
                  <CardActionArea href={`/activities/${activity.id}`}>
                    <CardMedia
                      className="cardImage"
                      image={activity.image}
                      title={activity.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" color="textSecondary">
                        {activity.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </div>
            )
          )
        }
      </>
      )
}

export default ActivityList