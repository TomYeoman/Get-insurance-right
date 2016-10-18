import React from 'react';
import styles from './HomeTiles.css';

/* Common Components */
import ShadowContainer from '../../../common/ShadowContainer';

/* Page Specific */
import Tile from './Tile';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={`${styles.coverTileContainer} ptop col-xs-12`}>
        <div className="row-no-padding">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">


            <div className="clearfix col-xs-6 col-sm-6 col-md-4">
              <ShadowContainer>
                <Tile
                  title="Life Insurance"
                  imgsrc="images/icon_lifeinsurance.png"
                />
              </ShadowContainer>
            </div>
            <div className="clearfix col-xs-6 col-sm-6 col-md-4">
              <ShadowContainer>
                <Tile
                  title="Critical Illness"
                  imgsrc="images/icon_illness.png"
                />
              </ShadowContainer>
            </div>
            <div className="clearfix col-xs-6 col-sm-6 col-md-4">
              <ShadowContainer>
                <Tile
                  title="Over 50's Insurance"
                  imgsrc="images/icon_over50s.png"
                />
              </ShadowContainer>
            </div>
            <div className="clearfix col-xs-6 col-sm-6 col-md-4">
              <ShadowContainer>
                <Tile
                  title="Income Protection"
                  imgsrc="images/icon_incomeprotection.png"
                />
              </ShadowContainer>
            </div>
            <div className="clearfix col-xs-6 col-sm-6 col-md-4">
              <ShadowContainer>
                <Tile
                  title="Buildings & Contents"
                  imgsrc="images/icon_buildingcontent.png"
                />
              </ShadowContainer>
            </div>
            <div className="clearfix col-xs-6 col-sm-6 col-md-4">
              <ShadowContainer>
                <Tile
                  title="Landlord Insurance"
                  imgsrc="images/icon_landlord.png"
                />
              </ShadowContainer>
            </div>
        </div>

        </div>
      </div>

    )
  }
}
