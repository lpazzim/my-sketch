import React from 'react';
import Button from '../../components/Button/Button.jsx';
import Card from '../../components/Card/Card.jsx';
import SpaceX from '../../services/spaceX';


function MainContainer(props) {

  return (
    <>
      <Card>
        <div>
          <img src="https://www.spacex.com/static/images/share.jpg" />
          <h1>SpaceX</h1>
          <Button onClick={() => SpaceX.getRockets()}>
            Learn more
        </Button>
        </div>
      </Card>
    </>

  );
}

export default MainContainer;